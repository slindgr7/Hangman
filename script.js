import { hideHomeScreenContainer, showHomeScreenContainer, hideGameContainer, showGameContainer
    ,showGameOverContainer, hideGameOverContainer, showWinContainer, hideWinContainer 
    ,showScoreContainer, hideScoreContainer ,showUserDetails, hideUserDetails } from "./hide-funcation.js";


// home screen buttons that hide and show , need a DOMContentLoaded to load
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.home-screen-play-button').addEventListener('click', () => {
        hideHomeScreenContainer();
        showGameContainer();
    });
    document.querySelector('.home-screen-score-button').addEventListener('click', () => {
        hideHomeScreenContainer();
        showScoreContainer();
    });
});
// Game screen buttons that hide and show 


// game over screen buttons that hide and show, need a DOMContentLoaded to load
document.addEventListener('DOMContentLoaded', function () {
document.querySelector('.gameover-button').addEventListener('click', () => {
    hideGameOverContainer();
    showHomeScreenContainer();
});
document.querySelector('.gameover-score-button').addEventListener('click', () => {
    hideGameOverContainer();
    showScoreContainer();
});
});

// win screen buttons that hide and show , need a DOMContentLoaded to load
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.win-button').addEventListener('click', () => {
        hideWinContainer();
        showHomeScreenContainer();
    });
    document.querySelector('.win-score-button').addEventListener('click', () => {
        hideWinContainer();
        showScoreContainer();
    });
    });

// score screen buttons that hide and show, need a DOMContentLoaded to load
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.back-to-game').addEventListener('click', () => {
        hideScoreContainer();
        showHomeScreenContainer();
    });

})

