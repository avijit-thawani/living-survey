import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { isLandingRepo } from "../lib/landing.js";

/**
 * This guard stops a repo updating itself, so every way it could misfire ends
 * with somebody's survey silently going stale. It has to be false for anything
 * that is not literally the template repo.
 */
const withMarker = (contents, fn) => {
  const dir = mkdtempSync(join(tmpdir(), "landing-"));
  try {
    if (contents !== null) writeFileSync(join(dir, ".demo-survey"), contents);
    return fn(dir);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
};

const TEMPLATE = "avijit-thawani/living-survey";
const marker = JSON.stringify({ repo: TEMPLATE, landing: true });

test("the template repo is the landing page", () => {
  withMarker(marker, (dir) => assert.equal(isLandingRepo(dir, TEMPLATE), true));
});

test("a survey made from the template is not, even before it deletes the marker", () => {
  withMarker(marker, (dir) => assert.equal(isLandingRepo(dir, "someone/my-survey"), false));
});

test("a local run with no repository set is not the landing page", () => {
  withMarker(marker, (dir) => assert.equal(isLandingRepo(dir, ""), false));
  withMarker(marker, (dir) => assert.equal(isLandingRepo(dir, undefined), false));
});

test("a survey that deleted the marker is not the landing page", () => {
  withMarker(null, (dir) => assert.equal(isLandingRepo(dir, TEMPLATE), false));
});

test("the old demo marker, which has no landing flag, is not the landing page", () => {
  withMarker(JSON.stringify({ repo: TEMPLATE, title: "Numeracy in NLP (demo)" }), (dir) =>
    assert.equal(isLandingRepo(dir, TEMPLATE), false)
  );
});

test("an unreadable marker does not stop a survey updating", () => {
  withMarker("{ not json", (dir) => assert.equal(isLandingRepo(dir, TEMPLATE), false));
});
