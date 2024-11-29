function hideHomeScreenContainer() {
    let homeContainerElements = document.querySelectorAll('section.home-screen-section1 *');
    homeContainerElements.forEach(function(element) {
        element.setAttribute('hidden', true);
    });
}

function showHomeScreenContainer() {
    let homeContainerElements = document.querySelectorAll('section.home-screen-section1 *');
    homeContainerElements.forEach(function(element) {
        element.removeAttribute('hidden');
    });
}

function hideGameContainer() {
    let gameContainerElements = document.querySelectorAll('section.game-container *');
    gameContainerElements.forEach(function(element) {
        element.setAttribute('hidden', true);
        document.querySelector('section.game-container').style.display = 'none';
    });
}

function showGameContainer() {
    let gameContainerElements = document.querySelectorAll('section.game-container *');
    gameContainerElements.forEach(function(element) {
        element.removeAttribute('hidden');
        document.querySelector('section.game-container').style.display = 'flex';
    });
}

function showGameOverContainer() {
    let gameOverContainerElements = document.querySelectorAll('section.gameover *');
    gameOverContainerElements.forEach(function(element) {
        element.removeAttribute('hidden');
    });
}

function hideGameOverContainer() {
    let gameOverContainerElements = document.querySelectorAll("section.gameover *")
    gameOverContainerElements.forEach(function(element){
        element.setAttribute('hidden', true);
    });
}

function showWinContainer() {
    let winContainerElements = document.querySelectorAll("section.win *")
    winContainerElements.forEach(function(element){
       element.removeAttribute('hidden'); 
    });
}

function hideWinContainer(){
    let winContainerElements = document.querySelectorAll("section.win *")
    winContainerElements.forEach(function(element){
        element.setAttribute('hidden' , true);
    });
}

function showScoreContainer() {
    let showScoreContainerElements = document.querySelectorAll("section.score-container *")
    showScoreContainerElements.forEach(function(element){
        element.removeAttribute('hidden');
    });
}
function hideScoreContainer() {
    let showScoreContainerElements = document.querySelectorAll("section.score-container *")
    showScoreContainerElements.forEach(function(element){
        element.setAttribute('hidden', true);
    });
}

function showUserDetails(){
    let showUserDetailsElements = document.querySelectorAll("section.user-details *")
    showUserDetailsElements.forEach(function(element){
        element.removeAttribute('hidden');
    });
}

function hideUserDetails(){
    let showUserDetailsElements = document.querySelectorAll("section.user-details *")
    showUserDetailsElements.forEach(function(element){
        element.setAttribute('hidden', true);
    });
}





export { hideHomeScreenContainer, showHomeScreenContainer, hideGameContainer, showGameContainer
        ,showGameOverContainer, hideGameOverContainer, showWinContainer, hideWinContainer 
        ,showScoreContainer, hideScoreContainer ,showUserDetails, hideUserDetails
 };