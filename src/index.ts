/**
 * mcp-browse
 *
 * A lightweight MCP server that performs DNS-based discovery of MCP services
 * using UDP lookups. No registry server needed.
 *
 * Architecture:
 *   1. Agent connects to mcp-browse as a standard MCP server (stdio transport)
 *   2. Agent calls tools like `browse_domain` with a target domain
 *   3. mcp-browse performs a UDP DNS TXT lookup for `_mcp.{domain}`
 *   4. The TXT record is parsed (semicolon-delimited key=value pairs)
 *   5. Structured server metadata is returned to the agent
 *
 * Tools:
 *   - browse_domain  : Lookup _mcp.{domain} TXT records, return parsed server list
 *   - browse_server  : Connect to a discovered server URL and retrieve its tools/list manifest
 *   - browse_multi   : Batch lookup across multiple domains
 *
 * TXT Record Format (convention):
 *   _mcp.example.com TXT "v=mcp1; endpoint=https://mcp.example.com; public=true; auth=oauth2; version=2024.1"
 */

// --- Imports ---
// import { Server } from "@modelcontextprotocol/sdk/server/index.js";
// import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
// import dns from "node:dns";

// --- DNS Lookup ---
// TODO: Implement UDP DNS TXT lookup for _mcp.{domain}
// Use node:dns.resolveTxt() which performs real UDP DNS queries under the hood

// --- TXT Record Parser ---
// TODO: Parse semicolon-delimited TXT records into structured objects
// e.g. "v=mcp1; endpoint=https://...; public=true" → { v: "mcp1", endpoint: "https://...", public: "true" }

// --- Tool: browse_domain ---
// TODO: Register MCP tool that takes { domain: string } and returns discovered servers

// --- Tool: browse_server ---
// TODO: Register MCP tool that takes { url: string }, connects to the MCP server, calls tools/list, returns manifest

// --- Tool: browse_multi ---
// TODO: Register MCP tool that takes { domains: string[] } and returns results for all

// --- Server Setup ---
// TODO: Initialize MCP server with stdio transport and register all tools

console.log("mcp-browse: not yet implemented — see README for design");
