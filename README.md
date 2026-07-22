# PromptGen

PromptGen is a small local web app for turning structured task details into detailed coding-agent prompts. It generates prompts in the browser from built-in templates; no AI API, account, or model download is required.

## Features

- Eight task workflows, eight specialist-agent prompts, three testing prompts, and five read-only background watchers
- Output profiles for **Generic**, **Codex**, and **Claude Code**
- Live prompt preview, completion progress, character count, and one-click copy
- Required-field validation for workflows that need specific context
- Per-workflow form values retained between sessions
- Local-only Express server bound to `127.0.0.1`

## Requirements

- [Node.js](https://nodejs.org/) with npm
- A modern browser

## Run locally

Install dependencies once:

```bash
npm install
```

Start the app:

```bash
npm start
```

PromptGen runs at [http://localhost:3737](http://localhost:3737). On Windows, the server also attempts to open the page automatically.

To stop the server, press `Ctrl+C` in the terminal.

## Usage

1. Choose a task mode from the sidebar.
2. Fill in the task details. Fields marked as optional may be left blank.
3. Select the target prompt format above the preview.
4. Review the generated prompt and select **Copy**.

The prompt updates as you type. **Clear all** clears only the currently selected workflow.

## Workflows

| Workflow | Purpose |
| --- | --- |
| Feature | Add new functionality |
| Bug Fix | Investigate and repair incorrect behavior |
| Rework | Improve an existing feature while preserving behavior |
| Regression | Restore behavior broken by a recent change |
| Security Audit | Review and harden an application |
| Backend Refactor | Modularize and simplify backend code |
| Oversized File | Split a specified backend file by responsibility |
| Frontend Refactor | Improve frontend structure without redesigning it |

The **Oversized File** workflow requires a target file path before its prompt can be copied. Other workflows allow optional context so the generated agent can inspect the target repository first.

### Specialist agents

The **Specialist Agents** sidebar section provides focused prompts for Software Architect, Feature Implementation, Bug Investigation, Refactor, Application Security, Test & QA, API & Database, and Senior Code Review roles. The separate **Testing** section contains **Generate Unit Tests**, **Test New Feature**, and **Coverage Audit** workflows. Their definitions are maintained in `public/agent-prompts.js`.

The **Background Agents** section contains read-only Security, Regression, Code Quality, Architecture Drift, and Dependency & Configuration watchers. These standalone prompts inspect repository changes without inheriting implementation instructions. Each includes a portable tool contract requesting file read/search, read-only Git inspection, and non-mutating shell validation; actual permissions must still be enabled by the Codex or Claude host configuration.

## Saved settings

The selected mode, output format, and form values are stored locally in:

```text
C:\Users\<YourName>\.promptgen-store.json
```

The file is created automatically. PromptGen does not send these values to an external service.

## Project structure

```text
prompt-gen/
|-- public/
|   |-- agent-prompts.js # Specialist-agent modes and instructions
|   `-- index.html       # Interface, core templates, and browser logic
|-- AGENTS.md        # Contributor and agent guidelines
|-- README.md        # Setup and usage documentation
|-- server.js        # Express server and settings API
|-- package.json     # Package metadata and npm scripts
`-- package-lock.json
```

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Start PromptGen on port 3737 |

## Notes

- The host and port are currently configured in `server.js`.
- Prompt templates and workflow fields are defined in `public/index.html`.
- Specialist-agent prompt definitions are in `public/agent-prompts.js`.
- `public/index.html.bak` is a historical backup, not the active interface.
- There is currently no automated test suite or production build step.
