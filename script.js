"use strict";

let playerScore = 0;
let computerScore = 0;
const scorePlayer = document.getElementById("playerScore");
const scoreComputer = document.getElementById("computerScore");
const result = document.getElementById("result");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const again = document.getElementById("again");

function getComputerChoice() {
  const rps = ["rock", "paper", "scissors"];
  const random = rps[(Math.random() * rps.length) | 0];
  return random;
}

function convertResult(word) {
  if (word === "rock") return "Rock";
  if (word === "paper") return "Paper";
  return "Scissors";
}

function win(player, computer) {
  playerScore++;
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("result").textContent = `${convertResult(
    player
  )} beats ${convertResult(computer)}! You win!`;
  document.getElementById(player).classList.add("green");
  setTimeout(function () {
    document.getElementById(player).classList.remove("green");
  }, 400);

  if (playerScore >= 5) {
    // document.getElementById("result")
    result.style.fontSize = "x-large";
    document.getElementById("result").textContent = `Player Wins The Match! 🥳`;
    document.querySelector("body").style.backgroundColor = "#28b487";
  }

  //   console.log("win");
}

function lose(player, computer) {
  computerScore++;
  document.getElementById("computerScore").textContent = computerScore;
  document.getElementById("result").textContent = `${convertResult(
    computer
  )} beats ${convertResult(player)}! You lose...`;
  document.getElementById(player).classList.add("red");
  setTimeout(function () {
    document.getElementById(player).classList.remove("red");
  }, 400);

  if (computerScore >= 5) {
    // document.getElementById("result")
    result.style.fontSize = "x-large";
    document.getElementById(
      "result"
    ).textContent = `Computer Wins The Match! ☠️`;
    document.querySelector("body").style.backgroundColor = "#800000";
  }
  //   console.log("lose");
}

function tie() {
  document.getElementById("result").textContent = `It's a tie!`;
  //   console.log("tie");
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();

  if (playerChoice === computerChoice) {
    tie();
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    win(playerChoice, computerChoice);
    // console.log("winner: player");
  } else if (
    (computerChoice === "rock" && playerChoice === "scissors") ||
    (computerChoice === "scissors" && playerChoice === "paper") ||
    (computerChoice === "paper" && playerChoice === "rock")
  ) {
    lose(playerChoice, computerChoice);
    // console.log("winner: computer");
  }
  //   console.log("computerchoice:" + computerChoice);
}

function main() {
  rock.addEventListener("click", function () {
    playRound("rock");
  });

  paper.addEventListener("click", function () {
    playRound("paper");
  });

  scissors.addEventListener("click", function () {
    playRound("scissors");
  });
}
main();

document.getElementById("again").addEventListener("click", function () {
  window.location.reload();
  //   return false;
});
