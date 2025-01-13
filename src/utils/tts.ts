import { getAllAudioBase64 } from "google-tts-api"; // ES6 or TypeScript

// get audio URL
export default (q: string) =>
	getAllAudioBase64(q, {
		lang: "en",
		slow: false,
    host: 'https://translate.google.com',
    timeout: 10000,
    splitPunct: ',.?#!;:',

	}).then((url) =>url.flatMap(u => `data:audio/mpeg;base64,${u.base64}`));
