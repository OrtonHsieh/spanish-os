# Spanish OS

Spanish OS is a practical, gameful Spanish-learning website for Traditional Chinese beginners. It teaches Spanish from Spain through five-minute lessons grouped into real-life scenarios.

The public site is deployed with GitHub Pages. The canonical browser entry is `index.html`, with interaction logic in `site.js` and shared styling in `app/globals.css`.

## Contributor starting point

Read these documents before making changes:

1. [`AGENTS.md`](./AGENTS.md) — mandatory AI and contributor agreement.
2. [`docs/PRODUCT_SPEC.md`](./docs/PRODUCT_SPEC.md) — learner, curriculum, experience, and MVP scope.
3. [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) — module boundaries and extension seams.
4. [`docs/CONTENT_MODEL.md`](./docs/CONTENT_MODEL.md) — lesson data and authoring constraints.
5. [`docs/DECISIONS.md`](./docs/DECISIONS.md) — accepted decisions.

Material product or architecture changes must update the relevant document and add a decision record.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
npm run build
```

For the GitHub Pages version, opening `index.html` through any local static server is sufficient. Changes pushed to `main` are the source for the public site.

The current prototype includes a scenario route, one five-question micro-lesson, `es-ES` browser pronunciation, XP/combo feedback, a capability stamp, responsive styling, and device-local progress.

## Implementation notes

- App source: `app/`
- Optional data layer: `db/`
- Hosting capabilities: `.openai/hosting.json`
- Guest progress: browser `localStorage` (prototype only)
- Pronunciation fallback: browser `SpeechSynthesis` using `es-ES`

The project uses vinext, React, and TypeScript. Keep public learning content accessible without authentication; add remote persistence only behind the interfaces described in the architecture guide.
