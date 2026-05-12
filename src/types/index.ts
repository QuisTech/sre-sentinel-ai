export type Severity = 'low' | 'medium' | 'high' | 'critical';

export interface Incident {
  id: string;
  title: string;
  status: 'active' | 'resolved' | 'investigating';
  severity: Severity;
  affectedSystems: string[];
  createdAt: string;
  summary?: string;
}

export interface RcaResult {
  rootCause: string;
  confidence: number;
  hypotheses: string[];
  suggestedActions: string[];
}

export interface AgentLog {
  id: string;
  agentName: string;
  message: string;
  timestamp: string;
  type: 'info' | 'warning' | 'error';
}