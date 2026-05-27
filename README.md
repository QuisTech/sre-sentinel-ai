# SRE Sentinel AI

> Intelligent Incident Response Platform for distributed system observability and accelerated MTTR.

## 🎯 Problem Statement
Site Reliability Engineering (SRE) teams face overwhelming operational challenges in diagnosing and resolving complex incidents across distributed systems. Manual investigation across fragmented monitoring tools, logs, metrics, and configuration repositories consumes critical response time and delays resolution.

Traditional incident management lacks intelligent automation for data correlation and root cause synthesis. We built SRE Sentinel to give SRE teams production-grade automation for rapid incident analysis and remediation recommendation.

## 💡 Solution
SRE Sentinel AI is a comprehensive incident response platform powered by Gemini and Google Cloud's orchestration stack. It integrates with a distributed ecosystem of monitoring tools, version control systems, and data repositories through a unified MCP (Model Context Protocol) interface. The system correlates multi-source incident data, performs structured root cause analysis, and generates prioritized remediation recommendations.

## 🏗️ Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React, Next.js, Tailwind CSS |
| Backend | Node.js (Express.js), Google Cloud Run |
| APIs | Gemini API, Google Cloud Agent Builder API, MCP Server API, Elasticsearch API, GitLab API, MongoDB Atlas API, Arize AI API, BigQuery ML API, Fivetran API |
| Deployment | Google Cloud Run, Vercel |

## 🏛️ System Architecture

### Incident Ingestion Service
- **Function:** Receives and classifies incident alerts from monitoring systems
- **Sources:** Webhooks from monitoring infrastructure (Prometheus, Datadog, etc.)
- **Outputs:** Normalized incident context, severity classification, affected component identification

### Data Correlation Engine
- **Function:** Aggregates and correlates multi-source incident context
- **Sources:** Elasticsearch logs, GitLab commits, metrics systems, historical incident database
- **Outputs:** Correlated log streams, relevant code changes, similar incident patterns

### Root Cause Analysis Service (Gemini Core)
- **Function:** Synthesizes correlated data and generates root cause hypotheses
- **Process:** LLM-powered reasoning over incident data, consultation of operational runbooks via MCP
- **Outputs:** Root cause candidates with confidence metrics, diagnostic summary

### Remediation Recommendation Engine
- **Function:** Generates actionable remediation steps based on root cause analysis
- **Process:** Matches root causes to documented remediation procedures, prioritization scoring
- **Outputs:** Prioritized remediation actions, linked runbook references, implementation guidance

### Observability Monitoring Layer
- **Function:** Instruments the incident response pipeline for reliability measurement
- **Tools:** Arize for LLM tracing and quality metrics
- **Outputs:** Performance dashboards, LLM drift detection, reliability SLOs

## 🖥️ UI Pages

### Incident Dashboard
**Purpose:** Real-time overview of active incidents and system health.
**Components:** Active Incident List · Response Pipeline Status · System Health Metrics · Agent Activity Log

### Incident Detail Analysis
**Purpose:** Comprehensive analysis view for individual incident investigation.
**Components:** Incident Timeline · Root Cause Summary · Correlation Evidence · Recommended Actions · Raw Data Explorer

## 🚀 Getting Started

```bash
npm install
cp .env.example .env
# Add your API keys to .env
npm run dev
```

## 🎬 Demonstration Flow

1. Step 1: Present the SRE incident management challenge at scale
2. Step 2: Trigger a simulated incident alert through the monitoring system
3. Step 3: Display SRE Sentinel dashboard detecting and ingesting the incident
4. Step 4: Show Data Correlation Engine querying Elasticsearch, GitLab, and MongoDB
5. Step 5: Demonstrate Gemini synthesizing correlated data and consulting MCP runbooks for analysis
6. Step 6: Display Remediation Recommendation Engine proposing prioritized actions
7. Step 7: Show Arize observability dashboards tracking LLM performance during analysis
8. Step 8: Summarize MTTR improvements and operational impact

## 📊 Technical Implementation
Comprehensive integration of sponsor technologies (MongoDB, Elastic, Fivetran, Arize) within a structured incident response architecture. The platform demonstrates enterprise-grade incident automation through multi-stage LLM-powered analysis, production-ready observability instrumentation, and reliable data aggregation across distributed observability systems.

---

*Developed by [QuisTech](https://github.com/QuisTech) — Building intelligent infrastructure automation*
