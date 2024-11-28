export function gameOver() {
    let playerName = localStorage.getItem('playerName');
    let wordLength = getRandomWord.length;
    let incorrectGuesses = document.querySelector('#incorrectGuesses').innerText;
    
    const todaysDate = new Date();
    const timePlayed = `${todaysDate.getHours()}:${todaysDate.getMinutes()} ${todaysDate.getDate()}/${todaysDate.getMonth()+1}`;
    
    saveScore(playerName, incorrectGuesses, wordLength, 'lost', score, timePlayed);

	//  document.querySelector('.gameover').style.display = 'flex';
	 saveScore(playerName, incorrectGuesses, wordLength, 'lost', score, timePlayed);
     showGameOverContainer();
     document.querySelector('.gameover-p1').innerText = `Det hemliga ordet var: ${getRandomWord}`;
     document.querySelector('.gameover-p2').innerText = `Ditt antal gissningar var: ${incorrectGuesses}`;
}

export function gameWon() {
    score += 10;  
    let playerName = localStorage.getItem('playerName');
    let wordLength = getRandomWord.length;
    let incorrectGuesses = document.querySelector('#incorrectGuesses').innerText;
    
    const todaysDate = new Date();
    const timePlayed = `${todaysDate.getHours()}:${todaysDate.getMinutes()} ${todaysDate.getDate()}/${todaysDate.getMonth()+1}`;
    
    saveScore(playerName, incorrectGuesses, wordLength, 'won', score, timePlayed);

	document.querySelector('.gameover').style.display = 'flex';
	saveScore(playerName, incorrectGuesses, wordLength, 'won', score, timePlayed);

    
}

function displayScores() {
    let scores = JSON.parse(localStorage.getItem('scores')) || [];

    if (scores.length > 0) {  
        let scoreList = '';
        scores.forEach(score => {
            scoreList += `<li>Spelare: ${score.name}, Felgissningar: ${score.incorrectGuesses}, Ordlängd: ${score.wordLength}, Poäng: ${score.score}, Tid: ${score.timePlayed}</li>`;
        });
        document.querySelector('.score-container ul').innerHTML = scoreList;
    } else {
        document.querySelector('.score-container ul').innerHTML = "<li>Inga poäng sparade än.</li>";
    }

   
}


function saveScore(playerName, incorrectGuesses, wordLength, result, score, timePlayed) {
	let newScore = {
		name: playerName,
		incorrectGuesses: incorrectGuesses,
		wordLength: wordLength,
		result: result,
		score: score,
		timePlayed: timePlayed
	};

	let allScores = JSON.parse(localStorage.getItem('scores')) || [];
	allScores.push(newScore);
	localStorage.setItem('scores', JSON.stringify(allScores));
}