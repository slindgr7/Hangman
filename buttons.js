import{ showHomeScreenContainer, hideGameOverContainer, hideWinContainer } from './hide-funcation.js'

//const playButtonlose = document.querySelector('.gameover-button')
//const playButtonwin = document.querySelector('.win-button')
const scoreButtonLose = document.querySelector('.gameover-score-button')
const scoreButtonwin = document.querySelector('.win-score-button')
const ScoreButtonHomescreen = document.querySelector('.home-screen-score-button')
const dialog = document.querySelector('dialog')
const showScore = document.querySelector('#show-score')
const closeScoreBtn = document.querySelector('#close-score')
const scoreContainer = document.querySelector('.score-container')

// playButtonlose.addEventListener('click', function() {
//         showHomeScreenContainer()
//         hideGameOverContainer()
//     });

// playButtonwin.addEventListener('click', function() {
//         showHomeScreenContainer()
//         hideWinContainer()
//     });

dialog.addEventListener('click', event => {
        event.stopPropagation()
    })

ScoreButtonHomescreen.addEventListener('click', () => {
        scoreContainer.classList.remove('hide')
        dialog.show()
    })
scoreButtonLose.addEventListener('click', () => {
    scoreContainer.classList.remove('hide')
    dialog.show()
})

scoreButtonwin.addEventListener('click', () => {
    scoreContainer.classList.remove('hide')
    dialog.show()
})
