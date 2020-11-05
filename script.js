'use strict';

let randomNumber = () => Math.floor(Math.random() * 20) + 1;

let secretNumber = randomNumber();
let score = 20;
let highscore = document.querySelector('.highscore').textContent;

const displayMessage = (msg) => (document.querySelector('.message').textContent = msg);
const displayScore = (msg) => (document.querySelector('.score').textContent = msg);

const changeScore = function (msg) {
	if (score > 1) {
		displayMessage(msg);
		score--;
		displayScore(score);
	} else {
		displayMessage('💥 You lost the game!');
		displayScore(0);
	}
};

document.querySelector('.check').addEventListener('click', function () {
	let guess = document.querySelector('.guess').value;
	//When no input
	if (!guess) {
		displayMessage('⛔ No number entered');
		//When the number is out of range 1-20
	} else if (guess < 1 || guess > 20) {
		guess = Number(guess);
		displayMessage('🎡 The number is out of range');
		//When the number is correct
	} else if (Number(guess) === secretNumber) {
		displayMessage('🎉 Congrats! You win!!!');
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';
		document.querySelector('.number').textContent = secretNumber;
		if (score > highscore) {
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}
	}

	//When the number is different
	else if (Number(guess) !== secretNumber) {
		Number(guess) > secretNumber
			? changeScore('📈 The number is too High...')
			: changeScore('📉 The number is too Low...');
	}
});

document.querySelector('.again').addEventListener('click', function () {
	secretNumber = randomNumber();
	score = 20;
	displayScore(score);
	document.querySelector('.number').textContent = '?';
	document.querySelector('.number').style.width = '15rem';
	document.querySelector('.guess').value = '';
	displayMessage('Start guessing...');
	document.querySelector('body').style.backgroundColor = '#222222';
});
