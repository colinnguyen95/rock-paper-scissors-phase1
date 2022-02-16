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
        return `You win! ${computerSelection} beats ${playerSelection}.`
    }
      
}

function game(){
    let computer_score = 0;
    let player_score = 0;

    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Choose Paper, Scissors, or Rock!").toLowerCase();
        const computerSelection = computerPlay();

        let result = playRound(playerSelection, computerSelection);
        console.log(result);

        if(result.includes("win")) player_score++;
        if(result.includes("lose")) computer_score++;
    }

    if(player_score > computer_score) {
        return "YOU WIN THE GAME. Computer Loses"
    } else if (player_score === computer_score) {
        return "GAME TIED"
    } else {
        return "YOU LOSE THE GAME!! COMPUTER WINS"
    }

}

console.log(game());