import { words } from './swedish-words.js';


 // ordet längd är randomWord
function getRandomWord() {
    const filteredWords = words.filter(word => word.length === 10);
    if(filteredWords.length === 0) {
        console.log("Empty");
    }
    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    const randomWord = filteredWords[randomIndex];
    console.log(randomWord);
    return randomWord;
}

export  { getRandomWord };