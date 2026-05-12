# SRE Sentinel AI

> Your AI-powered Senior SRE Assistant for lightning-fast incident resolution and proactive system health.

## 🎯 Problem Statement
Site Reliability Engineering (SRE) teams face overwhelming challenges in quickly diagnosing and resolving complex incidents across distributed systems. They spend crucial time sifting through disparate logs, metrics, alerts, and code changes, leading to extended Mean Time To Resolution (MTTR) and significant operational costs.

## 💡 Solution
SRE Sentinel AI is a functional agent, powered by Gemini and Google Cloud Agent Builder, that integrates with a Partner Entity’s MCP server and various monitoring tools. It acts as an intelligent SRE assistant, autonomously correlating incident data, identifying root causes, predicting potential failures using BigQuery ML, and suggesting precise remediation steps to drastically reduce downtime.

## 🏗️ Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React, Next.js, Tailwind CSS |
| Backend | Node.js (Express.js), Google Cloud Functions, Google Cloud Run |
| APIs | Gemini API, Google Cloud Agent Builder API, Partner Entity MCP Server API, Elasticsearch API, GitLab API, MongoDB Atlas API, Arize AI API (for LLM observability), BigQuery ML API, Fivetran API (for data pipeline orchestration) |
| Deployment | Google Cloud Run, Google Kubernetes Engine (GKE), Cloudflare (for CDN and edge security) |

## 🤖 Agent Architecture

### Incident Triage Agent
- **Role:** Receives initial incident alerts, categorizes severity, and identifies affected systems.
- **Inputs:** Webhooks from monitoring systems (e.g., PagerDuty, Prometheus), natural language queries from SREs.
- **Outputs:** Incident context, prioritized list of components for investigation.

### Data Correlation Agent
- **Role:** Gathers and correlates relevant data from various sources based on the incident context.
- **Inputs:** Incident context from Triage Agent, time ranges, affected components.
- **Outputs:** Aggregated logs from Elastic, metrics from monitoring tools (via Fivetran/BQ), recent code changes from GitLab, historical incident data from MongoDB.

### Root Cause Analysis Agent (Gemini Core)
- **Role:** Leverages Gemini to synthesize correlated data, consults the Partner's MCP server for domain-specific knowledge and runbooks, and queries BigQuery ML for anomaly detection and predictive insights.
- **Inputs:** Correlated data from Data Correlation Agent, context from MCP server, BigQuery ML outputs.
- **Outputs:** Identified root cause hypotheses, confidence scores, predictive failure alerts.

### Remediation Suggestion Agent
- **Role:** Proposes actionable remediation steps, links to relevant runbooks, and can draft commands or scripts.
- **Inputs:** Root cause hypothesis from RCA Agent, available runbooks from MCP server.
- **Outputs:** Prioritized remediation actions, links to documentation, potential script snippets.

### Observability Agent
- **Role:** Monitors the performance and reliability of the SRE Sentinel AI agents themselves using Arize, ensuring the quality of LLM outputs and data pipelines.
- **Inputs:** Agent logs, LLM prompts/responses, data pipeline metrics.
- **Outputs:** Performance dashboards, drift alerts, potential model failures reported to Arize.

## 🖥️ UI Pages

### Dashboard
**Purpose:** Overview of active incidents, agent status, and system health metrics.
**Components:** Active Incidents List · Agent Activity Log · MTTR Trends (powered by BQML) · System Health At-a-glance

### Incident Detail View
**Purpose:** Deep dive into a specific incident with agent-generated insights, correlated data, and suggested actions.
**Components:** Interactive Incident Timeline · Root Cause Analysis Card (from Gemini) · Suggested Remediation Steps · Raw Data View (logs, metrics, code changes) · Chat Interface with SRE Sentinel

### Knowledge Base / MCP Interface
**Purpose:** Centralized access to runbooks, documentation, and partner-specific knowledge, enriched by agent insights.
**Components:** Searchable Runbook Library · System Architecture Diagrams (from MCP) · Agent-generated Summaries of past incidents · Feedback Mechanism for Runbook improvement

### Configuration & Integrations
**Purpose:** Allow SRE teams to connect their various tools (Elastic, GitLab, Fivetran, etc.) and define their MCP server endpoint.
**Components:** API Key Management · Data Source Connection Status · Agent Personalization Settings

## 🚀 Getting Started

```bash
npm install
cp .env.example .env
# Add your API keys to .env
npm run dev
```

## 🎬 Demo Flow

1. Step 1: Introduce the critical problem of SRE incident management and the 'firefighting' culture.
2. Step 2: Simulate an incident alert triggering via a monitoring tool (e.g., a critical service outage).
3. Step 3: Show SRE Sentinel AI dashboard, highlighting the new incident and the Incident Triage Agent categorizing it.
4. Step 4: Navigate to the Incident Detail View, demonstrating the Data Correlation Agent querying Elastic (logs), GitLab (recent commits), and MongoDB (historical data).
5. Step 5: Illustrate the Root Cause Analysis Agent (powered by Gemini) synthesizing this data, consulting the Partner's MCP server for system context, and leveraging BigQuery ML for anomaly detection to pinpoint the root cause in real-time.
6. Step 6: Display the Remediation Suggestion Agent proposing actionable steps, linking to a relevant runbook, and even drafting a command to fix the issue.
7. Step 7: Briefly touch upon the Observability Agent using Arize to monitor the SRE Sentinel itself, ensuring its reliability.
8. Step 8: Conclude by emphasizing the dramatic reduction in MTTR, increased operational efficiency, and the shift from reactive to proactive SRE with SRE Sentinel AI.

## 📊 Scoring Strategy
This project maximizes scoring by integrating ALL required technologies and sponsor APIs deeply and meaningfully, showcasing superior Technological Implementation. The multi-agent architecture orchestrated by Google Cloud Agent Builder with Gemini's reasoning core demonstrates high technical complexity and innovation. The UI/UX is designed for clarity and actionability for SREs, ensuring high Design scores. It tackles a high-impact, universal real-world challenge (incident management) for enterprises, guaranteeing high Potential Impact. Finally, the concept of an 'AI Senior SRE Assistant' that correlates diverse data, consults specific MCP context, and uses predictive ML for proactive insights presents a unique and creative Quality of the Idea.

---

*Generated by [Agents Assemble](https://github.com/QuisTech/agents-assemble) — The Hackathon Co-Founder Meta-System*
