import { Incident, Severity } from '../types';

export class TriageAgent {
  /**
   * Receives initial incident alerts and categorizes them.
   * @param rawAlert Webhook data from monitoring systems.
   */
  async triageIncident(rawAlert: any): Promise<Partial<Incident>> {
    console.log('TriageAgent: Categorizing severity...');
    // Simulation logic
    const severity: Severity = rawAlert.level === 'crit' ? 'critical' : 'high';
    return {
      id: Math.random().toString(36).substr(2, 9),
      title: rawAlert.message || 'Unknown Service Degradation',
      severity,
      affectedSystems: ['Auth-Service', 'API-Gateway'],
      status: 'active',
      createdAt: new Date().toISOString()
    };
  }
}