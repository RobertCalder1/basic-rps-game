var wins = 0;
var losses = 0;
var ties = 0;

var options = ["ROCK", "PAPER", "SCISSORS"];

var PlayGame = function() {

    var playerChoice = window.prompt("Enter 'Rock', 'Paper' or 'Scissors':");

    if (!playerChoice) {
        return;
    }


    playerChoice = playerChoice.toUpperCase();

    var Choice = Math.floor(Math.random() * options.length);

    var BotChoice = options[Choice];

    window.alert("The Bot chose " + BotChoice);

    if (playerChoice === BotChoice) {
    ties++
    window.alert("It's a tie!!👔");

    }

    else if (
    (playerChoice === "ROCK" && BotChoice === "SCISSORS") ||
    (playerChoice === "SCISSORS" && BotChoice === "PAPER") ||
    (playerChoice === "PAPER" && BotChoice === "ROCK")
    ) {
    wins++
    window.alert("You WIN!!!🎉")
    }

    else {
    losses++
    window.alert("You Lose!😞")
    }

    window.alert(
    "Stats:\nwins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
    );

    var replay = window.confirm("Play Again?");

    if (replay) {
    PlayGame();
    }
};

PlayGame();