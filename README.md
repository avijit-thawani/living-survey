<!-- TEMPLATE-INTRO:START -->

# Living Surveys

A living survey is a reading list that keeps itself current. It lives in a GitHub
repository's README, so there is no website to deploy, no account to create, and
no API keys to manage.

## How it works

1. **Click "Use this template"** and name your repository. That name becomes your
   survey's title.
2. **Give it some papers to start from.** Any of these work, and you can mix them:
   paste links into `papers.txt`, drop a `.bib` or `.ris` export from Zotero or
   Google Scholar into `import/`, or write `refs: <link to a survey paper>` to
   adopt that survey's entire bibliography in one line.
3. **That is all.** A GitHub Action runs on a schedule, daily by default. It looks
   through the citation graph for papers you should read next and writes them into
   this very README, alongside the table of what you already have.

Scroll down to see a working demo of what that produces.

## Advanced settings

Everything has a working default. Change these only if you want to.

| To change | Edit |
| --- | --- |
| Title and description | `survey.config.json`, or leave blank to use the repo name and description |
| How often it runs | the `cron` line in `.github/workflows/update.yml` |
| How many suggestions appear | `candidateCount` in `survey.config.json` |
| How the paper table is sorted | `sortBy`: `year`, `citations`, `title`, or `added` |
| The recommendation algorithm | the `algorithm` block in `survey.config.json`, implemented in `lib/candidates.js` |
| Papers never to suggest again | add their ids to `data/dismissed.json` |

### How papers are recommended

Suggestions come from two directions through the citation graph, interleaved so
neither crowds out the other.

- **Forward**, `cites N here`: papers that cite N of yours. This is newer work
  building on your survey, and it is what makes the survey living.
- **Backward**, `cited by N here`: papers that N of yours cite. These are the
  foundations of the topic, which the forward pass can never find because they
  predate your papers and never cite them back.

The backward direction is divided by `citationCount ^ popularityPenalty`, the
same idea as the IDF term in TF-IDF, with a paper's global citation count
standing in for document frequency. Without it the list fills with the field's
plumbing, since every numeracy paper cites Adam and BERT and neither says
anything about numeracy. Raising `popularityPenalty` above `0.2` favours obscure
papers; lowering it favours famous ones. Set `forward` or `backward` to `false`
to switch a direction off.

Full instructions are in [SETUP.md](SETUP.md).

<!-- TEMPLATE-INTRO:END -->

<!-- SURVEY:START -->

# Numeracy in NLP (demo)

A worked example: 11 papers on numeracy in NLP, with everything under Suggested next reads found automatically from their citations.

**11** papers · **25** suggested · updated 2026-09-12

> **How to read this page.**
> **Papers** lists the 11 papers in this survey, with **Cited by** showing how often each has been cited.
> **✨ Suggested next reads** is found automatically by following the citation graph, not picked by hand. **Why** says how each one turned up:
> *cites N here*, newer work that builds on N of these papers; *cited by N here*, older work that N of these papers rest on; *from ...*, the bibliography of a survey used as a seed.
> To add any paper, put its link in [`papers.txt`](papers.txt) and commit. Everything below rebuilds itself.

## Papers

| # | Paper | Venue | Year | Cited by |
| ---: | --- | --- | ---: | ---: |
| 1 | [Measuring Mathematical Problem Solving With the MATH Dataset](https://www.semanticscholar.org/paper/57d1e7ac339e783898f2c3b1af55737cbeee9fc5)<br><sub>Dan Hendrycks et al.</sub><br><sub>This work introduces MATH, a new dataset of 12,500 challenging competition mathematics problems which can be used to teach models to generate answer derivations and explanations and shows that accuracy remains relatively low, even with enormous Transformer models.</sub> | NeurIPS Datasets and Benchmarks | 2021 | 6384 |
| 2 | [Are NLP Models really able to Solve Simple Math Word Problems?](https://www.semanticscholar.org/paper/13c4e5a6122f3fa2663f63e49537091da6532f35)<br><sub>Arkil Patel, S. Bhattamishra, Navin Goyal</sub><br><sub>It is shown that MWP solvers that do not have access to the question asked in the MWP can still solve a large fraction of MWPs, and models that treat MWPs as bag-of-words can also achieve surprisingly high accuracy.</sub> | North American Chapter of the Association for Computational Linguistics | 2021 | 1346 |
| 3 | [Climbing towards NLU: On Meaning, Form, and Understanding in the Age of Data](https://www.semanticscholar.org/paper/02eaaf87f9cae34cca398fed146079e6eeb1f868)<br><sub>Emily M. Bender, Alexander Koller</sub><br><sub>It is argued that a system trained only on form has a priori no way to learn meaning, and a clear understanding of the distinction between form and meaning will help guide the field towards better science around natural language understanding.</sub> | Annual Meeting of the Association for Computational Linguistics | 2020 | 1426 |
| 4 | [Injecting Numerical Reasoning Skills into Language Models](https://www.semanticscholar.org/paper/3dd61d97827e3f380bf9304101149a3f865051fc)<br><sub>Mor Geva, Ankit Gupta, Jonathan Berant</sub><br><sub>This work shows that numerical reasoning is amenable to automatic data generation, and thus one can inject this skill into pre-trained LMs, by generating large amounts of data, and training in a multi-task setup.</sub> | Annual Meeting of the Association for Computational Linguistics | 2020 | 249 |
| 5 | [Birds Have Four Legs?! NumerSense: Probing Numerical Commonsense Knowledge of Pre-trained Language Models](https://www.semanticscholar.org/paper/016760dc4a05489ddf5dbb48aecbb49e214e1b71)<br><sub>Bill Yuchen Lin et al.</sub><br><sub>Investigating whether and to what extent one can induce numerical commonsense knowledge from PTLMs as well as the robustness of this process finds that this may not work for numerical Commonsense knowledge.</sub> | Conference on Empirical Methods in Natural Language Processing | 2020 | 169 |
| 6 | [Probing for Multilingual Numerical Understanding in Transformer-Based Language Models](https://www.semanticscholar.org/paper/0c7f81e26ae77b4be5e5e6ab96641effe219ab1c)<br><sub>Devin J. Johnson et al.</sub><br><sub>Novel multilingual probing tasks tested on DistilBERT, XLM, and BERT find evidence that the information encoded in these pretrained models’ embeddings is sufficient for grammaticality judgments but generally not for value comparisons.</sub> | BlackboxNLP Workshop on Analyzing and Interpreting Neural Networks for NLP | 2020 | 18 |
| 7 | [Neural Status Registers](https://www.semanticscholar.org/paper/4599f96dd1a2584e00d342953fc7e1361ffd6e1f)<br><sub>Lukas Faber, Roger Wattenhofer</sub><br><sub>The Neural Status Register is introduced, inspired by physical Status Registers, and at the heart of the NSR are arithmetic comparisons between inputs that allow end-to-end differentiation and learns such comparisons reliably.</sub> | International Conference on Machine Learning | 2020 | 9 |
| 8 | [oLMpics-On What Language Model Pre-training Captures](https://www.semanticscholar.org/paper/5e0cffc51e8b64a8f11326f955fa4b4f1803e3be)<br><sub>Alon Talmor et al.</sub><br><sub>This work proposes eight reasoning tasks, which conceptually require operations such as comparison, conjunction, and composition, and findings can help future work on designing new datasets, models, and objective functions for pre-training.</sub> | Transactions of the Association for Computational Linguistics | 2019 | 317 |
| 9 | [“Going on a vacation” takes longer than “Going for a walk”: A Study of Temporal Commonsense Understanding](https://www.semanticscholar.org/paper/81b4920ad488affaee27389ff9540b7fea90a4ce)<br><sub>Ben Zhou et al.</sub><br><sub>It is found that the best current methods used on MCTACO are still far behind human performance, by about 20%, and several directions for improvement are discussed.</sub> | Conference on Empirical Methods in Natural Language Processing | 2019 | 241 |
| 10 | [Self-Attention with Relative Position Representations](https://www.semanticscholar.org/paper/c8efcc854d97dfc2a42b83316a2109f9d166e43f)<br><sub>Peter Shaw, Jakob Uszkoreit, Ashish Vaswani</sub><br><sub>This work presents an alternative approach, extending the self-attention mechanism to efficiently consider representations of the relative positions, or distances between sequence elements, on the WMT 2014 English-to-German and English- to-French translation tasks.</sub> | North American Chapter of the Association for Computational Linguistics | 2018 | 2920 |
| 11 | [Decoupling Strategy and Generation in Negotiation Dialogues](https://www.semanticscholar.org/paper/b626754a0fd7de12c87e88165b2484ac5d98212a)<br><sub>He He et al.</sub><br><sub>A modular approach based on coarse dialogue acts (e.g., propose(price=50)) that decouples strategy and generation that can flexibly set the strategy using supervised learning, reinforcement learning, or domain-specific knowledge without degeneracy is proposed.</sub> | Conference on Empirical Methods in Natural Language Processing | 2018 | 257 |

## ✨ Suggested next reads

<sub>Generated automatically from the citation graph, not picked by hand. Refreshed daily.</sub>

| Paper | Venue | Year | Cited by | Why |
| --- | --- | ---: | ---: | --- |
| [Do Language Models Understand Measurements?](https://www.semanticscholar.org/paper/ff8f3dfd9e2f4a92310999722abefab202935521)<br><sub>Sungjin Park, Seung-kook Ryu, E. Choi</sub> | Conference on Empirical Methods in Natural Language Processing | 2022 | 6 | cites 4 here |
| [Do NLP Models Know Numbers? Probing Numeracy in Embeddings](https://www.semanticscholar.org/paper/0427110f0e79f41e69a8eb00a3ec8868bac26a4f)<br><sub>Eric Wallace et al.</sub> | Conference on Empirical Methods in Natural Language Processing | 2019 | 319 | cited by 4 here |
| [Investigating the Limitations of Transformers with Simple Arithmetic Tasks](https://www.semanticscholar.org/paper/2cc3ab9fa41ba2804e301f7eae9598636e62422a)<br><sub>Rodrigo Nogueira, Zhiying Jiang, Jimmy J. Li</sub> | - | 2021 | 165 | cites 4 here |
| [Verb Physics: Relative Physical Knowledge of Actions and Objects](https://www.semanticscholar.org/paper/c9f343b492c170c726f607c255ec6c7177dc5800)<br><sub>M. Forbes, Yejin Choi</sub> | Annual Meeting of the Association for Computational Linguistics | 2017 | 87 | cited by 3 here |
| [Extracting Commonsense Properties from Embeddings with Limited Human Guidance](https://www.semanticscholar.org/paper/8eb9b2ea146e3a381a29b4a9314c36f61b71e367)<br><sub>Yiben Yang et al.</sub> | Annual Meeting of the Association for Computational Linguistics | 2018 | 21 | cited by 2 here |
| [Exploring the Numerical Reasoning Capabilities of Language Models: A Comprehensive Analysis on Tabular Data](https://www.semanticscholar.org/paper/5be5619fc22300ef356ec4ef729d567ce7116c57)<br><sub>Mubashara Akhtar et al.</sub> | Conference on Empirical Methods in Natural Language Processing | 2023 | 51 | cites 4 here |
| [Diversify Your Datasets: Analyzing Generalization via Controlled Variance in Adversarial Datasets](https://www.semanticscholar.org/paper/4c9a8caf940627126aaa9bd3ac813d07065c86a0)<br><sub>Ohad Rozen et al.</sub> | Conference on Computational Natural Language Learning | 2019 | 39 | cited by 2 here |
| [Number Cookbook: Number Understanding of Language Models and How to Improve It](https://www.semanticscholar.org/paper/c9e55ef1b3362db711d95a928a28a8cbd0db3092)<br><sub>Haotong Yang et al.</sub> | International Conference on Learning Representations | 2024 | 50 | cites 4 here |
| [How Large Are Lions? Inducing Distributions over Quantitative Attributes](https://www.semanticscholar.org/paper/d34e6c84119cef8eb9149a27d6b4903131407ea6)<br><sub>Yanai Elazar et al.</sub> | Annual Meeting of the Association for Computational Linguistics | 2019 | 62 | cited by 2 here |
| [Beyond Output Matching: Bidirectional Alignment for Enhanced In-Context Learning](https://www.semanticscholar.org/paper/59c436bbdcc524e1c8a07d1d24fa3ef122d7d9fa)<br><sub>Chengwei Qin et al.</sub> | Annual Meeting of the Association for Computational Linguistics | 2023 | 9 | cites 3 here |
| [Deep Learning for Symbolic Mathematics](https://www.semanticscholar.org/paper/b39eed03d345f5c244eac12fd1315d26eba77d62)<br><sub>Guillaume Lample, François Charton</sub> | International Conference on Learning Representations | 2019 | 507 | cited by 3 here |
| [A Survey of Deep Learning for Mathematical Reasoning](https://www.semanticscholar.org/paper/2dbec38fe353ab0e495ad09263389dbc9260824d)<br><sub>Pan Lu et al.</sub> | Annual Meeting of the Association for Computational Linguistics | 2022 | 209 | cites 3 here |
| [Analysing Mathematical Reasoning Abilities of Neural Models](https://www.semanticscholar.org/paper/afed6dc6900d3b37e528b9086661bba583d60bf6)<br><sub>D. Saxton et al.</sub> | International Conference on Learning Representations | 2019 | 532 | cited by 3 here |
| [Commonsense Knowledge Reasoning and Generation with Pre-trained Language Models: A Survey](https://www.semanticscholar.org/paper/7e5ca499cd9b932921bda84db98f75087d0b0683)<br><sub>Prajjwal Bhargava, Vincent Ng</sub> | AAAI Conference on Artificial Intelligence | 2022 | 79 | cites 3 here |
| [MAWPS: A Math Word Problem Repository](https://www.semanticscholar.org/paper/2bdbb07bc12b8d8c332b7a84aa05e76218c07cd9)<br><sub>Rik Koncel-Kedziorski et al.</sub> | North American Chapter of the Association for Computational Linguistics | 2016 | 534 | cited by 3 here |
| [TIMEDIAL: Temporal Commonsense Reasoning in Dialog](https://www.semanticscholar.org/paper/62953ca1252c9febe07c7007a10911726f37792d)<br><sub>Lianhui Qin et al.</sub> | Annual Meeting of the Association for Computational Linguistics | 2021 | 95 | cites 3 here |
| [Analysis Methods in Neural Language Processing: A Survey](https://www.semanticscholar.org/paper/668f42a4d4094f0a66d402a16087e14269b31a1f)<br><sub>Yonatan Belinkov, James R. Glass</sub> | Transactions of the Association for Computational Linguistics | 2018 | 672 | cited by 3 here |
| [Identify, Align, and Integrate: Matching Knowledge Graphs to Commonsense Reasoning Tasks](https://www.semanticscholar.org/paper/d3a1e7f060bfe7d97c2e430da9eb6967bbbe358a)<br><sub>Lisa Bauer</sub> | Conference of the European Chapter of the Association for Computational Linguistics | 2021 | 19 | cites 3 here |
| [Language Models as Knowledge Bases?](https://www.semanticscholar.org/paper/d0086b86103a620a86bc918746df0aa642e2a8a3)<br><sub>F. Petroni et al.</sub> | Conference on Empirical Methods in Natural Language Processing | 2019 | 3309 | cited by 4 here |
| [Dissociating language and thought in large language models](https://www.semanticscholar.org/paper/cf36c0c47e1f1a9bb5285c638bdd77244113bbae)<br><sub>Kyle Mahowald et al.</sub> | Trends in Cognitive Sciences | 2024 | 576 | cites 3 here |
| [BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding](https://www.semanticscholar.org/paper/df2b0e26d0599ce3e70df8a9da02e51594e0e992)<br><sub>Jacob Devlin et al.</sub> | North American Chapter of the Association for Computational Linguistics | 2019 | 120739 | cited by 8 here |
| [On the data requirements of probing](https://www.semanticscholar.org/paper/7bebb48d34c219b119ca2d4ffc97d7fd4940c35c)<br><sub>Zining Zhu et al.</sub> | Findings | 2022 | 5 | cites 3 here |
| [MathQA: Towards Interpretable Math Word Problem Solving with Operation-Based Formalisms](https://www.semanticscholar.org/paper/eef7cfe8267954adbb4675576072a1d80ca7a3a8)<br><sub>Aida Amini et al.</sub> | North American Chapter of the Association for Computational Linguistics | 2019 | 915 | cited by 3 here |
| [Predicting Numerals in Natural Language Text Using a Language Model Considering the Quantitative Aspects of Numerals](https://www.semanticscholar.org/paper/c9343c26a0e604f7afd94b7290bbdf8d96cd65b6)<br><sub>Taku Sakamoto, Akiko Aizawa</sub> | Workshop on Knowledge Extraction and Integration for Deep Learning Architectures; Deep Learning Inside Out | 2021 | 5 | cites 3 here |
| [Investigating BERT’s Knowledge of Language: Five Analysis Methods with NPIs](https://www.semanticscholar.org/paper/3cd331c997e90f737810aad6fcce4d993315189f)<br><sub>Alex Warstadt et al.</sub> | Conference on Empirical Methods in Natural Language Processing | 2019 | 133 | cited by 2 here |

To add any of these, paste its link into [`papers.txt`](papers.txt) and commit.

<!-- SURVEY:END -->

<!--
  Anything you write between the SURVEY:END marker above and the footer below
  is yours and is never overwritten. Notes, scope, open questions, a call for
  contributions -- all safe here.
-->

---

<!-- TEMPLATE-FOOTER:START -->

### Want your own living survey?

Click **Use this template**, name your repo, and overwrite [`papers.txt`](papers.txt) with your papers, and you get the table above plus ✨ daily reading suggestions mined from the citation graph, with no site to host and no API keys. Details in [SETUP.md](SETUP.md).

<!-- TEMPLATE-FOOTER:END -->
