import React, { useState } from 'react';
import { Send, CheckCircle2, RefreshCw, Sparkles, Code2, Globe } from 'lucide-react';
import { toast } from 'sonner';

const SAMPLE_PAYLOAD = {
  event: 'form_submission',
  form_id: 12,
  form_title: 'Enterprise IT Consulting Consultation (SSI)',
  timestamp: new Date().toISOString(),
  data: {
    client_name: 'Yogeshkumar Patel',
    email: 'yogesh@hyka.com.au',
    company: 'HYKA Technology',
    service: 'AI Multi-Agent Workflow Engineering',
    budget: '$15,000 - $25,000 AUD',
    location: 'Adelaide, South Australia',
  },
};

export const WebhookSimulator: React.FC = () => {
  const [isSending, setIsSending] = useState(false);
  const [responseJson, setResponseJson] = useState<string | null>(null);

  const handleDispatch = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setResponseJson(
        JSON.stringify(
          {
            status: 200,
            webhook_status: 'DISPATCHED_AND_LOGGED',
            crm_status: 'HubSpot Contact Created (#9481)',
            validation: 'All Zod Schema Constraints Met',
            notification: 'Slack #leads Channel Alerted',
          },
          null,
          2
        )
      );
      toast.success('Form webhook simulation dispatched successfully!');
    }, 450);
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
              <Send className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">Form Webhook & CRM Payload Simulator</h2>
              <p className="text-xs text-muted-foreground">
                Simulate and debug Gravity Forms, Fluent Forms, and WPForms webhooks with CRMs (HubSpot, Make, Zapier) without submitting live leads.
              </p>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-600 text-xs font-mono font-semibold">
            Feature 5: simulate_form_webhook
          </div>
        </div>
      </div>

      {/* Editor & Response */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Payload */}
        <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm flex flex-col">
          <div className="px-4 py-3 border-b border-border bg-muted/40 flex items-center justify-between">
            <span className="text-xs font-mono font-semibold text-foreground flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-blue-500" />
              <span>Simulated Form Webhook Payload (JSON)</span>
            </span>
            <button
              onClick={handleDispatch}
              disabled={isSending}
              className="px-3.5 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-sm"
            >
              {isSending ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
              <span>Test Dispatch</span>
            </button>
          </div>
          <div className="p-4 flex-1 bg-muted/20 font-mono text-xs text-foreground overflow-x-auto">
            <pre className="leading-relaxed">{JSON.stringify(SAMPLE_PAYLOAD, null, 2)}</pre>
          </div>
        </div>

        {/* Response */}
        <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm flex flex-col">
          <div className="px-4 py-3 border-b border-border bg-muted/40 flex items-center justify-between">
            <span className="text-xs font-mono font-semibold text-foreground flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>CRM & Webhook Endpoint Response</span>
            </span>
            <span className="text-xs font-mono text-muted-foreground">HTTP 200</span>
          </div>
          <div className="p-4 flex-1 bg-muted/20 font-mono text-xs text-foreground overflow-x-auto">
            {responseJson ? (
              <pre className="leading-relaxed text-emerald-600 dark:text-emerald-400">{responseJson}</pre>
            ) : (
              <p className="text-xs text-muted-foreground font-sans">Click "Test Dispatch" to simulate CRM ingestion.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
