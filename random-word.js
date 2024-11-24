import { words } from './swedish-words.js';

function getRandomWord() {
    if (!Array.isArray(words) || words.length === 0) {
        throw new Error('The words array is not valid or is empty');
    }
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    console.log(randomWord);
    return randomWord;
}

export { getRandomWord };