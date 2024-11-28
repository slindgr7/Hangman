
// först hämtar jag dom knapparna jag behöver med "getElementById", jag måste hämta knapparna först för att sen kunna ge dom en funktion
// const gameoverButton = document.getElementById('gameover-button');
// const winButton = document.getElementById('win-button');
// const gameoverScoreButton = document.getElementById('gameover-score-button');
// const winScoreButton = document.getElementById('win-score-button');

//här under har jag funktionerna för att se sina tidigare poäng när man klickar på "View score" knappen

// gameoverScoreButton.addEventListener('click', function () {
// 	displayScore();
// });
// winScoreButton.addEventListener('click', function () {
// 	dispalyScores();
// });

// // här under är funktionen för att spela spelet igen när man tyrycker på "play again" knappen

// gameoverButton.addEventListener('click', function () {
// 	resetGame();
// });

// winButton.addEventListener('click', function () {
// 	resetGame();
// });


//här är funktionen som sparar poängen spelarens aktuella poäng till local storage. Funktionen skapar ett objekt med poängen och den "skickas" till localstorage med JSON och görs så om till en sträng (tror jag XD)

// function saveScore(playerName, incorrectGuesses, wordLength, result) {

// 	let newScore = {
// 		name: playerName,
// 		incorrectGuesses: incorrectGuesses,
// 		wordLength: wordLength,
// 		result: result
// 	};

// 	localStorage.setItem('currentScore', JSON.stringify(newScore));
// }

//funktion för vad som händer när spelet är slut och spelaren förlorade, då "hämtas" gameover delen i html-filen och visas på skärmen
// export function gameOver() {
// 	let playerName = document.querySelector('.player-name').textContent;
// 	let incorrectGuesses = //här i behöver vi ha ett element som håller koll på hur många felgissningar spelaren har gjort;
// 	let wordLength = // här i behövs ett element som håller koll på ordens längd;

// 	saveScore(playerName, incorrectGuesses, wordLength, 'lost');

// 	document.querySelector('.gameover').style.display = 'flex';
// }

// export function gameWon() {
// 	let playerName = document.querySelector('.player-name').textContent;
// 	let incorrectGuesses = //här i behöver vi ha ett element som håller koll på hur många felgissningar spelaren har gjort;
// 	let wordLength = // här i behövs ett element som håller koll på ordens längd;

// 	saveScore(playerName, incorrectGuesses, wordLength, 'won');

// 	document.querySelector('.gameover').style.display = 'flex';
// }

//Här är en funktion som hämtar tidigare sparade poäng från localstorage. Poängen blir som en lista med sparade objekt så använder jag JSON som ändrar det till ett "JavaScript" objekt istället :P tror jag har förklarat det rätt. Om det finns poäng läggs dom till i en lista.  



// function displayScores() {
// 	let scores = JSON.parse(localStorage.getItem('scores')) || [];

// 	if (scores.lenght > 0) {
// 		let scoreList = '';
// 		scores.forEach(score => {
// 			scoreList += `<li>Spelare: ${score.name}, Felgissningar: ${incorrectGuesses}, Ordlängd: ${score.wordLength}</li>`;

// 		}) ;
// 		document.querySelector('.score-container ul').innerHTML = scoreList;
// 	} else {
// 		document.querySelector('.score-container ul').innerHTML = "<li>Inga poäng sparade än.</li>";
// 	}

// 	// document.querySelector('.score-container').style.display = 'flex';
// 	// document.querySelector('.game-container').style.display = 'none';
// 	// document.querySelector('.win').style.display = 'none';
// 	// document.querySelector('.gameover').style.display = 'none';
// }

//här är funktionen när man har spelat klart och sett sitt score och vill spela om spelet. 

// function resetGame() {
// 	document.querySelector('.score-container').style.display = 'none';
// 	document.querySelector('.home-screen-sction1').style.display ='flex';

// 	 document.querySelector('.game-container').style.display = 'none';  
// 	 document.querySelector('.win').style.display = 'none';  
// 	 document.querySelector('.gameover').style.display = 'none';  
	 
	
// 	 document.querySelector('.input-screen').value = '';  
// 	 document.querySelector('.word-display').textContent = '_ _ _ _ _ _ _ _';  
	 
// }
