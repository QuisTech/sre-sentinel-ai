import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

export const geminiModel = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

export async function getRootCauseAnalysis(context: string) {
  const prompt = `You are a Senior SRE. Analyze the following incident data and provide a root cause analysis, confidence score, and remediation steps: \n\n${context}`;
  const result = await geminiModel.generateContent(prompt);
  return result.response.text();
}