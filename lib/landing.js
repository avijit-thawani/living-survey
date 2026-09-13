import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Is this checkout the template's own repository, rather than somebody's
 * survey?
 *
 * The template repo has one job: explain the thing and link to surveys that
 * use it. It used to prove the point by carrying a demo survey in its own
 * README, which worked but buried the explanation under two hundred rows of
 * papers about numeracy. Real surveys make the better demo, so the landing
 * page links to them instead and renders nothing of its own.
 *
 * The marker is the file a new survey inherits and then deletes on its first
 * run, so this is false everywhere except the one repo -- and it is checked
 * against `GITHUB_REPOSITORY` as well, so a fork or a clone of the template
 * still behaves like a survey rather than silently refusing to update.
 */
export const isLandingRepo = (root, repo = process.env.GITHUB_REPOSITORY) => {
  const marker = join(root, ".demo-survey");
  if (!existsSync(marker)) return false;

  try {
    const meta = JSON.parse(readFileSync(marker, "utf8"));
    return Boolean(meta?.landing) && Boolean(repo) && meta.repo === repo;
  } catch {
    return false;
  }
};
