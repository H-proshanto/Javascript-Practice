'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secrectNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setBackGroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const setHighScore = function (score) {
  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
};

const setNumberWidht = function (width) {
  document.querySelector('.number').style.width = width;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    displayMessage('🛑 No Number');
  } else if (guess === secrectNumber) {
    displayNumber(secrectNumber);
    displayMessage('🎉 Correct Number!');
    setBackGroundColor('#60b347');
    setNumberWidht('30rem');
    setHighScore(score);
  } else if (guess !== secrectNumber) {
    if (score > 1) {
      displayMessage(guess > secrectNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('😱 You lost the game!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secrectNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  setBackGroundColor('#222');
  setNumberWidht('15rem');
  displayNumber('?');
  displayScore(score);
  document.querySelector('.guess').value = '';
});
