'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')

const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')


const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')


// score0El.textContent = 0
// score1El.textContent = 0

//Now creating a class named hidden to hide the dice
//adding that class to the dice element
// diceEl.classList.add('hidden')

// //Rolling dice functionality
//initial variables
let scores, currentScore, activePlayer, playing


//back to initial position
const init = () => {
    diceEl.classList.add('hidden')
    scores = [0, 0]
    currentScore = 0
    activePlayer = 0
    playing = true

    score0El.textContent = 0
    score1El.textContent = 0
    current0El.textContent = 0
    current1El.textContent = 0
    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
    player0El.classList.add('player--active')
    player1El.classList.remove('player--active')
}

init()//for initial instance


const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).
        textContent = 0

    activePlayer = activePlayer === 0 ? 1 : 0
    currentScore = 0
    document.getElementById(`current--${activePlayer}`).textContent = currentScore
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}




btnRoll.addEventListener('click', () => {
    if (playing) {
        //generate a random dice roll
        const dice = Math.trunc((Math.random() * 6) + 1)
        // console.log(dice)
        //display it in dice
        //removing the hidden class
        diceEl.classList.remove('hidden')
        diceEl.src = `dice-${dice}.png`
        //check for1 :if yes switch to next player
        if (dice !== 1) {
            //add dice to current score
            currentScore += dice
            //adding dice value to current score 
            document.getElementById(`current--${activePlayer}`).
                textContent = currentScore



        } else {
            //switch the player
            switchPlayer()

        }
    }
    else
        alert("Click new game to start a game")
})

btnHold.addEventListener('click', () => {
    if (playing) {
        //add current score to active players score
        scores[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
        //check if score is already 100
        if (scores[activePlayer] >= 100) {
            diceEl.classList.add('hidden')
            playing = false
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        }
        else switchPlayer()
        //finish
        //switch player
        // switchPlayer()
    }
    else
        alert("Click new game to start a game")


})


btnNew.addEventListener('click', init)




