const playerNameInput = document.getElementById('player-name-input');
const playButton = document.getElementById('play-button');
const meddelande = document.getElementById('meddelande');

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