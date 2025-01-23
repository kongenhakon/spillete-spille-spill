let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    const resultMessage = document.getElementById('resultMessage');
    attempts++;

    if (guess === randomNumber) {
        resultMessage.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        resultMessage.style.color = 'green';
    } else if (guess > randomNumber) {
        resultMessage.textContent = 'Too high! Try again.';
        resultMessage.style.color = 'red';
    } else if (guess < randomNumber) {
        resultMessage.textContent = 'Too low! Try again.';
        resultMessage.style.color = 'red';
    } else {
        resultMessage.textContent = 'Invalid input. Please enter a number between 1 and 100.';
        resultMessage.style.color = 'red';
    }
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guessInput').value = '';
    document.getElementById('resultMessage').textContent = '';
}