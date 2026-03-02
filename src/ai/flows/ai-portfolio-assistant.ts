'use server';
/**
 * @fileOverview An AI assistant flow that answers questions about Shaqib Iqbal's portfolio content, experience, and projects.
 *
 * - aiPortfolioAssistant - A function that handles user questions about the portfolio.
 * - AiPortfolioAssistantInput - The input type for the aiPortfolioAssistant function.
 * - AiPortfolioAssistantOutput - The return type for the aiPortfolioAssistant function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiPortfolioAssistantInputSchema = z.object({
  question: z
    .string()
    .describe("The question about Shaqib Iqbal's portfolio content, experience, or projects."),
});
export type AiPortfolioAssistantInput = z.infer<typeof AiPortfolioAssistantInputSchema>;

const AiPortfolioAssistantOutputSchema = z.object({
  answer: z
    .string()
    .describe("The AI assistant's answer based on Shaqib Iqbal's portfolio information."),
});
export type AiPortfolioAssistantOutput = z.infer<typeof AiPortfolioAssistantOutputSchema>;

export async function aiPortfolioAssistant(input: AiPortfolioAssistantInput): Promise<AiPortfolioAssistantOutput> {
  return aiPortfolioAssistantFlow(input);
}

const pmProfile = `
Product Manager Profile: Shaqib Iqbal
Role: Technical Product Manager
Experience: 4+ years experience with an engineering foundation and entrepreneurial mindset.
Core Expertise: Building 0-1 products across B2C, B2B, SaaS, and Enterprise ecosystems.
Current Role: Product Manager & Digital Transformation at MegaPower Electromechanical LLC (Dubai, UAE).

Professional Journey:
- Apr 2024 - Present: Product Manager & Digital Transformation at MegaPower Electromechanical LLC (Dubai, UAE). Led 0-1 AI-powered automation/chatbot using OpenAI & Gemini APIs. Improved operational efficiency by 20%. Accelerated decision-making by 60% with SQL dashboards.
- Feb 2023 - Mar 2025: Co-founder & Project Manager at Centeuno Technologies LLP (Pune, India). Led delivery of 13+ cross-domain products (E-commerce, Logistics, SaaS, CRM, Real Estate, Loyalty). Scaled B2C platform to 1M AED revenue in year one with 40% retention and 30% repeat purchase rate. Managed sprints, backlog grooming, and feature prioritization.
- Dec 2022 - Mar 2024: Associate Product Manager at MAVS. Owned roadmap for 2 enterprise B2B platforms. Contributed to 11.67M AED in quoted billings (2025). Improved warehouse stock tracking speed by 40%. Saved 8-10 hours weekly via Power BI dashboards.
- Apr 2021 - Nov 2022: Product Analyst at MAVS. Focused on data-driven insights and market trends for enterprise solutions.
- Aug 2020 - Jan 2021: Web Developer Intern at Drivers In India, Pune, India. Foundation in engineering and technical implementation.

Key Skills:
- Product Roadmap & Strategy, Stakeholder Management, PRD/BRD Documentation.
- AI workflows (LLMs), Webhook-driven automation (n8n, Make), SQL, Power BI.
- Agile (Scrum), UX Optimization, Feature Prioritization, Customer Research & UAT.

Education: Bachelor of Computer Applications (CS/ENGINEERING), Savitribai Phule Pune University (CGPA 9.3/10).
Location: Pune, India (Open to Relocate).
`;

const portfolioAssistantPrompt = ai.definePrompt({
  name: 'portfolioAssistantPrompt',
  input: { schema: AiPortfolioAssistantInputSchema },
  output: { schema: AiPortfolioAssistantOutputSchema },
  prompt: `You are an AI assistant designed to answer questions about Shaqib Iqbal's professional portfolio.
Your goal is to provide clear, concise, and informative answers based on the provided profile information.
Maintain a strategic, measurable, clear, confident, and business-focused tone.
Do not invent information or speculate beyond what is provided.

Product Manager's Portfolio Summary:
${pmProfile}

User Question: {{{question}}}

Based on Shaqib's profile, answer the question above.`,
});

const aiPortfolioAssistantFlow = ai.defineFlow(
  {
    name: 'aiPortfolioAssistantFlow',
    inputSchema: AiPortfolioAssistantInputSchema,
    outputSchema: AiPortfolioAssistantOutputSchema,
  },
  async (input) => {
    const { output } = await portfolioAssistantPrompt(input);
    return output!;
  },
);
