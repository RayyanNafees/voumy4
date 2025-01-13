export const getTags = (text: string | string[]) => {
	return Array.isArray(text)
		? text.flatMap((i) => i.split(" ")).map((i) => i.toLowerCase())
		: text
				.split(" ")
				.filter((i) => i)
				.map((i) => i.toLowerCase());
};
