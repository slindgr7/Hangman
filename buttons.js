import{ showHomeScreenContainer, hideGameOverContainer, hideWinContainer } from './hide-funcation.js'

const playButtonlose = document.querySelector('.gameover-button')
const playButtonwin = document.querySelector('.win-button')
const scoreButtonLose = document.querySelector('.gameover-score-button')
const scoreButtonwin = document.querySelector('.win-score-button')


playButtonlose.addEventListener('click', function() {
        showHomeScreenContainer()
        hideGameOverContainer()
    });

playButtonwin.addEventListener('click', function() {
        showHomeScreenContainer()
        hideWinContainer()
    });

scoreButtonLose.addEventListener('click', function(){

    })

scoreButtonwin.addEventListener('click', function(){

})
