/** @format */

const startGameBtn = document.getElementById("start-game-btn");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
const DEFAULT_USER_CHOICE = ROCK;
let gameIsRunning = false;
const RESULT_DRAW = "DRAW";
const PLAYER_WON = "PLAYER WON";
const COMPUTER_WON = "COMPUTER WON";

const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSOR) ||
      (cChoice === SCISSOR && pChoice === ROCK)
    ? PLAYER_WON
    : COMPUTER_WON;

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSOR;
  }
};

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK},${PAPER},or ${SCISSOR}`, "").toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSOR) {
    alert(`invalid input we chose ${DEFAULT_USER_CHOICE} for you`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("game is starting");
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const winner = getWinner(computerSelection, playerSelection);
  let message = `you picked ${playerSelection} and computer chose ${computerSelection} therefor you `;

  if (winner === RESULT_DRAW) {
    message = message + "had a draw";
  } else if (winner === PLAYER_WON) {
    message = message + "won";
  } else {
    message = message + "lost";
  }
  alert(message);
  gameIsRunning = false;
});
//rest operator (passes value of arguments as bunch or array notation is three dots ...)
// const add = (...numbers) => {
//   let sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   }
//   return sum;
// };
// console.log(add(1, 2, 3));

// const subtract = (a, b, c) => {
//   //this function expects individual values such as a, b,c
//   const subtractionResult = a - b - c;
//   return { subtractionResult };
// };
// const myArray = [6, 1, 1]; //but when a bunch of data such as array or objects is passed in
// // argument it shows undefined .
// console.log(subtract(...myArray)); // the ...(three dots before  the array arguments works
// //as spread which spread the bunch of data into individual value )

// const multiply = (...numbers) => {
//   let number = 1;
//   for (const num of numbers) {
//     number *= num;
//   }
//   return number;
// };
// console.log(multiply(2, 3, 3));

// const division = (a, b) => {
//   const result = a / b;
//   return result;
// };
// const numbers = [9, 3];
// console.log(division(...numbers));

// // setTimeout(function () {
// //   console.log("time out");
// // }, 2500);

// const x = (y) => {
//   console.log("x");
//   y();
// };
// const y = () => {
//   console.log("y");
// };

// x(y);

// let name = {
//   firstname: "musab",
//   lastname: "chhagan",
// };

// let printname = function () {
//   console.log(this.firstname + " " + this.lastname);
// };

// let name2 = {
//   firstname: "maaz",
//   lastname: "rabbani",
// };
// printname.call(name);

// printname.call(name2);
