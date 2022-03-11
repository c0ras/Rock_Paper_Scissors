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

const rps = ["rock", "paper", "scissors"];

function getComputerChoice() {
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

  //   console.log("win");
}

function lose(player, computer) {
  computerScore++;
  document.getElementById("computerScore").textContent = computerScore;
  document.getElementById("result").textContent = `${convertResult(
    computer
  )} beats ${convertResult(player)}! You lose!`;
  //   console.log("lose");
}

function tie(player, computer) {
  document.getElementById("result").textContent = `It's a tie!`;
  console.log("tie");
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();

  if (playerChoice === computerChoice) {
    tie(playerChoice, computerChoice);
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

again.addEventListener("click", function () {});
