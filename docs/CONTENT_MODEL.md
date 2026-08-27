# Course Content Model

Store course content as validated TypeScript or JSON records. Preserve these concepts even if exact types evolve:

```ts
type Scenario = {
  id: string; locale: "es-ES"; titleZhHant: string; canDoZhHant: string;
  estimatedMinutes: number; prerequisites: string[]; lessons: Lesson[];
};
type Lesson = {
  id: string;
  stage: "key-language" | "comprehension" | "expression" | "real-life-task";
  titleZhHant: string; canDoZhHant: string; estimatedMinutes: number;
  vocabularyIds: string[]; patternIds: string[]; activities: Activity[];
};
type LearningItem = {
  id: string; spanish: string; zhHant: string;
  audio?: { normal?: string; slow?: string; fallbackText: string };
  usageNoteZhHant?: string; commonErrorZhHant?: string;
  regionalAlternatives?: { region: string; value: string; noteZhHant?: string }[];
};
type Activity = {
  id: string;
  type: "multiple-choice" | "matching" | "sentence-order" | "short-input" | "dialogue";
  instructionZhHant: string; prompt: unknown; answer: unknown;
  acceptedAlternatives?: unknown[];
  feedbackZhHant: { correct: string; incorrect: string };
  learningItemIds: string[];
};
```

## Authoring constraints

- IDs are stable, unique, lowercase, and independent from translated display copy.
- Each lesson has one concise can-do outcome and normally at most 6–8 words, 1–2 patterns, and one small grammar concept.
- Spanish includes accents and inverted `¿`/`¡`; audio is identified as `es-ES` and slow/normal wording matches.
- Distractors are plausible but not tricks. Feedback explains meaning/use.
- Prompts, visible text, and playable audio must not reveal the exact answer. In production activities, keep the target Spanish in the choices until feedback is shown.
- Every assessment traces to introduced material.
- Dialogues define goal, completion condition, recovery paths, and hints.
- Regional alternatives are optional enrichment, not primary beginner content.

Record attempts independently from UI with activity ID, timestamp, correctness, hint count, and optional response time. Mastery considers delayed recall, recent errors, and hint use—never XP alone.
