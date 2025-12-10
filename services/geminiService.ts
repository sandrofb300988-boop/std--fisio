import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let aiClient: GoogleGenAI | null = null;

// Initialize client lazily to avoid issues if env var is missing during initial load (though it should be present)
const getAiClient = () => {
  if (!aiClient) {
    if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
      aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
    } else {
      console.warn("API_KEY environment variable is not set. AI features disabled.");
      return null;
    }
  }
  return aiClient;
};

export const sendMessageToGemini = async (
  history: { role: string; text: string }[],
  newMessage: string
): Promise<string> => {
  try {
    const client = getAiClient();
    
    if (!client) {
      return "O serviço de assistente virtual está temporariamente indisponível. Por favor, entre em contato conosco diretamente pelo WhatsApp ou telefone.";
    }

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

    if (!result.text) {
        throw new Error("Empty response from Gemini model");
    }

    return result.text;
  } catch (error: any) {
    console.error("Error communicating with Gemini:", error);
    
    // Extract error message for specific handling
    const errorMessage = error.message || "";

    // Handle specific error cases gracefully
    if (errorMessage.includes("503") || errorMessage.includes("overloaded")) {
        return "Estou recebendo muitas mensagens no momento. Por favor, aguarde alguns segundos e tente novamente.";
    }

    if (errorMessage.includes("SAFETY")) {
        return "Desculpe, não consigo responder a essa pergunta específica. Podemos falar sobre os serviços do Studio?";
    }

    if (errorMessage.includes("API_KEY") || errorMessage.includes("403")) {
        return "Ops, estamos com um problema técnico de configuração. Por favor, nos avise pelo WhatsApp.";
    }

    // Generic fallback
    return "Desculpe, ocorreu um erro técnico ao processar sua mensagem. Poderia tentar novamente ou nos contatar por telefone?";
  }
};