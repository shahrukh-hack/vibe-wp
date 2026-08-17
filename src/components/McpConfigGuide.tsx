import React, { useState } from 'react';
import { Terminal, Copy, Check, Sparkles, Code2, Server } from 'lucide-react';
import { toast } from 'sonner';

const CONFIGS = [
  {
    client: 'Antigravity',
    file: '~/.gemini/antigravity/mcp-config.json',
    json: `{\n  "mcpServers": {\n    "vibe-wp": {\n      "command": "npx",\n      "args": ["-y", "vibe-wp", "mcp"],\n      "env": {\n        "WP_SITE_URL": "https://mysite.local",\n        "WP_APP_USER": "admin",\n        "WP_APP_PASSWORD": "xxxx xxxx xxxx xxxx"\n      }\n    }\n  }\n}`,
  },
  {
    client: 'Cursor',
    file: '.cursor/mcp.json',
    json: `{\n  "mcpServers": {\n    "vibe-wp": {\n      "command": "npx",\n      "args": ["-y", "vibe-wp", "mcp"],\n      "env": {\n        "WP_SITE_URL": "https://mysite.local",\n        "WP_APP_USER": "admin",\n        "WP_APP_PASSWORD": "xxxx xxxx xxxx xxxx"\n      }\n    }\n  }\n}`,
  },
  {
    client: 'Claude Code',
    file: '~/.claude.json',
    json: `{\n  "mcpServers": {\n    "vibe-wp": {\n      "command": "npx",\n      "args": ["-y", "vibe-wp", "mcp"],\n      "env": {\n        "WP_SITE_URL": "https://mysite.local",\n        "WP_APP_USER": "admin",\n        "WP_APP_PASSWORD": "xxxx xxxx xxxx xxxx"\n      }\n    }\n  }\n}`,
  },
];

export const McpConfigGuide: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const active = CONFIGS[selectedIdx];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('MCP Configuration copied to clipboard!');
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white shadow-md">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">Model Context Protocol (MCP) IDE Setup</h2>
              <p className="text-xs text-muted-foreground">
                Copy and paste these JSON blocks into Antigravity, Cursor, or Claude Code to give your AI agent full WordPress & WooCommerce superpowers.
              </p>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full border border-border bg-muted text-xs font-mono font-semibold text-foreground">
            JSON-RPC 2.0 Stdio
          </div>
        </div>

        {/* Client Selection */}
        <div className="flex items-center gap-2 pt-2">
          {CONFIGS.map((c, idx) => (
            <button
              key={c.client}
              onClick={() => setSelectedIdx(idx)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedIdx === idx
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {c.client}
            </button>
          ))}
        </div>
      </div>

      {/* Code Block */}
      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm flex flex-col">
        <div className="px-4 py-3 border-b border-border bg-muted/40 flex items-center justify-between">
          <span className="text-xs font-mono text-muted-foreground">Config File: <strong className="text-foreground">{active.file}</strong></span>
          <button
            onClick={() => handleCopy(active.json)}
            className="px-3 py-1 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5"
          >
            <Copy className="w-3 h-3" />
            <span>Copy MCP Config</span>
          </button>
        </div>
        <div className="p-4 bg-muted/20 font-mono text-xs text-foreground overflow-x-auto">
          <pre className="leading-relaxed">{active.json}</pre>
        </div>
      </div>
    </div>
  );
};
