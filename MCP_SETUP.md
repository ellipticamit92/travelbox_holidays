# Next.js MCP Server Setup Guide

This guide explains how to set up and use the Next.js MCP (Model Context Protocol) Server with coding agents.

## What is MCP?

The Model Context Protocol (MCP) is a protocol that enables AI coding agents to interact with your development environment, providing real-time access to your Next.js application's internals, diagnostics, and development tools.

## Prerequisites

- Next.js 16+ application
- Node.js installed
- A coding agent that supports MCP (e.g., Claude Code, Cursor)

## Installation

The `next-devtools-mcp` package is already installed as a dev dependency. If you need to reinstall:

```bash
npm install next-devtools-mcp --save-dev
```

## Quick Start

### 1. Start Your Next.js Development Server

```bash
npm run dev
```

Keep this running in one terminal.

### 2. Start the MCP Server

In a separate terminal:

```bash
npm run mcp
```

The MCP server will connect to your running Next.js development server.

## Configuring Coding Agents

### Claude Desktop / Cursor

Add the MCP server to your Claude configuration. The configuration file location varies:

- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
- **Linux**: `~/.config/Claude/claude_desktop_config.json`

Add this to your `mcpServers` section:

```json
{
  "mcpServers": {
    "next-devtools": {
      "command": "npx",
      "args": ["next-devtools-mcp@latest"],
      "env": {}
    }
  }
}
```

### Alternative: Using npm script

If you prefer to use the local npm script:

```json
{
  "mcpServers": {
    "next-devtools": {
      "command": "npm",
      "args": ["run", "mcp"],
      "cwd": "/path/to/travelbox_holidays",
      "env": {}
    }
  }
}
```

**Note:** Replace `/path/to/travelbox_holidays` with your actual project path.

## Features Available to Coding Agents

Once connected, coding agents can:

### 1. Runtime Diagnostics
- Access real-time build errors
- View runtime errors and warnings
- Monitor application health

### 2. Application Structure
- List all routes and pages
- View component metadata
- Inspect file structure

### 3. Development Tools
- Access development server logs
- View build diagnostics
- Monitor performance metrics

### 4. Automation
- Automate Next.js version upgrades
- Run migrations
- Set up cache components

### 5. Testing Integration
- Integrate with Playwright for browser testing
- Visual verification of components
- End-to-end testing automation

## Troubleshooting

### MCP Server Won't Start

1. **Ensure Next.js dev server is running**: The MCP server requires an active Next.js development server
2. **Check port availability**: Ensure port 3000 (or your configured port) is available
3. **Verify installation**: Run `npx next-devtools-mcp --version` to verify installation

### Coding Agent Can't Connect

1. **Verify MCP server is running**: Check that `npm run mcp` is active
2. **Check configuration**: Ensure your MCP configuration file is correctly formatted JSON
3. **Restart agent**: Restart your coding agent after adding the MCP server configuration
4. **Check paths**: If using absolute paths, ensure they're correct for your system

### Connection Issues

- The MCP server connects to `http://localhost:3000` by default
- If your Next.js app runs on a different port, you may need to configure it
- Check firewall settings if running on a remote server

## Example Usage

Once configured, you can ask your coding agent questions like:

- "What errors are currently in my Next.js application?"
- "Show me all the routes in my app"
- "What components are being used on the homepage?"
- "Upgrade Next.js to the latest version"
- "Run diagnostics on my application"

## Resources

- [Next.js DevTools MCP GitHub](https://github.com/vercel/next-devtools-mcp)
- [Model Context Protocol Documentation](https://modelcontextprotocol.io)
- [Next.js Documentation](https://nextjs.org/docs)

## Support

For issues specific to the MCP server, check the [next-devtools-mcp GitHub repository](https://github.com/vercel/next-devtools-mcp/issues).

