import { NextRequest } from 'next/server';
import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai';

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response('Missing API Key', { status: 500 });
    }

    const ai = new GoogleGenerativeAI(apiKey);
    const body = await req.json();

    switch (body.action) {
      case 'chat': {
        const { message, history, systemInstruction } = body;
        const model = ai.getGenerativeModel({ 
          model: 'gemini-2.5-flash', 
          systemInstruction: systemInstruction || ''
        });
        
        // Pass the format of history required by the SDK: 
        // { role: 'user' | 'model', parts: [{text: string}] }
        const chat = model.startChat({ history: history || [] });
        const result = await chat.sendMessageStream(message);

        const stream = new ReadableStream({
          async start(controller) {
            try {
              for await (const chunk of result.stream) {
                const chunkText = chunk.text();
                controller.enqueue(new TextEncoder().encode(chunkText));
              }
              controller.close();
            } catch (e) {
              controller.error(e);
            }
          }
        });

        return new Response(stream, {
          headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
      }

      case 'classifyInterest': {
        const { text } = body;
        const model = ai.getGenerativeModel({
          model: 'gemini-2.5-flash',
          generationConfig: {
            responseMimeType: 'application/json',
            responseSchema: {
              type: SchemaType.OBJECT,
              properties: {
                interest: {
                  type: SchemaType.STRING,
                  format: 'enum',
                  enum: ['Cloud', 'Ops', 'Referral', 'General']
                }
              }
            }
          }
        });
        const prompt = `Analyze the user query. Classify interest into "Cloud", "Ops", "Referral", or "General". User query: "${text}"`;
        const result = await model.generateContent(prompt);
        return new Response(result.response.text(), { 
          headers: { 'Content-Type': 'application/json' } 
        });
      }

      case 'matchFAQ': {
        const { userQuestion, faqList } = body;
        const model = ai.getGenerativeModel({
          model: 'gemini-2.5-flash',
          generationConfig: {
            responseMimeType: 'application/json',
            responseSchema: {
              type: SchemaType.OBJECT,
              properties: {
                matchIndex: {
                  type: SchemaType.INTEGER
                }
              }
            }
          }
        });
        const prompt = `
          You are an expert question matcher. Your task is to determine if a user's question closely matches any question from a predefined list.
          Here is the list of predefined questions:
          ${faqList.map((item: any, index: number) => `${index + 1}. ${item.q}`).join('\n')}
          Here is the user's question: "${userQuestion}"
          Analyze the user's question and determine which predefined question it is asking.
          Respond with the corresponding number (1-${faqList.length}).
          If the user's question does not match any of the predefined questions, respond with the number 0.
        `;
        const result = await model.generateContent(prompt);
        return new Response(result.response.text(), { 
          headers: { 'Content-Type': 'application/json' } 
        });
      }

      default:
        return new Response('Invalid action', { status: 400 });
    }
  } catch (error: any) {
    console.error("API error in chat route:", error);
    return new Response(error.message || 'Internal Server Error', { status: 500 });
  }
}
