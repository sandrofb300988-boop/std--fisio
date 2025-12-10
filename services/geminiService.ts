import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let aiClient: GoogleGenAI | null = null;

// Initialize client lazily to avoid issues if env var is missing during initial load (though it should be present)
const getAiClient = () => {
  if (!aiClient) {
    if (!process.env.API_KEY) {
      console.error("API_KEY is missing from environment variables.");
      return null;
    }
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const sendMessageToGemini = async (
  history: { role: string; text: string }[],
  newMessage: string
): Promise<string> => {
  const client = getAiClient();
  
  if (!client) {
    return "Desculpe, o serviço de chat está temporariamente indisponível (Chave de API não configurada). Por favor, ligue para nós.";
  }

  try {
    // We construct a chat session. In a real persistent app we'd keep the 'chat' object alive,
    // but for this stateless implementation, we reconstruct context or use generateContent with history context.
    // For simplicity and robustness in this demo, we will use generateContent with the system instruction and recent history.
    
    // Format history for the model prompt context if needed, but the SDK supports chat structure better.
    // Let's use the proper chat interface.
    
    const chat = client.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({
      message: newMessage
    });

    return result.text || "Desculpe, não entendi. Pode repetir?";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Ocorreu um erro ao processar sua mensagem. Por favor, tente novamente ou nos ligue.";
  }
};
