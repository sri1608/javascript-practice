'use strict';

/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'correct Number! 🎊';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (value) {
  document.querySelector('.number').textContent = value;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔No Number!';
    displayMessage('⛔No Number!');
    //when the palyer wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'correct Number! 🎊';
    displayMessage('correct Number! 🎊');

    // document.querySelector('.number').textContent = secretNumber;
    displayNumber(secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '50rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      // guess > secretNumber ? 'Too high 📈' : 'Too low 📉';
      displayMessage(guess > secretNumber ? 'Too high 📈' : 'Too low 📉');
      score--;
      //   document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      //document.querySelector('.message').textContent = 'you lost the game 👎';
      displayMessage('you lost the game 👎');
      //   document.querySelector('.score').textContent = 0;
      displayScore(0);
    }
  }

  //guess is too high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high 📈';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'you lost the game 👎';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     //guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too low 📉';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'you lost the game 👎';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 29) + 1;

  //document.querySelector('.message').textContent = 'start guessing...';
  displayMessage('start guessing...');

  //   document.querySelector('.score').textContent = score;
  displayScore(score);

  //   document.querySelector('.number').textContent = '?';
  displayNumber('?');

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
