# Repository Guidelines

## Project Structure & Module Organization

PromptGen is a small Node.js application with a browser-based frontend:

- `server.js` starts the Express server, serves static files, and exposes the settings API.
- `public/index.html` contains the interface, styles, workflow definitions, prompt templates, and client-side logic.
- `package.json` defines runtime dependencies and npm scripts.
- `README.md` documents installation and usage.

There is currently no test directory or build output. Treat `public/index.html.bak` as a historical backup; make application changes in `public/index.html`.

## Build, Test, and Development Commands

- `npm install` installs the locked dependencies from `package-lock.json`.
- `npm start` runs the app at `http://localhost:3737` and attempts to open it on Windows.
- `git diff --check` detects whitespace errors before committing.

No compilation or production build is required. There is currently no automated test or lint command. Do not claim these checks passed unless corresponding tooling has been added and run.

## Coding Style & Naming Conventions

Follow the existing JavaScript style: two-space indentation, single-quoted strings, no semicolons, and trailing commas only where already used. Use `camelCase` for variables and functions, `UPPER_SNAKE_CASE` for configuration constants such as `MODE_COLORS`, and lowercase mode identifiers such as `feature` or `rework`.

Keep server concerns in `server.js`. Keep UI behavior and prompt templates in clearly labeled sections of `public/index.html`. Prefer focused changes over unrelated cleanup. No formatter or linter is configured, so review formatting manually.

## Testing Guidelines

For UI changes, start the app and manually verify every affected workflow, output format, live preview, persistence, clear action, and clipboard behavior. For server changes, verify `/api/store` GET and POST behavior and confirm the server remains bound to `127.0.0.1`. If adding automated tests, place them in `test/` and add an `npm test` script.

## Commit & Pull Request Guidelines

History uses short, lowercase commit subjects such as `updated readme`. Keep subjects concise, imperative, and specific (for example, `add regression prompt fields`).

Pull requests should explain the user-visible change, list validation performed, and link related issues. Include screenshots for interface changes. Call out changes to persistence, dependencies, host/port behavior, or prompt templates.

## Security & Configuration

Never commit `.promptgen-store.json` or user-entered prompt content. Preserve loopback-only binding unless remote access is an explicit, reviewed requirement.
