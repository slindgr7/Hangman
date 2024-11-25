import { words } from './swedish-words.js';

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    console.log("does it work", randomWord);
    return randomWord;
}

export  { getRandomWord };