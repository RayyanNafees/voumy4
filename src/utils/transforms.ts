export const stringTagsToArray = (s: string) => [
	...new Set(
		s
			.split(" ")
			.filter((i) => i.trim())
			.map((i) => i.toLowerCase()),
	).keys(),
];
