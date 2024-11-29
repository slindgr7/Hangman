
// här hämtar javascript alla elementen som ska användas


const playerNameInput = document.getElementById('player-name-input');
const playButton = document.getElementById('play-button');
const meddelande = document.getElementById('meddelande');



function updateGameDetails(playerName, score, incorrectGuesses, wordLength, result) { 
	let games = JSON.parse(localStorage.getItem('games')) || []; // hämtar games från local storage, om det inte finns något så skapas en tom array
	let gameIndex = games.findIndex(game => game.player === playerName); // kollar om det finns ett game med samma player name

	if (gameIndex !== -1) { // om det finns ett game med samma player name så uppdateras det
		games[gameIndex].score = score; 						// uppdaterar score
		games[gameIndex].incorrectGuesses = incorrectGuesses;	// uppdaterar incorrect guesses
		games[gameIndex].wordLength = wordLength; 				// uppdaterar word length
		games[gameIndex].result = result; 						// uppdaterar result
		games[gameIndex].date = new Date().toLocaleString();	// uppdaterar date
	} else { 		// om det inte finns ett game med samma player name så skapas ett nytt game
		let gameDetails = { 						
			player: playerName, 					
			score: score, 		 					
			date: new Date().toLocaleString(), 		
			incorrectGuesses: incorrectGuesses, 	
			wordLength: wordLength, 				
			result: result 							
		};
		games.push(gameDetails); // lägger till det nya game i games arrayen
	}

	localStorage.setItem('games', JSON.stringify(games)); // sparar games arrayen i local storage
}

// export the function
export { updateGameDetails };

	

// dessa functions callas aldrig ?
/* playButton.addEventListener('click', function () {
	const playerName = playerNameInput.value;

	if (playerName !== "") {
 		let players = JSON.parse(localStorage.getItem('players')) || [];
		if (!players.includes(playerName)) {
			players.push(playerName);
			localStorage.setItem('players', JSON.stringify(players));
		}

		meddelande.textContent = `Namnet ${playerName} har sparats `;
		meddelande.style.color = `green`;
 	} else {
 		meddelande.textContent = 'Skriv in ett namn';
 		meddelande.style.color = 'red';
 	}
 }); */

/* function saveScore() {
	let players = JSON.parse(localStorage.getItem('players')) || [];
	let playerIndex = players.indexOf(playerName);

	if (playerIndex !== -1) {
		let scores = JSON.parse(localStorage.getItem('scores')) || [];
		let playerScores = scores[playerIndex] || { name: playerName, scores: [] };

		let newScore = {
			incorrectGuesses: incorrectGuesses,
			wordLength: wordLength,
			result: result
		};

		playerScores.scores.push(newScore);
		scores[playerIndex] = playerScores;
		localStorage.setItem('scores', JSON.stringify(scores));
	}
}  */

