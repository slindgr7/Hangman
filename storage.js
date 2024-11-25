
// här hämtar javascript alla elementen som ska användas


const playerNameInput = document.getElementById('player-name-input');
const playButton = document.getElementById('play-button');
const meddelande = document.getElementById('meddelande');

// funktion som gör att namnet som spelaren skriver in sparas och visas i local storage, när namnet skrivit in och spelaren klickar på play kommer en grön text upp som visar att det är korrekt. Skriver inte spelaren i sitt namn innan den klickar på play kommern en röd text som säger till att ett namn behövs innan man spelar 

playButton.addEventListener('click', function () {
	const playerName = playerNameInput.value;

	if (playerName !== ""){
		localStorage.setItem('playerName', playerName);

		meddelande.textContent = `Namnet ${playerName} har sparats `;
		meddelande.style.color = `green`;
	} 
	else {
		meddelande.textContent = 'Skriv in ett namn';
		meddelande.style.color = 'red';
	}
});