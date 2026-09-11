import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { createContext, runInContext } from "node:vm";

const layout = readFileSync(new URL("../src/layouts/Layout.astro", import.meta.url), "utf8");
const scripts = [...layout.matchAll(/<script is:inline>([\s\S]*?)<\/script>/g)].map(m => m[1]);
function harness(host = "shakashakahead.com") {
    const listeners = {};
    const loaded = [];
    class Element {
        constructor(link) { this.link = link; }
        closest() { return this.link; }
    }
    class HTMLAnchorElement extends Element {
        constructor(href) { super(); this.href = href; this.link = this; }
    }
    const context = createContext({
        URL, Element, HTMLAnchorElement,
        location: { hostname: host, href: "https://" + host + "/tools/" },
        document: {
            createElement: () => ({}),
            head: { appendChild: el => loaded.push(el) },
            addEventListener: (type, listener) => { listeners[type] = listener; },
        },
    });
    context.window = context;
    scripts.forEach(s => runInContext(s, context));
    return {
        loaded,
        queue: () => Array.from(context.dataLayer, x => Array.from(x)),
        events: () => Array.from(context.dataLayer, x => Array.from(x)).filter(x => x[0] === "event"),
        fire(href, type = "click", button = 0, nested = false) {
            const link = new HTMLAnchorElement(href);
            // Keyboard activation emits click with button=0, detail=0.
            listeners[type]({ type, button, detail: 0, target: nested ? new Element(link) : link });
        },
    };
}
const gh = "https://github.com/shakashakahead-cyber/";
const cases = [
    ["https://chromewebstore.google.com/detail/twitch-stream-helper/fonjapihhkafhmjfdpdcgfoghngldmep", "twitch_stream_helper", "chrome_web_store"],
    ["https://chromewebstore.google.com/detail/eolabmdepbcdcppfdmkibgjffiifndkd?utm_source=item-share-cb", "comment_reader", "chrome_web_store"],
    [gh + "clip-extractor/releases/download/v1.0.3-beta/ClipExtractorSetup.exe", "clip_extractor", "github_release"],
    [gh + "twitch-tools-portfolio/releases/download/ichi-0.1.0-alpha32/IchiBrowser-0.1.0-alpha32-arm64-v8a.apk", "ichi_browser", "github_release"],
    [gh + "twitch-stream-helper/releases/latest", "twitch_stream_helper", "github_release_page"],
    [gh + "twitch-tools-portfolio/releases/tag/ichi-0.1.0-alpha32/?from=history", "ichi_browser", "github_release_page"],
];
for (const [href, tool, destination] of cases) {
    test(tool + " / " + destination + " records one event with the original URL", () => {
        const h = harness();
        h.fire(href, "click", 0, true);
        assert.equal(h.events().length, 1);
        const [, name, params] = h.events()[0];
        assert.equal(name, "tool_download_click");
        assert.equal(params.tool_name, tool);
        assert.equal(params.destination, destination);
        assert.equal(params.link_url, href);
    });
}
test("middle click counts once; right click and other auxiliary buttons do not", () => {
    const h = harness();
    h.fire(cases[0][0], "auxclick", 1);
    h.fire(cases[0][0], "auxclick", 2);
    h.fire(cases[0][0], "auxclick", 3);
    assert.equal(h.events().length, 1);
});
test("internal navigation, source archives, checksums and unrelated releases are excluded", () => {
    const h = harness();
    for (const href of [
        "#download", "/tools/ichi-browser/", "https://www.gyan.dev/ffmpeg/builds/",
        gh + "twitch-stream-helper",
        gh + "twitch-tools-portfolio/releases/tag/other-release",
        gh + "twitch-tools-portfolio/releases/download/ichi-0.1.0-alpha32/source.zip",
        gh + "twitch-tools-portfolio/releases/download/ichi-0.1.0-alpha32/app.apk.sha256",
        "https://example.com/fonjapihhkafhmjfdpdcgfoghngldmep",
    ]) h.fire(href);
    assert.equal(h.events().length, 0);
});
for (const host of ["localhost", "127.0.0.1", "preview.twitch-tools-portfolio.pages.dev", "shakashakahead.com.example.org"]) {
    test(host + " does not load or initialize GA or record clicks", () => {
        const h = harness(host);
        h.fire(cases[0][0]);
        h.fire(cases[0][0], "auxclick", 1);
        assert.equal(h.loaded.length, 0);
        assert.equal(h.queue().length, 0);
    });
}
test("production initializes the existing property and loads the async tag once", () => {
    const h = harness();
    assert.equal(h.loaded.length, 1);
    assert.equal(h.loaded[0].async, true);
    assert.equal(h.loaded[0].src, "https://www.googletagmanager.com/gtag/js?id=G-411RHL1DTK");
    assert.equal(h.queue()[1][0], "config");
    assert.equal(h.queue()[1][1], "G-411RHL1DTK");
});

