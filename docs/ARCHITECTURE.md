# Architecture and Extension Guide

## Foundation

- The canonical public deployment is a dependency-free GitHub Pages site: `index.html` + `content.js` + `site.js` + `app/globals.css`.
- `content.js` owns scenario and lesson records; `site.js` renders them and must not embed catalog content as UI markup.
- The vinext + React prototype under `app/` remains available during migration, but public behavior must be implemented in the canonical static entry first.
- Browser `localStorage` holds prototype guest progress.
- Browser `SpeechSynthesis` with `es-ES` is the pronunciation fallback.
- Preserve direct static GitHub Pages compatibility; backend capabilities stay optional.

## Target boundaries

Refactor incrementally toward:

```text
app/                         routes and composition
components/lesson/           player, prompt, feedback, progress
components/scenarios/        route and scenario cards
content/es-ES/scenarios/     versioned course records
domain/                      scoring, mastery, unlock, review logic
lib/audio/                   audio provider and fallbacks
lib/persistence/             guest and future account repositories
types/                       shared contracts
tests/                       domain, content, critical-flow tests
docs/                        agreements and decisions
```

Dependencies point inward: UI may call domain/repository interfaces; domain logic must not import React, browser APIs, or a database.

## Extension seams

- **Content:** add validated records, not copied pages. Render by activity `type`; unknown types fail validation clearly.
- **Audio:** expose `play(itemId, rate)` and `stop()`. Preferred order is curated asset, hosted TTS asset, browser synthesis. Show recoverable errors.
- **Persistence:** use a progress repository, not scattered `localStorage`. Guest and remote implementations share a contract. Version local payloads and migrate safely.
- **Authentication:** keep public course reading independent from identity. The first lesson remains guest-accessible.
- **Backend:** cross-device state, user records, analytics, or CMS require an API/store. Never put privileged keys in client bundles; isolate hosting-specific code behind adapters.

Keep content state, current-session state, long-term learning state, account state, and presentation preferences distinct. XP is motivational and must not determine mastery.

## Quality gates

- TypeScript and production build pass.
- Content validates unique IDs, references, answers, time budgets, and accessibility text.
- Scoring/mastery functions have deterministic tests.
- Critical flow works with keyboard and touch at mobile and desktop widths.
- Audio errors, corrupted local data, and interrupted lessons recover safely.
- Expanding the catalog does not bury educational content in component markup.

## Prototype migration order

1. Extract questions into the content model.
2. Extract speech synthesis into an audio provider.
3. Extract versioned guest progress into a repository.
4. Add content and domain tests.
5. Add the remaining first-scenario lessons.
6. Then evaluate account sync or an authoring interface.
