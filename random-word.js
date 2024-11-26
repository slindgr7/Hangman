import { words } from './swedish-words.js';

function getRandomWord() {
    if(words.length === 0 ){
        console.log("Empty")
    }
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    console.log("does it work", randomWord);
    return randomWord;
}
//if else for word string lenght
export  { getRandomWord };