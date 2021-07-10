const input = document.querySelectorAll('.input');

const game = document.querySelector('.game');
const choiceContainer = document.querySelector('.choicecontainer');

const userScore = document.getElementById('userscr');
const bossScore = document.getElementById('bossscr');

const showWinner = document.querySelector('.winner');

const userPicked = document.querySelector('.userpicked');
const bossPicked = document.querySelector('.bosspicked');

const playAgainButton = document.querySelector('.playagain');


let yourScore = 0;
let machineScore = 0;

// iterating iver all buttons
for(let i = 0; i < input.length; i++) {
    input[i].addEventListener('click', gameOn)
}


// the whole game logic
function gameOn (e) {
    // taking userchoice
    let playerChoice = e.target.innerText;
    game.classList.add('hide');
    choiceContainer.classList.remove('hide');
    // taking computer choice
    let availableChoices = ['Rock', 'Paper', 'Scissors'];
    let machineChoice = availableChoices[Math.floor(Math.random() * availableChoices.length)]
    
    //showing selected choice of both user and computer
     userPicked.innerHTML = `${playerChoice}`
     bossPicked.innerHTML = `${machineChoice}`
     userPicked.style.fontSize = '2rem'
     bossPicked.style.fontSize = '2rem'


     if (playerChoice === 'Rock') {
         userPicked.style.borderColor = '#2843dd';
     } else if (playerChoice === 'Paper') {
         userPicked.style.borderColor = '#fbb800';
     } else if (playerChoice === 'Scissors'){
         userPicked.style.borderColor = '#d3261a';
     }

     if (machineChoice === 'Rock') {
        bossPicked.style.borderColor = '#2843dd';
    } else if (machineChoice === 'Paper') {
        bossPicked.style.borderColor = '#fbb800';
    } else if (machineChoice === 'Scissors'){
        bossPicked.style.borderColor = '#d3261a';
    }

    // showing score
    userScore.innerHTML = `${yourScore}`
    bossScore.innerHTML = `${machineScore}`

    // game draw
    if(playerChoice === machineChoice) {
        showWinner.innerHTML = "OH! DRAW"
    }
    
    // show winner
    if(playerChoice === 'Rock' && machineChoice === 'Paper') {
        showWinner.innerHTML = "YOU LOSE"
        machineScore++;
        bossScore.innerHTML = `${machineScore}`
    } else if (playerChoice === 'Rock' && machineChoice === 'Scissors') {
        showWinner.innerHTML = "YOU WIN"
        yourScore++;
        userScore.innerHTML = `${yourScore}`
    } else if (playerChoice === 'Paper' && machineChoice === 'Rock') {
        showWinner.innerHTML = "YOU WIN"
        yourScore++;
        userScore.innerHTML = `${yourScore}`
    } else if (playerChoice === 'Paper' && machineChoice === 'Scissors') {
        showWinner.innerHTML = "YOU LOSE"
        machineScore++;
        bossScore.innerHTML = `${machineScore}`
    } else if (playerChoice === 'Scissors' && machineChoice === 'Rock') {
        showWinner.innerHTML = "YOU LOSE"
        machineScore++;
        bossScore.innerHTML = `${machineScore}`
    } else if (playerChoice === 'Scissors' && machineChoice === 'Paper') {
        showWinner.innerHTML = "YOU WIN"
        yourScore++;
        userScore.innerHTML = `${yourScore}`
    }
} 


playAgainButton.addEventListener('click', () => {
    game.classList.remove('hide');
    choiceContainer.classList.add('hide');
})