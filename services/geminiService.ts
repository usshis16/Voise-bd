import { GoogleGenAI, Type, Schema } from "@google/genai";
import { ItineraryDay, PlannerPreferences } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Itinerary Generation Service
export const generateItinerary = async (prefs: PlannerPreferences): Promise<ItineraryDay[]> => {
  const modelId = "gemini-2.5-flash"; // Fast and capable for structured generation

  const schema: Schema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        day: { type: Type.INTEGER },
        title: { type: Type.STRING },
        activities: { 
          type: Type.ARRAY, 
          items: { type: Type.STRING } 
        },
        accommodation: { type: Type.STRING },
        foodHighlight: { type: Type.STRING }
      },
      required: ["day", "title", "activities", "accommodation", "foodHighlight"]
    }
  };

  const prompt = `
    Create a detailed ${prefs.duration}-day travel itinerary for Bangladesh.
    Budget Level: ${prefs.budget}.
    Interests: ${prefs.interests.join(", ")}.
    
    Focus on real locations in Bangladesh like Cox's Bazar, Sundarbans, Sylhet, Chittagong Hill Tracts, or Dhaka depending on the duration and interests.
    Ensure the itinerary is logically sequenced geographically.
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
        systemInstruction: "You are an expert travel guide for Bangladesh. Create realistic, exciting itineraries showcasing the natural beauty and culture of Bangladesh.",
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as ItineraryDay[];
    }
    throw new Error("No itinerary generated");
  } catch (error) {
    console.error("Error generating itinerary:", error);
    throw error;
  }
};

// Chat Service
export const chatWithGuide = async (message: string, history: { role: string, parts: { text: string }[] }[]): Promise<string> => {
  const modelId = "gemini-2.5-flash";

  try {
    const chat = ai.chats.create({
      model: modelId,
      history: history,
      config: {
        systemInstruction: "You are 'Ruposhi', a friendly and knowledgeable AI travel assistant for Bengal Voyages. You love Bangladesh and know everything about its tourism, history, and culture. Keep answers concise, helpful, and inviting. Use emojis occasionally.",
      }
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I'm having trouble connecting to the travel network right now. Please try again.";
  } catch (error) {
    console.error("Chat error:", error);
    return "Sorry, I encountered an error while thinking about your question.";
  }
};
