"use strict";
const btnCheck = document.querySelector(".check");
const btnReset = document.querySelector(".reset");
const message = document.querySelector(".message");
let score = document.querySelector(".score");
const btnAgain = document.querySelector(".again");
let totalScore = document.querySelector(".totalscore");
let highScore = document.querySelector(".highscore");
let guess = Number(document.querySelector(".guess").value);

let number = Math.trunc(Math.random() * 20 + 1);
score = 20;
totalScore = 0;
highScore = 0;
//reset functionality
const resetGuess = function () {
  document.querySelector(".guess").value = "";
};
btnReset.addEventListener("click", resetGuess);
//
//message function
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
//
//set Color function
const setColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};
//
//check button
const checkNum = function () {
  guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("Insert a number!");
  } else {
    if (guess === number) {
      displayMessage("🎉 You Won!");
      setColor("#60b347");
      totalScore += score;
      document.querySelector(".totalscore").textContent = totalScore;
      document.querySelector(".number").textContent = number;
      document.querySelector(".number").style.width = "36rem";
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    } else if (guess !== number) {
      if (score > 1) {
        score--;
        document.querySelector(".score").textContent = score;
        guess > number
          ? displayMessage("Too high!")
          : displayMessage("Too low!");
      } else {
        displayMessage("Game Over!!!");
        document.querySelector(".score").textContent = 0;
        document.querySelector(".check").disabled = true;
        setColor("#c06c70");
        document.querySelector(".number").style.width = "36rem";
        document.querySelector(".number").textContent = number;
      }
    }
  }
};
btnCheck.addEventListener("click", checkNum);
console.log("secret number:" + number);
//

//again functionality
const playAgain = function () {
  number = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector(".score").textContent = 20;
  setColor("#222");
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").textContent = "";
  console.log("new secret number:" + number);
};
btnAgain.addEventListener("click", playAgain);
//
//2021-05-30
