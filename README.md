<!-- TEMPLATE-INTRO:START -->

# Living Surveys

A reading list that keeps itself current, living in a GitHub repo's README.

Your survey is a repo you own and nothing else. No website, no backend, no
database, no account, no API keys — the papers, the data files and the code all
sit in your repo, and a GitHub Action rewrites them in place. Nothing is sent
anywhere except the public metadata lookups every run makes to Semantic Scholar
and OpenAlex.

**No LLM picks your papers.** Recommendations come from a citation graph
algorithm you can read in `lib/recommend.js` and tune in `survey.config.json`:
same inputs, same output, every time, and every row says which of your papers it
came from.

## Demos

Four surveys living in this repo, each grown from a single `author:` line and
updated daily. They also show that one repository can hold many surveys — see
[SETUP.md](https://github.com/avijit-thawani/living-survey/blob/main/SETUP.md#more-than-one-survey-in-one-repo).

<!-- SURVEYS:START -->

| Survey | What is in it | Updated |
| --- | --- | --- |
| [Yoshua Bengio](demos/bengio/) | Every paper by Yoshua Bengio, with what to read next found automatically from their citations. · **814** in your list · **25** Recs | 2026-09-20 |
| [Noam Brown](demos/brown/) | Every paper by Noam Brown, with what to read next found automatically from their citations. · **110** in your list · **25** Recs | 2026-09-20 |
| [Jeff Dean](demos/dean/) | Every paper by Jeff Dean, with what to read next found automatically from their citations. · **38** in your list · **25** Recs | 2026-09-20 |
| [Chris Olah](demos/olah/) | Every paper by Chris Olah, with what to read next found automatically from their citations. · **27** in your list · **25** Recs | 2026-09-20 |

<!-- SURVEYS:END -->

And in repositories of their own: [Tokenization in
NLP](https://github.com/avijit-thawani/tokenization-in-nlp) (51 pasted links),
[Numeracy in NLP](https://github.com/avijit-thawani/numeracy-in-nlp), [a 474-entry
thesis bibliography](https://github.com/avijit-thawani/thesis-bibliography) and
[Niyati Bafna](https://github.com/avijit-thawani/niyati-literature).

## Make your own

1. **Use this template** and name your repo. The name becomes the survey title.

2. **Seed it from a profile.** One line in `import/papers.txt`:

   ```
   author: https://www.semanticscholar.org/author/J-Dean/48448318
   ```

   Everything that person has published becomes your starting library — an
   OpenAlex id, an ORCID or just their name work too. Point it at yourself for
   a reading list built around your own work. The profile is *followed*, not
   imported once, so when they publish, the next daily run adds it.

   Or mix in any of the other three: plain links, DOIs, arXiv ids or titles;
   a `.bib` / `.ris` dropped in from Zotero, Mendeley or Google Scholar; and
   `refs: <link>` to take everything one paper cites.

3. **It runs itself.** A daily Action looks up what you added, follows the
   citation graph, and rewrites your README. **Recs** comes first — what to read
   next, in two tables: the best of the past month, then the past year — and
   **your list** follows. Sorted copies of both live in `views/`.

4. **Grow it from Recs.** Every Rec row has a **Decide** cell with the same two
   choices: `add` or `drop`, one click each. Where pull requests are switched
   on, `add` opens the one waiting for that paper, so accepting it is a merge.

Full instructions, settings and how the ranking works: **[SETUP.md](https://github.com/avijit-thawani/living-survey/blob/main/SETUP.md)**.

<!-- TEMPLATE-INTRO:END -->

<!-- SURVEY:START -->
<!-- SURVEY:END -->

<!--
  Anything you write between the SURVEY:END marker above and the footer below
  is yours and is never overwritten. Notes, scope, open questions, a call for
  contributions -- all safe here.
-->

---

<!-- TEMPLATE-FOOTER:START -->

### Want your own living survey?

Click **Use this template**, add your papers, and a daily GitHub Action keeps
the tables above up to date. Everything lives in your own repo — no website, no
backend, no database, no API keys — and the Recs come from a citation graph
algorithm you can tune, not from an LLM. See **[SETUP.md](https://github.com/avijit-thawani/living-survey/blob/main/SETUP.md)**.

<!-- TEMPLATE-FOOTER:END -->
