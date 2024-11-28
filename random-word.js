import { words } from './swedish-words.js';


 
 function getRandomWord() {
    // get the selected difficulty
     const selectedDifficulty = document.querySelector('input[name="difficulty"]:checked')?.value;
     
    let filteredWords = [];

    // difficulty if else with filter for words 
    if (selectedDifficulty === "easy") {
        filteredWords = words.filter(word => word.length === 10); 
    } else if (selectedDifficulty === "medium") {
        filteredWords = words.filter(word => word.length === 11); 
    } else if (selectedDifficulty === "hard") {
        filteredWords = words.filter(word => word.length === 12); 
    } else {
        console.log("Please select a difficulty level");
        return null; // Exit the function if no difficulty is selected
    }

    // Get a random word from the filtered list
    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    const randomWord = filteredWords[randomIndex];
    console.log(randomWord);
    return randomWord;
}
export  { getRandomWord };