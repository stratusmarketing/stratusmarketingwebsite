
import { GoogleGenAI, Type } from "@google/genai";

const apiKey = process.env.API_KEY;

export class GeminiService {
  private ai: any;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: apiKey! });
  }

  async generateFlightPlan(businessData: {
    name: string;
    type: string;
    currentLeads: string;
    targetGrowth: string;
    painPoint: string;
  }) {
    const prompt = `
      You are an expert Aviation Marketing Consultant for Stratus Marketing. 
      Analyze the following business data and provide a concise "Flight Plan" (Marketing Strategy).
      Business Name: ${businessData.name}
      Business Type: ${businessData.type}
      Current Monthly Leads: ${businessData.currentLeads}
      Target Growth: ${businessData.targetGrowth}
      Primary Pain Point: ${businessData.painPoint}

      Your response MUST be in JSON format with the following structure:
      {
        "strategyName": "A clever aviation-themed name",
        "focusChannels": ["Channel 1", "Channel 2"],
        "tacticalSteps": ["Step 1", "Step 2", "Step 3"],
        "expectedOutcome": "Short summary of expected ROI",
        "operatorAdvice": "One piece of high-level advice from a pilot/operator mindset"
      }
    `;

    try {
      const response = await this.ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              strategyName: { type: Type.STRING },
              focusChannels: { type: Type.ARRAY, items: { type: Type.STRING } },
              tacticalSteps: { type: Type.ARRAY, items: { type: Type.STRING } },
              expectedOutcome: { type: Type.STRING },
              operatorAdvice: { type: Type.STRING }
            }
          }
        },
      });

      return JSON.parse(response.text);
    } catch (error) {
      console.error("Gemini Error:", error);
      throw error;
    }
  }
}

export const gemini = new GeminiService();
