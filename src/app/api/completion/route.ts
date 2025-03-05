import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export const maxDuration = 30;

export async function POST() {
	console.log(11111, 'IN API')
	const prompt = "give me synonymous of lively";
	const response =  await streamText({
		model: openai("gpt-4"),
		prompt,
	});

	console.log(22222, response.toDataStreamResponse())
	return response.toDataStreamResponse();
}
