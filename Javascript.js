console.log("Hello World!");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = ""
    switch ((Math.floor(Math.random()*10))%3) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    };
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Human Choice?" , "Rock|Paper|Sissors" );
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    console.log("Computer Choice: " + computerChoice);
    console.log("Human Choice: " + humanChoice);
    if (computerChoice === humanChoice) {
        return "Tie";
    } 
    else if (
        (computerChoice === "rock" && humanChoice === "scissors")||
        (computerChoice === "paper" && humanChoice === "rock")||
        (computerChoice === "scissors" && humanChoice === "paper"))
    {
        computerScore ++;
        return "Human lose";
    }
    else {
        humanScore ++;
        return "Human win";
    }
}

function playGame(gametimes) {
    for (let i=1; i<gametimes+1; i++){
        console.log("\n Play round " + i);
        console.log(playRound(getHumanChoice(), getComputerChoice()) + " round "+ i);
    };
    console.log("\nHuman score: " + humanScore +" - "+ "Computer score: " + computerScore);
    console.log("Final result: " + (humanScore === computerScore ? "Tie!" : (humanScore < computerScore ? "Computer wins!" : "Human wins!")));
}

playGame(5);