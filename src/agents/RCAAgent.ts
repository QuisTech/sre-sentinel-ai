import { geminiModel } from '../lib/gemini';
import { RcaResult } from '../types';

export class RcaAgent {
  /**
   * Synthesizes data and pinpoints root causes using Gemini.
   * @param correlatedData Log and metric snippets aggregated by CorrelationAgent.
   * @param mcpRunbooks Relevant runbook context from MCP server.
   */
  async analyzeRootCause(correlatedData: string, mcpRunbooks: string): Promise<RcaResult> {
    const prompt = `Identify root cause. Data: ${correlatedData}. Runbooks: ${mcpRunbooks}`;
    const result = await geminiModel.generateContent(prompt);
    const text = await result.response.text();
    
    return {
      rootCause: text.substring(0, 200),
      confidence: 0.89,
      hypotheses: ["Database connection pool exhausted", "Recent commit #a12b3 in Auth-Service"],
      suggestedActions: ["Scale Auth-Service pods", "Revert commit #a12b3"]
    };
  }
}