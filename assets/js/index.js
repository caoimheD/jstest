/**
 * Add variables
 */
let buttons = document.getElementsByClassName("choice");
let playerScore = document.getElementById("user-score");
let computerScore = document.getElementById("comp-score");
let playerImage = document.getElementById("user-img");
let computerImage = document.getElementById("comp-img");
let messages = document.getElementById("messages");

/**
 * Add event listener to buttons
 */

for (let button of buttons) {
    button.addEventListener("click", function (){
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

/**
 * Game function. Accepts the data-choice value of the button the user clicks on.
 */

function playGame(playerChoice) {
    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 3);
    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);
    updateScores(result);
}

/**
 * checks who the winner is
 */