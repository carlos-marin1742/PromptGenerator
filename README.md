# PromptGen

PromptGen is a small local web app for turning structured task details into detailed coding-agent prompts. It generates prompts in the browser from built-in templates; no AI API, account, or model download is required.

## Features

- Four task workflows: **Feature**, **Bug Fix**, **Rework**, and **Regression**
- Output profiles for **Generic**, **Codex**, and **Claude Code**
- Live prompt preview, completion progress, character count, and one-click copy
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

## Saved settings

The selected mode, output format, and form values are stored locally in:

```text
C:\Users\<YourName>\.promptgen-store.json
```

The file is created automatically. PromptGen does not send these values to an external service.

## Project structure

```text
prompt-gen/
├── public/
│   └── index.html   # Interface, prompt templates, and browser logic
├── server.js        # Express server and settings API
└── package.json     # Package metadata and npm scripts
```

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Start PromptGen on port 3737 |

## Notes

- The host and port are currently configured in `server.js`.
- Prompt templates and workflow fields are defined in `public/index.html`.
- There is currently no automated test suite or production build step.
