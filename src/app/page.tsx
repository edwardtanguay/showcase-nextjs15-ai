"use client";
import { useCompletion } from "@ai-sdk/react";

export default function Home() {
	const { completion, input, handleInputChange, handleSubmit } =
		useCompletion();
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<h1>Showcase Next.js 15 with AI</h1>
				<form onSubmit={handleSubmit}>
					<input
						value={input}
						onChange={handleInputChange}
						className="bg-amber-200"
					/>
				</form>
				{completion ? <div>{completion}</div> : <div>...</div>}
			</main>
		</div>
	);
}
