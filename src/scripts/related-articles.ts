import Groq from "groq-sdk";

const groq = new Groq({ apiKey: import.meta.env.GROQ_API_KEY });
const getAIRecommendedSlugs = (prompt: string) =>
	groq.chat.completions.create({
		messages: [
			{
				role: "user",
				content: prompt,
			},
			{
				role: "system",
				content: `You are a scholarly bot that deals in JSON format only as input as well as output
        The user provides u with the list of all slugs (as allSlugs in JSON field) and
        the current slug (as currectSlug in JSON field).
        The bot will reply with the list of related slugs that are similar to the current slug.
        The list should be in JSON format and should be exactly from the list of allSlugs only without any error.
        Don't even start with a \`\`\` or add any help text from yourself byt directly output as a json list of slugs (which are already listed in allSlugs).
        
        For eg,
        Input:
        {
          "allSlugs": [
            "what-is-time",
            "the-theory-of-everything",
            "time-dilation",
            "quantum-physics",
            "why-not-to-go-out-on-saturdays",
            "what-is-quantum-physics",            
          ],
          "currentSlug": "what-is-time"
        }

        Output:
        [
          "the-theory-of-everything",
          "time-dilation",
          "quantum-physics"
        ]
        `,
			},
		],
		model: "llama-3.1-8b-instant",
	});

export const getRelatedSlugs = async (
	allSlugs: string[],
	currentSlug: string,
): Promise<string[]> => {
	try {
		const chatCompletion = await getAIRecommendedSlugs(
			JSON.stringify({
				allSlugs,
				currentSlug,
			}),
		);

		console.log("Completion Choices: ", JSON.stringify(chatCompletion.choices));
		// Print the completion returned by the LLM.
		return (
			JSON.parse(chatCompletion.choices[0]?.message?.content ?? "[]") || []
		);
	} catch (e) {
		console.error(e);
		return [];
	}
};
