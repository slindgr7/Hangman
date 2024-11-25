import { showHomeScreenContainer, hideHomeScreenContainer } from "./hide-funcation.js";
import { getRandomWord } from "./random-word.js";

document.querySelector('.home-screen-play-button').addEventListener('click',hideHomeScreenContainer)

document.querySelector('.spela-om-btn').addEventListener('click', getRandomWord);

getRandomWord()

// missing somthing with the funcation, mby import is worng?