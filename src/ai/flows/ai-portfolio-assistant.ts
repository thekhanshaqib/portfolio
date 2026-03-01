'use server';
/**
 * @fileOverview An AI assistant flow that answers questions about a Product Manager's portfolio content, experience, and projects.
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
    .describe("The question about the Product Manager's portfolio content, experience, or projects."),
});
export type AiPortfolioAssistantInput = z.infer<typeof AiPortfolioAssistantInputSchema>;

const AiPortfolioAssistantOutputSchema = z.object({
  answer: z
    .string()
    .describe("The AI assistant's answer based on the Product Manager's portfolio information."),
});
export type AiPortfolioAssistantOutput = z.infer<typeof AiPortfolioAssistantOutputSchema>;

export async function aiPortfolioAssistant(input: AiPortfolioAssistantInput): Promise<AiPortfolioAssistantOutput> {
  return aiPortfolioAssistantFlow(input);
}

const pmProfile = `
Product Manager Profile:
Role: Technical Product Manager, AI Systems, Consumer & Enterprise.
Background: Engineering background, 5+ years experience.
Leadership: Led cross-functional teams of 30-40 people.
Expertise Areas: AI automation, marketplaces, SaaS, logistics.
Key Skills/Achievements: Built AI workflow automation using LLM APIs, webhooks & orchestration tools.

Example Projects/Case Studies:
- AI Workflow Automation Platform: Problem, Approach, Technical Architecture, Metrics & Impact (e.g., reduced manual effort by X%, improved efficiency by Y%).
- Marketplace Optimization: Problem, Approach, Technical Architecture, Metrics & Impact (e.g., improved retention by X%, increased conversion by Y%).
- Logistics / Last-mile System: Problem, Approach, Technical Architecture, Metrics & Impact (e.g., reduced delivery times by X%, optimized routes by Y%).
- Internal SaaS Tool: Problem, Approach, Technical Architecture, Metrics & Impact (e.g., streamlined internal operations, improved team productivity).

Overall Tone: Strategic, measurable, clear, confident, business-focused.
`;

const portfolioAssistantPrompt = ai.definePrompt({
  name: 'portfolioAssistantPrompt',
  input: { schema: AiPortfolioAssistantInputSchema },
  output: { schema: AiPortfolioAssistantOutputSchema },
  prompt: `You are an AI assistant designed to answer questions about a Product Manager's professional portfolio.
Your goal is to provide clear, concise, and informative answers based on the provided profile information.
Maintain a strategic, measurable, clear, confident, and business-focused tone.
Do not invent information or speculate beyond what is provided.

Product Manager's Portfolio Summary:
${pmProfile}

User Question: {{{question}}}

Based on the Product Manager's profile, answer the question above.`,
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
