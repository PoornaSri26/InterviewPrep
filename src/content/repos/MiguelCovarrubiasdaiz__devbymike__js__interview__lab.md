# JS Interview Lab by DevByMike

> Questions, exercises, and challenges to prepare for JavaScript technical interviews.

This is a **free** resource for the developer community. Here you'll find real JavaScript technical interview questions, explained clearly, with runnable examples, hands-on exercises, and "what does this code print?" style questions.

Everything is written to help a **junior** developer understand the concepts and, above all, learn to **explain** them out loud.

---

## What is this repo?

A practice lab for JavaScript interviews. It's not a long theory course: it's concrete, direct material aimed at helping you pass your next technical interview.

It includes:

- **Interview questions** by topic, each with a short answer, a simple explanation, a code example, a common mistake, and how to answer it out loud.
- **Code challenges** you can run with Node.js.
- **Output questions** (`what does this code print?`) with answers and explanations.
- **Mock interviews** for junior, mid-level, and frontend profiles.
- A **4-week study path**.

---

## Who is it for?

- People **looking for their first job** as developers.
- Juniors who want to **reinforce their fundamentals** before an interview.
- Anyone who wants to **practice explaining JavaScript concepts** out loud.

You don't need prior experience with frameworks. Just JavaScript and the will to practice.

---

## How to use it

1. Clone the repository:
   ```bash
   git clone https://github.com/MiguelCovarrubiasdaiz/devbymike-js-interview-lab.git
   cd devbymike-js-interview-lab
   ```
2. Read the questions by topic, starting with `01-fundamentals/`.
3. **Before reading the answer**, try to answer it yourself out loud.
4. Run the challenges and output questions with Node.js.
5. When you feel ready, do the mock interviews in `08-mock-interviews/`.

> Tip: don't read straight through. Read a question, cover the answer, answer it yourself, and then compare.

---

## Recommended study path

The folder order is the recommended path:

1. `01-fundamentals/` — types, `var/let/const`, equality, coercion.
2. `02-scope-hoisting/` — scope, hoisting, TDZ, closures.
3. `03-functions/` — functions, arrow functions, `this`, pure functions.
4. `04-arrays-objects/` — `map/filter/reduce`, destructuring, copies.
5. `05-async/` — promises, `async/await`, event loop.
6. `06-code-challenges/` — practice by solving problems.
7. `07-output-questions/` — test your understanding.
8. `08-mock-interviews/` — simulate the real interview.

There's a detailed 4-week plan in [`docs/study-path.md`](docs/study-path.md).

---

## How to run the exercises

You need [Node.js](https://nodejs.org/) installed (version 18 or later).

Run any `.js` file directly:

```bash
node 06-code-challenges/reverse-string.js
node 07-output-questions/output-001.js
```

Or use the scripts defined in `package.json`:

```bash
npm run output:001
npm run output:002
npm run start:challenge
```

---

## How to practice for interviews

- Read the question and **answer it out loud** as if an interviewer were sitting across from you.
- Use the *"How to answer it in an interview"* section of each topic as a base script, but **in your own words**.
- Do the **mock interviews** in `08-mock-interviews/` with a timer.
- Practice writing code **without autocomplete** to get used to whiteboards and plain editors.
- Review the output questions until you can predict the result without hesitating.

---

## How to contribute

Found a bug, want to add a question, or improve an explanation? All help is welcome. Read [`CONTRIBUTING.md`](CONTRIBUTING.md) to learn how.

---

## Follow me

This repo goes along with my educational content. Find me as **@DevByMike** on TikTok, YouTube, Instagram, and X (Twitter).

If the repo helps you, leave a star and share it with someone who's job hunting.

---

## Important message

> **Don't memorize answers. Understand the concept and learn to explain it.**

Interviewers aren't looking for you to recite definitions. They want you to understand *why* things work the way they do. If you understand the concept, you can answer any variation of the question.

---

## License

This project is under the MIT license. You can use, share, and adapt it freely. Read [`LICENSE`](LICENSE).
