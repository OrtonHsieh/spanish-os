# Spanish OS — AI Development Agreement

This is the primary contract for every AI and human contributor. Read it before changing code. Details live in `docs/PRODUCT_SPEC.md`, `docs/ARCHITECTURE.md`, `docs/CONTENT_MODEL.md`, and `docs/DECISIONS.md`.

## Product invariants

- Audience: Traditional Chinese speakers who are complete or early Spanish beginners.
- Teach Spain Spanish (`es-ES`): Spain vocabulary, pronunciation, and `vosotros/as` are primary. Common Latin American forms may be accepted and explained without distracting beginners.
- Organize learning around practical real-life scenarios, not an abstract grammar syllabus.
- One scenario is about 20 minutes: four approximately five-minute lessons covering key language, comprehension, expression, and a realistic task.
- Gamification must reward learning, recall, consistency, and reduced hints. Do not punish mistakes, deduct lives, or sell learning advantages.
- Explain in Traditional Chinese. Spanish examples must be natural, correctly accented, and beginner-appropriate.
- Always communicate the real-world ability gained, not just a score.

## Experience rules

- Preserve the mature “modern travel handbook” identity: warm, clear, recognizably Spanish, and not childlike.
- Keep one obvious primary action per screen and avoid generic dashboard clutter.
- Give immediate, specific, encouraging feedback. Recycle errors into later retrieval practice.
- Audio is first-class. Learning items expose normal and slow playback. Browser `es-ES` speech is a fallback; curated `es-ES` audio is the production goal.
- Support keyboard, touch, screen readers, contrast, and `prefers-reduced-motion`.
- Locked scenarios remain previewable for learners with urgent practical needs.
- Guests can try the first lesson; request registration only when saving or cross-device sync provides value.

## Engineering rules

- The canonical public runtime is the root `index.html` and `site.js`, deployed directly by GitHub Pages. Keep it dependency-free and functional without a build step. The vinext/React implementation is secondary during migration; do not ship features only there.
- New lessons are data-driven and conform to `docs/CONTENT_MODEL.md`. Do not grow the catalog inside UI components.
- Separate UI, learning-domain logic, persistence, audio, and content as the prototype expands.
- Use `localStorage` only for versioned device-local guest progress/preferences. Guard parsing and migrations; never store secrets or sensitive personal data.
- Introduce a backend only for durable shared state such as accounts, cross-device progress, publishing, or social features. Hide it behind repository interfaces.
- External AI, audio, and analytics services cannot be mandatory for the core flow; provide failure and offline-friendly fallbacks.
- Do not add leaderboards, social competition, free-form AI chat, pronunciation scoring, a marketplace, or a CMS without an explicit product decision.
- Accept understandable regional alternatives and explain the Spain-preferred form instead of marking regional differences as simply wrong.
- Keep the production build passing. Add focused tests when scoring, unlocks, persistence, answer acceptance, or validation changes.

## Definition of done

A feature is done only when it advances a stated learner ability, works on mobile and desktop, is accessible, handles relevant failure/persisted states, keeps content separable, passes build/tests, and updates affected documentation.

When instructions conflict, prioritize learner safety and comprehension, then this agreement, product specification, architecture documents, and implementation convenience. Record material changes in `docs/DECISIONS.md`.
