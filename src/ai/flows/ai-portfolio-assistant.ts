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

Key Skills:
- Product Roadmap & Strategy, Stakeholder Management, Market Research.
- AI workflows (LLMs), Webhook-driven automation (n8n, Make), SQL, Power BI.
- Agile (Scrum), UX Optimization, Feature Prioritization.

Work Experience Highlights:
- MegaPower (2024-Present): Led 0-1 AI-powered automation/chatbot using OpenAI & Gemini APIs. Improved operational efficiency by 20%. Accelerated decision-making by 60% with SQL dashboards.
- BizDro (2025-2025): Owned 0-1 development of AI-powered contact management app. Delivered MVP in 2 weeks. Reduced churn by 20% through UX improvements.
- Centeuno Technologies (2023-2025): Co-founder. Led delivery of 13+ cross-domain products. Scaled B2C platform to 1M AED revenue in year one with 40% retention.
- MAVS (2021-2024): Owned roadmap for 2 B2B web apps. Improved warehouse tracking speed by 40%.

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
