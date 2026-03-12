# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Run Commands

```bash
npm install          # install dependencies
npm run build        # compile TypeScript (tsc) → dist/
npm run dev          # run in dev mode via ts-node
npm start            # run compiled server (dist/index.js)
```

No test or lint scripts are configured.

## Architecture

mcp-www is a single-file MCP server (`src/index.ts`, ~610 lines) that enables **DNS-based MCP service discovery**. Instead of centralized registries, it uses DNS TXT records at `_mcp.{domain}` to discover MCP servers.

**Layers in `src/index.ts`:**

1. **DNS Lookup** — `lookupMcpDomain()` performs UDP DNS TXT lookups for `_mcp.{domain}`, `parseMcpTxtRecord()` parses semicolon-delimited key-value pairs
2. **Server Inspection** — `inspectMcpServer()` connects to discovered MCP servers via HTTP, performs JSON-RPC initialize handshake, retrieves tools/resources/prompts
3. **Remote Communication** — `callRemoteTool()`, `readRemoteResource()`, `getRemotePrompt()` execute operations on remote servers with session management
4. **Tool Handlers** — 7 MCP tools exposed to agents: `browse_domain`, `browse_server`, `browse_multi`, `browse_discover`, `call_remote_tool`, `read_remote_resource`, `get_remote_prompt`

**Transport:** Connects to agents via stdio (`StdioServerTransport`). Communicates with remote MCP servers via HTTP fetch using JSON-RPC.

**Key dependency:** `@modelcontextprotocol/sdk` — the official MCP SDK.

## DNS TXT Record Format

Records are semicolon-delimited: `name=value;endpoint=https://...;description=...`

The server looks up `_mcp.{domain}` TXT records. See korm.co for live examples.
