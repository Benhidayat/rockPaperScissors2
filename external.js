let humanScore = 0;
let computerScore = 0;

function getCompChoice() {
    let randomizeIndex = Math.floor(Math.random() * 3)+1;

    switch (randomizeIndex) {
        case 1:
            return `rock`;
        
        case 2:
            return `paper`;

        case 3:
            return `scissors`;
    }

}

function getHumanChoice() {
    let choice = window.prompt('Rock, paper, or scissors?');
    return choice.toLowerCase();
}
// function to play a round of game
/*function playRound(playerSelection, compSelection) {
    switch(true) {
        case playerSelection === compSelection:
            return `Tie`;

        case playerSelection === "rock" && compSelection === "paper":
            computerScore++;
            return `You Lose! ${compSelection} beats ${playerSelection}`;

        case playerSelection === "rock" && compSelection === "scissors":
            humanScore++;
            return `You Win! ${playerSelection} beats ${compSelection}`;

        case playerSelection === 'paper' && compSelection === 'rock':
            humanScore++
            return `You Win! ${playerSelection} beats ${compSelection}`;

        case playerSelection === 'paper' && compSelection === 'scissors':
            computerScore++;
            return `You Lose! ${compSelection} beats ${playerSelection}`;

        case playerSelection === 'scissors' && compSelection === 'rock':
            computerScore++;
            return `You Lose! ${compSelection} beats ${playerSelection}`;

        case playerSelection === 'scissors' && compSelection === 'paper':
            humanScore++;
            return `You Win! '${playerSelection}' beats '${compSelection}'`;
    }
}*/

function playRound(playerSelection, compSelection) {
    switch(true) {
        case playerSelection === compSelection:
            return `Tie! ${playerSelection} is equals with ${compSelection}`;

        case playerSelection === "rock" && compSelection === "paper":
        case playerSelection === 'paper' && compSelection === 'scissors':
        case playerSelection === 'scissors' && compSelection === 'rock':
            computerScore++;
            return `You Lose! ${compSelection} beats ${playerSelection}`;

        case playerSelection === "rock" && compSelection === "scissors":
        case playerSelection === 'paper' && compSelection === 'rock':
        case playerSelection === 'scissors' && compSelection === 'paper':
            humanScore++;
            return `You Win! ${playerSelection} beats ${compSelection}`;
    }
}

function playGames() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getHumanChoice(), getCompChoice()));
    }
    if (humanScore > computerScore) {
        console.log(humanScore+" : "+computerScore);
        return `Winner : Human`;
    } else if (computerScore > humanScore) {
        console.log(humanScore+" : "+computerScore);
        return `Winner : Computer`
    } else {
        console.log(humanScore+" : "+computerScore);
        return `Deuce!`;
    }
}

console.log(playGames());