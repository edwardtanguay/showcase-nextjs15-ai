import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { NextRequest } from 'next/server';
export const maxDuration = 30;
export async function POST(req: NextRequest) {
	const { messages } = await req.json();
	const response = await streamText({
		model: openai("gpt-4o"),
		messages
	});
return response.toAIStreamResponse();	
}
