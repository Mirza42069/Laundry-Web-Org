# Agent Guide for laundry-web-org

This repository is a Next.js App Router project using TypeScript, Tailwind v4,
shadcn UI primitives, and Bun for package management and scripts.

If you are an agent working in this repo, follow the commands and conventions
below. Keep edits consistent with nearby code.

## Commands (Bun)

Install dependencies:

```bash
bun install
```

Run the dev server (http://localhost:3000):

```bash
bun run dev
```

Production build:

```bash
bun run build
```

Start the production server (after build):

```bash
bun run start
```

Lint:

```bash
bun run lint
```

Typecheck (no script; optional but recommended for CI or large changes):

```bash
bunx tsc --noEmit
```

Tests:

- No test runner is configured yet.
- If Bun tests are added later, use these patterns:

```bash
# run all tests
bun test

# run a single test file
bun test path/to/file.test.ts

# run tests that match a name pattern
bun test -t "name or regex"
```

## Project Structure (high level)

- `app/` is Next.js App Router routes, layouts, and global styles.
- `components/` holds UI components and examples.
- `components/ui/` is shadcn-style, utility-first UI primitives.
- `lib/` hosts shared utilities (e.g., `cn`).
- `public/` for static assets.

## Code Style and Conventions

### General formatting

- Use 2-space indentation.
- Use double quotes for strings.
- Semicolons are inconsistent across files; keep the local file style.
- Prefer trailing commas in multiline objects/arrays when already used.
- Keep JSX compact; avoid adding extra wrapper elements without a reason.

### Imports

- Order imports by: framework/external, then internal (`@/`), then relative.
- Use blank lines between groups.
- Use `import type` for type-only imports when applicable.
- Keep import lists sorted only if the file already follows that pattern.

### TypeScript and types

- TypeScript is `strict: true` in `tsconfig.json`.
- Avoid `any`; use narrow unions, generics, or `unknown` with guards.
- Prefer `React.ComponentProps<...>` for DOM or primitive props typing.
- Use `as const` for literal arrays or objects meant to be read-only.
- Keep function return types implicit unless they clarify intent.

### Naming

- Components: `PascalCase` (e.g., `CardHeader`).
- Hooks: `useX` naming only for React hooks.
- Functions/variables: `camelCase`.
- Constants: `camelCase` for values, `SCREAMING_SNAKE_CASE` only for
  true global constants.
- Files: use `kebab-case` in `components/` and `components/ui/`.

### React and Next.js patterns

- `app/` uses App Router with server components by default.
- Add `"use client"` at the top when using hooks, state, or browser APIs.
- Default exports are used for route files (e.g., `app/page.tsx`).
- Prefer named exports for shared components and helpers.
- Keep `metadata` export in layouts when needed.

### Styling and UI

- Tailwind v4 is configured via `app/globals.css` with CSS variables.
- Use the `cn` helper from `lib/utils.ts` for className composition.
- For variants, use `class-variance-authority` (`cva`) when appropriate.
- Preserve `data-slot` attributes; they are used for styling and targeting.
- Keep shadcn component patterns (Radix/Base UI, `asChild`, `Slot.Root`).

### Error handling and validation

- Do not swallow errors; surface them or handle explicitly.
- In async code, wrap external calls with try/catch and return clear errors.
- In route handlers or server actions, use `notFound()` or `redirect()` when
  appropriate rather than manual status pages.
- Validate user input at boundaries; prefer schema validation if introduced.

### Accessibility

- Ensure interactive elements have labels (`aria-label` or visible text).
- Provide `sr-only` text for icon-only buttons.
- Preserve focus styles and `aria-` attributes in UI primitives.

## ESLint

- ESLint uses Next.js Core Web Vitals and TypeScript configs.
- Default Next.js ignores are explicitly set in `eslint.config.mjs`.
- Run `bun run lint` before large changes.

## Path aliases

- `@/*` maps to the project root (see `tsconfig.json`).
- Prefer `@/components/...` and `@/lib/...` over long relative paths.

## Cursor/Copilot Rules

- No `.cursor/rules/`, `.cursorrules`, or `.github/copilot-instructions.md`
  files were found in this repository.

## Change Discipline

- Match existing patterns in the file you edit.
- Keep diffs minimal and focused.
- Do not reformat unrelated code.
