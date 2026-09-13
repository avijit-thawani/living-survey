<!-- TEMPLATE-INTRO:START -->

# Living Surveys

A reading list that keeps itself current, living in a GitHub repo's README.
No website to deploy, no account, no API keys.

1. **Use this template** and name your repo. The name becomes the survey title.

2. **Seed it.** Anything in `import/` counts, and you can mix all three:
   - lines in `import/papers.txt`: a link, a bare DOI or arXiv id, or just the
     paper's title;
   - a `.bib` or `.ris` file dropped in, straight from Zotero, Mendeley or
     Google Scholar;
   - `refs: <link>` to take everything one paper cites. Point it at a survey
     for a ready-made reading list, at your thesis to see what it rests on, or
     at a draft to catch related work you missed.

3. **It runs itself.** A daily Action looks up what you added, follows the
   citation graph, and rewrites this README with two tables: **Core**, the
   papers you have, and **Recs**, what to read next. Sorted copies of both live
   in `views/`.

4. **Grow it from Recs.** Every Rec row has a **Decide** link: `add` or `drop`
   to answer with one click, or `review` where a pull request is waiting, so
   accepting a paper is a merge and rejecting it is a close.

Full instructions, settings and how the ranking works: **[SETUP.md](https://github.com/avijit-thawani/living-survey/blob/main/SETUP.md)**.

Scroll down for a live demo.

<!-- TEMPLATE-INTRO:END -->

<!-- SURVEY:START -->

# Numeracy in NLP (demo)

A worked example: 11 papers on numeracy in NLP, with everything under Suggested next reads found automatically from their citations.

**11** in Core · **25** Recs · updated 2026-09-13

## Core

The papers in this survey.

| # | [Paper](views/core-by-title.md) | Venue | [Year](views/core-by-year.md) | [Cited by](views/core-by-citations.md) | Score &#9660; |
| ---: | --- | --- | ---: | ---: | ---: |
| 1 | [Birds Have Four Legs?! NumerSense: Probing Numerical Commonsense Knowledge of Pre-trained Language Models](https://www.semanticscholar.org/paper/016760dc4a05489ddf5dbb48aecbb49e214e1b71)<br><sub>Bill Yuchen Lin et al.</sub><br><sub>Investigating whether and to what extent one can induce numerical commonsense knowledge from PTLMs as well as the robustness of this process finds that this may not work for numerical Commonsense knowledge.</sub> | Conference on Empirical Methods in Natural Language Processing | 2020 | 169 | 100 |
| 2 | [oLMpics-On What Language Model Pre-training Captures](https://www.semanticscholar.org/paper/5e0cffc51e8b64a8f11326f955fa4b4f1803e3be)<br><sub>Alon Talmor et al.</sub><br><sub>This work proposes eight reasoning tasks, which conceptually require operations such as comparison, conjunction, and composition, and findings can help future work on designing new datasets, models, and objective functions for pre-training.</sub> | Transactions of the Association for Computational Linguistics | 2019 | 317 | 50 |
| 3 | [Injecting Numerical Reasoning Skills into Language Models](https://www.semanticscholar.org/paper/3dd61d97827e3f380bf9304101149a3f865051fc)<br><sub>Mor Geva, Ankit Gupta, Jonathan Berant</sub><br><sub>This work shows that numerical reasoning is amenable to automatic data generation, and thus one can inject this skill into pre-trained LMs, by generating large amounts of data, and training in a multi-task setup.</sub> | Annual Meeting of the Association for Computational Linguistics | 2020 | 249 | 50 |
| 4 | [Self-Attention with Relative Position Representations](https://www.semanticscholar.org/paper/c8efcc854d97dfc2a42b83316a2109f9d166e43f)<br><sub>Peter Shaw, Jakob Uszkoreit, Ashish Vaswani</sub><br><sub>This work presents an alternative approach, extending the self-attention mechanism to efficiently consider representations of the relative positions, or distances between sequence elements, on the WMT 2014 English-to-German and English- to-French translation tasks.</sub> | North American Chapter of the Association for Computational Linguistics | 2018 | 2920 | 0 |
| 5 | [“Going on a vacation” takes longer than “Going for a walk”: A Study of Temporal Commonsense Understanding](https://www.semanticscholar.org/paper/81b4920ad488affaee27389ff9540b7fea90a4ce)<br><sub>Ben Zhou et al.</sub><br><sub>It is found that the best current methods used on MCTACO are still far behind human performance, by about 20%, and several directions for improvement are discussed.</sub> | Conference on Empirical Methods in Natural Language Processing | 2019 | 241 | 0 |
| 6 | [Measuring Mathematical Problem Solving With the MATH Dataset](https://www.semanticscholar.org/paper/57d1e7ac339e783898f2c3b1af55737cbeee9fc5)<br><sub>Dan Hendrycks et al.</sub><br><sub>This work introduces MATH, a new dataset of 12,500 challenging competition mathematics problems which can be used to teach models to generate answer derivations and explanations and shows that accuracy remains relatively low, even with enormous Transformer models.</sub> | NeurIPS Datasets and Benchmarks | 2021 | 6384 | 0 |
| 7 | [Climbing towards NLU: On Meaning, Form, and Understanding in the Age of Data](https://www.semanticscholar.org/paper/02eaaf87f9cae34cca398fed146079e6eeb1f868)<br><sub>Emily M. Bender, Alexander Koller</sub><br><sub>It is argued that a system trained only on form has a priori no way to learn meaning, and a clear understanding of the distinction between form and meaning will help guide the field towards better science around natural language understanding.</sub> | Annual Meeting of the Association for Computational Linguistics | 2020 | 1426 | 0 |
| 8 | [Neural Status Registers](https://www.semanticscholar.org/paper/4599f96dd1a2584e00d342953fc7e1361ffd6e1f)<br><sub>Lukas Faber, Roger Wattenhofer</sub><br><sub>The Neural Status Register is introduced, inspired by physical Status Registers, and at the heart of the NSR are arithmetic comparisons between inputs that allow end-to-end differentiation and learns such comparisons reliably.</sub> | International Conference on Machine Learning | 2020 | 9 | 0 |
| 9 | [Decoupling Strategy and Generation in Negotiation Dialogues](https://www.semanticscholar.org/paper/b626754a0fd7de12c87e88165b2484ac5d98212a)<br><sub>He He et al.</sub><br><sub>A modular approach based on coarse dialogue acts (e.g., propose(price=50)) that decouples strategy and generation that can flexibly set the strategy using supervised learning, reinforcement learning, or domain-specific knowledge without degeneracy is proposed.</sub> | Conference on Empirical Methods in Natural Language Processing | 2018 | 257 | 0 |
| 10 | [Probing for Multilingual Numerical Understanding in Transformer-Based Language Models](https://www.semanticscholar.org/paper/0c7f81e26ae77b4be5e5e6ab96641effe219ab1c)<br><sub>Devin J. Johnson et al.</sub><br><sub>Novel multilingual probing tasks tested on DistilBERT, XLM, and BERT find evidence that the information encoded in these pretrained models’ embeddings is sufficient for grammaticality judgments but generally not for value comparisons.</sub> | BlackboxNLP Workshop on Analyzing and Interpreting Neural Networks for NLP | 2020 | 18 | 0 |

[... and 1 more, sorted by score](views/core-by-score.md)

## ✨ Recs

<sub>Found by following the citation graph, not picked by hand. Refreshed daily. To accept one, paste its link into [`import/papers.txt`](import/papers.txt) and commit.</sub>

| # | [Paper](views/recs-by-title.md) | Venue | [Year](views/recs-by-year.md) | [Cited by](views/recs-by-citations.md) | Score &#9660; | Why |
| ---: | --- | --- | ---: | ---: | ---: | --- |
| 1 | [Do NLP Models Know Numbers? Probing Numeracy in Embeddings](https://www.semanticscholar.org/paper/0427110f0e79f41e69a8eb00a3ec8868bac26a4f)<br><sub>Eric Wallace et al.</sub><br><sub>This work investigates the numerical reasoning capabilities of a state-of-the-art question answering model on the DROP dataset and finds this model excels on questions that require numerical reasoning, i.e., it already captures numeracy.</sub> | Conference on Empirical Methods in Natural Language Processing | 2019 | 319 | 100 | cited by 4 in Core |
| 2 | [Investigating the Limitations of Transformers with Simple Arithmetic Tasks](https://www.semanticscholar.org/paper/2cc3ab9fa41ba2804e301f7eae9598636e62422a)<br><sub>Rodrigo Nogueira, Zhiying Jiang, Jimmy J. Li</sub><br><sub>It is found that how a number is represented in its surface form has a strong influence on the model's accuracy, and this result bolsters evidence that subword tokenizers and positional encodings are components in current transformer designs that might need improvement.</sub> | - | 2021 | 165 | 100 | cites 4 in Core |
| 3 | [Exploring the Numerical Reasoning Capabilities of Language Models: A Comprehensive Analysis on Tabular Data](https://www.semanticscholar.org/paper/5be5619fc22300ef356ec4ef729d567ce7116c57)<br><sub>Mubashara Akhtar et al.</sub><br><sub>A hierarchical taxonomy for numerical reasoning skills with more than ten reasoning types across four levels: representation, number sense, manipulation, and complex reasoning is proposed.</sub> | Conference on Empirical Methods in Natural Language Processing | 2023 | 51 | 100 | cites 4 in Core |
| 4 | [Number Cookbook: Number Understanding of Language Models and How to Improve It](https://www.semanticscholar.org/paper/c9e55ef1b3362db711d95a928a28a8cbd0db3092)<br><sub>Haotong Yang et al.</sub><br><sub>This work introduces a benchmark covering four common numerical representations and 17 distinct numerical tasks in four major categories, and finetune practical-scale LLMs on proposed NUPA tasks and finds that naive finetuning can improve NUPA a lot on many but not all tasks, and surprisingly, techniques designed to enhance NUPA prove ineffective for finetuning pretrained models.</sub> | International Conference on Learning Representations | 2024 | 50 | 100 | cites 4 in Core |
| 5 | [Do Language Models Understand Measurements?](https://www.semanticscholar.org/paper/ff8f3dfd9e2f4a92310999722abefab202935521)<br><sub>Sungjin Park, Seung-kook Ryu, E. Choi</sub><br><sub>This study shows that PLMs lack the capability required for reasoning over measurements, and proposes a simple embedding strategy to better distinguish between numbers and units, which leads to a significant improvement in the probing tasks.</sub> | Conference on Empirical Methods in Natural Language Processing | 2022 | 6 | 100 | cites 4 in Core |
| 6 | [Verb Physics: Relative Physical Knowledge of Actions and Objects](https://www.semanticscholar.org/paper/c9f343b492c170c726f607c255ec6c7177dc5800)<br><sub>M. Forbes, Yejin Choi</sub><br><sub>An approach to infer relative physical knowledge of actions and objects along five dimensions (e.g., size, weight, and strength) from unstructured natural language text is presented.</sub> | Annual Meeting of the Association for Computational Linguistics | 2017 | 87 | 97 | cited by 3 in Core |
| 7 | [Extracting Commonsense Properties from Embeddings with Limited Human Guidance](https://www.semanticscholar.org/paper/8eb9b2ea146e3a381a29b4a9314c36f61b71e367)<br><sub>Yiben Yang et al.</sub><br><sub>This work proposes and assess methods for extracting one type of commonsense knowledge, object-property comparisons, from pre-trained embeddings and shows that an active learning approach that synthesizes common-sense queries can boost accuracy.</sub> | Annual Meeting of the Association for Computational Linguistics | 2018 | 21 | 86 | cited by 2 in Core |
| 8 | [Diversify Your Datasets: Analyzing Generalization via Controlled Variance in Adversarial Datasets](https://www.semanticscholar.org/paper/4c9a8caf940627126aaa9bd3ac813d07065c86a0)<br><sub>Ohad Rozen et al.</sub><br><sub>This work extends the method to drive conclusions about a model’s ability to learn and generalize a target phenomenon rather than to “learn” a dataset, by controlling additional aspects in the adversarial datasets.</sub> | Conference on Computational Natural Language Learning | 2019 | 39 | 76 | cited by 2 in Core |
| 9 | [Dissociating language and thought in large language models](https://www.semanticscholar.org/paper/cf36c0c47e1f1a9bb5285c638bdd77244113bbae)<br><sub>Kyle Mahowald et al.</sub> | Trends in Cognitive Sciences | 2024 | 576 | 75 | cites 3 in Core |
| 10 | [A Survey of Deep Learning for Mathematical Reasoning](https://www.semanticscholar.org/paper/2dbec38fe353ab0e495ad09263389dbc9260824d)<br><sub>Pan Lu et al.</sub><br><sub>This survey paper reviews the key tasks, datasets, and methods at the intersection of mathematical reasoning and deep learning over the past decade, and evaluates existing benchmarks and methods and discusses future research directions in this domain.</sub> | Annual Meeting of the Association for Computational Linguistics | 2022 | 209 | 75 | cites 3 in Core |

[... and 15 more, sorted by score](views/recs-by-score.md)

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
the tables above up to date. No hosting, no API keys. See **[SETUP.md](https://github.com/avijit-thawani/living-survey/blob/main/SETUP.md)**.

<!-- TEMPLATE-FOOTER:END -->
