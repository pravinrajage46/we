import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Check if API key is provided
    const apiKey = process.env.OPENAI_API_KEY || process.env.OPENROUTER_API_KEY || process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured. Please add OPENAI_API_KEY to your .env file.' },
        { status: 500 }
      );
    }

    // Determine the endpoint and payload based on the available key
    let endpoint = 'https://api.openai.com/v1/chat/completions';
    let model = 'gpt-3.5-turbo';
    
    if (process.env.OPENROUTER_API_KEY) {
      endpoint = 'https://openrouter.ai/api/v1/chat/completions';
      model = 'openai/gpt-3.5-turbo';
    }

    // Standard OpenAI compatible request
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        ...(process.env.OPENROUTER_API_KEY && {
          'HTTP-Referer': 'http://localhost:3000',
          'X-Title': 'ROBOX LAB',
        }),
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {
            role: 'system',
            content: 'You are ROBOX, an advanced AI robotics assistant for the ROBOX LAB platform. You answer questions about robotics, autonomous systems, and AI with a professional, slightly futuristic tone. Keep answers concise and informative.'
          },
          ...messages.map((m: any) => ({
            role: m.role === 'ai' ? 'assistant' : m.role,
            content: m.text
          }))
        ],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('AI API Error:', errorData);
      
      // Handle Rate Limiting Specifically
      if (response.status === 429) {
         return NextResponse.json(
          { error: 'Rate limit exceeded (429). The AI service is currently overloaded or out of credits. Please try again later.' },
          { status: 429 }
        );
      }
      
      throw new Error('Failed to fetch AI response');
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'An error occurred while communicating with the AI. Please try again.' },
      { status: 500 }
    );
  }
}
