var wins = 0;
var losses = 0;
var ties = 0;

var options = ["ROCK", "PAPER", "SCISSORS"];

function PlayGame() {

    var playerChoice = prompt("Enter 'Rock', 'Paper' or 'Scissors':");

    if (!playerChoice) {
        return;
    }


    playerChoice = playerChoice.toUpperCase();

    var Choice = Math.floor(Math.random() * options.length);

    var BotChoice = options[Choice];

    alert("The Bot chose " + BotChoice);

    if (playerChoice === BotChoice) {
    ties++
    alert("It's a tie!!👔");

    }

    else if (
    (playerChoice === "ROCK" && BotChoice === "SCISSORS") ||
    (playerChoice === "SCISSORS" && BotChoice === "PAPER") ||
    (playerChoice === "PAPER" && BotChoice === "ROCK")
    ) {
    wins++
    alert("You WIN!!!🎉")
    }

    else {
    losses++
    alert("You Lose!😞")
    }

    alert(
    "Stats:\nwins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
    );

    var replay = confirm("Play Again?");

    if (replay) {
    PlayGame();
    }
};

PlayGame();