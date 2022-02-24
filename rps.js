const options = ['rock', 'paper', 'scissors']

function computerPlay(){
    return options[Math.floor(Math.random() * options.length)]
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return `TIE! Computer chose: ${computerSelection} and Player chose: ${playerSelection}`
    }
    else if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")
    ){
        return `You lose! ${computerSelection} beats ${playerSelection}.`
    } else {
        return `You win! ${playerSelection} beats ${computerSelection}.`
    }
      
}

const container = document.querySelector('.container');
const resultContainer = document.querySelector('h1');
const round = document.querySelector('#round');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');

const roundElement = document.createElement('div');
const result = document.createElement('div');
const playerScoreElement = document.createElement('div');
const computerScoreElement = document.createElement('div');
const finalResultElement = document.createElement('h1');

let computerScore = 0;
let playerScore = 0;
let roundNum = 0;

roundElement.textContent = `${roundNum}`;
playerScoreElement.textContent = `${playerScore}`;
computerScoreElement.textContent = `${computerScore}`;

round.appendChild(roundElement);
player.appendChild(playerScoreElement);
computer.appendChild(computerScoreElement);
resultContainer.appendChild(result);
container.appendChild(finalResultElement);

const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(roundNum < 5){
            console.log(btn.textContent);
            const playerSelection = btn.textContent.toLowerCase();
            const computerSelection = computerPlay();
            result.textContent = playRound(playerSelection, computerSelection);
            
            if(result.textContent.includes("win")) playerScore++;
            if(result.textContent.includes("lose")) computerScore++;
            roundNum++;
            playerScoreElement.textContent = `${playerScore}`
            computer.textContent = `${computerScore}`
            roundElement.textContent = `${roundNum}`
        }
        if(roundNum === 5){
            if(playerScore > computerScore) {
                finalResultElement.textContent = "YOU WIN THE GAME. Computer Loses"
            } else if (playerScore === computerScore) {
                finalResultElement.textContent = "GAME TIED"
            } else {
                finalResultElement.textContent = "YOU LOSE THE GAME!! COMPUTER WINS"
            }
        }
    })
});

// if(roundNum === 5){
//     if(playerScore > computerScore) {
//         finalResultElement.textContent = "YOU WIN THE GAME. Computer Loses"
//     } else if (player_score === computer_score) {
//         finalResultElement.textContent = "GAME TIED"
//     } else {
//         finalResultElement.textContent = "YOU LOSE THE GAME!! COMPUTER WINS"
//     }
// }


/****PLAY 5 ROUNDS OF THE GAME THROUGH THE CONSOLE******/
// function game(){
//     let computer_score = 0;
//     let player_score = 0;

//     for(let i = 0; i < 5; i++){
//         const playerSelection = prompt("Choose Paper, Scissors, or Rock!").toLowerCase();
//         const computerSelection = computerPlay();

//         let result = playRound(playerSelection, computerSelection);
//         console.log(result);

//         if(result.includes("win")) player_score++;
//         if(result.includes("lose")) computer_score++;
//     }

//     if(player_score > computer_score) {
//         return "YOU WIN THE GAME. Computer Loses"
//     } else if (player_score === computer_score) {
//         return "GAME TIED"
//     } else {
//         return "YOU LOSE THE GAME!! COMPUTER WINS"
//     }
// }

// console.log(game());