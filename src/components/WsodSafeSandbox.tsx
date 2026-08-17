import React, { useState } from 'react';
import { Shield, Play, AlertTriangle, CheckCircle, RotateCcw, Lock, Code2 } from 'lucide-react';
import { toast } from 'sonner';

export const WsodSafeSandbox: React.FC = () => {
  const [scriptType, setScriptType] = useState<'safe' | 'dangerous'>('safe');
  const [executionState, setExecutionState] = useState<'idle' | 'success' | 'blocked'>('idle');

  const safeCode = `<?php\n// Safe Hook Injection\nadd_filter('the_title', function($title) {\n    return '🚀 ' . esc_html($title);\n});\necho "Filter registered safely with zero syntax risk.";`;

  const dangerousCode = `<?php\n// Dangerous snippet missing semicolon and undefined function call\ncall_non_existent_payment_gateway()\necho "This would crash live WordPress without WSOD Guard"`;

  const handleRun = () => {
    if (scriptType === 'safe') {
      setExecutionState('success');
      toast.success('[WSOD Guard] PHP lint passed & transaction committed with zero site risk!');
    } else {
      setExecutionState('blocked');
      toast.error('[WSOD Guard Intercepted] Fatal error prevented: Call to undefined function. Auto-rollback triggered!');
    }
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-md">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">WSOD Guard: Safe PHP Execution & Auto-Rollback</h2>
              <p className="text-xs text-muted-foreground">
                Dry-run AST syntax linter and isolated database transactions protect live WordPress sites from White Screens of Death.
              </p>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 text-xs font-mono font-semibold">
            Feature 1: safe_execute_php
          </div>
        </div>

        {/* Toggle between safe and dangerous script */}
        <div className="flex items-center gap-2 pt-2">
          <button
            onClick={() => { setScriptType('safe'); setExecutionState('idle'); }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              scriptType === 'safe'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
          >
            Safe WordPress PHP
          </button>
          <button
            onClick={() => { setScriptType('dangerous'); setExecutionState('idle'); }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              scriptType === 'dangerous'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
          >
            Fatal Error Script (Test Interception)
          </button>
        </div>
      </div>

      {/* Editor & Guard Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm flex flex-col">
          <div className="px-4 py-3 border-b border-border bg-muted/40 flex items-center justify-between">
            <span className="text-xs font-mono font-semibold text-foreground flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-primary" />
              <span>Target PHP Snippet</span>
            </span>
            <button
              onClick={handleRun}
              className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-sm"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Run with WSOD Guard</span>
            </button>
          </div>
          <div className="p-4 flex-1 bg-muted/20 font-mono text-xs text-foreground overflow-x-auto">
            <pre className="leading-relaxed">{scriptType === 'safe' ? safeCode : dangerousCode}</pre>
          </div>
        </div>

        {/* Guard Verdict */}
        <div className="rounded-2xl border border-border bg-card p-5 space-y-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
              <Lock className="w-4 h-4 text-primary" />
              <span>Sandbox Isolation Verdict</span>
            </h4>

            {executionState === 'idle' && (
              <p className="text-xs text-muted-foreground">Click "Run with WSOD Guard" to perform pre-execution syntax validation and safe sandbox run.</p>
            )}

            {executionState === 'success' && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs">
                  <CheckCircle className="w-4 h-4" />
                  <span>Syntax Valid & Safe to Commit</span>
                </div>
                <p className="text-xs text-emerald-700 dark:text-emerald-300">
                  AST grammar check passed with 0 errors. PHP output returned cleanly without modifying global error states.
                </p>
              </div>
            )}

            {executionState === 'blocked' && (
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-2">
                <div className="flex items-center gap-2 text-rose-600 font-bold text-xs">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Fatal Crash Blocked & Rollback Executed</span>
                </div>
                <p className="text-xs text-rose-700 dark:text-rose-300">
                  <strong>Call to undefined function:</strong> The AI sandbox caught the fatal error before it reached the main WordPress loop. Website stayed 100% online!
                </p>
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
            <span>Rollback Strategy: Database Transaction Savepoint</span>
            <span className="text-emerald-500 font-semibold">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};
