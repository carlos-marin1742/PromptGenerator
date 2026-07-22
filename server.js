const express = require('express')
const http = require('http')
const path = require('path')
const fs = require('fs')
const os = require('os')
const { exec } = require('child_process')

const app = express()
const server = http.createServer(app)

const PORT = 3737
const storePath = path.join(os.homedir(), '.promptgen-store.json')

// ── Chokidar (optional) ───────────────────────────────────────────

// ── Store ─────────────────────────────────────────────────────────
const defaultStore = {
  ollamaUrl: 'http://localhost:11434',
  ollamaModel: 'llama3.2',
  lastMode: 'feature',
  outputFormat: 'generic'
}

function readStore() {
  try {
    if (fs.existsSync(storePath)) {
      const { aliases, watchedFolder, ...savedStore } = JSON.parse(fs.readFileSync(storePath, 'utf8'))
      return { ...defaultStore, ...savedStore }
    }
  } catch (e) {}
  return { ...defaultStore }
}

function writeStore(data) {
  const { aliases, watchedFolder, ...store } = data
  fs.writeFileSync(storePath, JSON.stringify(store, null, 2))
}

// ── WebSocket broadcast ───────────────────────────────────────────
// ── Routes ────────────────────────────────────────────────────────
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/store', (_, res) => res.json(readStore()))
app.post('/api/store', (req, res) => { writeStore(req.body); res.json({ ok: true }) })

// ── Start ─────────────────────────────────────────────────────────
server.listen(PORT, '127.0.0.1', () => {
  const url = `http://localhost:${PORT}`
  console.log(`\n  PromptGen running at ${url}\n`)
  // Auto-open browser on Windows
  exec(`start ${url}`)
})
