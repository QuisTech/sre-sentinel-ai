export interface IncidentAlert {
  id: string;
  source: 'PagerDuty' | 'Prometheus' | 'Manual';
  severity: 'P0' | 'P1' | 'P2';
  description: string;
  timestamp: string;
}

export class TriageAgent {
  /**
   * Receives initial incident alerts, categorizes severity, and identifies affected systems.
   */
  async triageIncident(input: IncidentAlert | string) {
    console.log("Triaging incident...", input);
    // Mock logic for categorization
    return {
      incidentId: typeof input === 'string' ? 'INC-' + Math.random().toString(36).substr(2, 9) : input.id,
      context: "High CPU usage detected in production-cluster-west",
      affectedComponents: ["AuthService", "BillingAPI"],
      priority: "High"
    };
  }
}