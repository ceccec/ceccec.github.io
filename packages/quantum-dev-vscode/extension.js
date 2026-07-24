// ceccec Quantum Dev — a thin VS Code shell over the deterministic quantum:* CLIs. It runs npm
// scripts in an integrated terminal; the exit code is the proof (zero AI tokens). The tool list is
// DERIVED from the workspace package.json at command time — the same single source as /mcp.json and
// the themeConfig roster, so the extension can never drift from the real roster (the fuse law).
const vscode = require('vscode')
const fs = require('node:fs')
const path = require('node:path')

function quantumScripts(root) {
  try {
    const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'))
    return Object.keys(pkg.scripts || {}).filter((k) => k.startsWith('quantum:')).sort()
  } catch {
    return []
  }
}

function run(script) {
  const terminal = vscode.window.terminals.find((t) => t.name === 'quantum') || vscode.window.createTerminal('quantum')
  terminal.show()
  terminal.sendText(`npm run ${script}`)
}

function activate(context) {
  const root = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath || process.cwd()
  context.subscriptions.push(
    vscode.commands.registerCommand('quantumDev.runTool', async () => {
      const scripts = quantumScripts(root)
      if (scripts.length === 0) return vscode.window.showWarningMessage('No quantum:* scripts found in package.json')
      const picked = await vscode.window.showQuickPick(scripts, { placeHolder: `Run a quantum tool (${scripts.length} available)` })
      if (picked) run(picked)
    }),
    vscode.commands.registerCommand('quantumDev.next', () => run('quantum:next')),
    vscode.commands.registerCommand('quantumDev.land', () => run('wave:land')),
  )
}

function deactivate() {}

module.exports = { activate, deactivate }
