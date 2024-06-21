// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber); // For testing purposes

let attempts = 0; // Variable to count the number of attempts

function checkGuess() {
    // Get user's guess from input
    const guess = parseInt(document.getElementById('guess').value);

    // Validate the input
    if (isNaN(guess) || guess < 1 || guess > 100) {
        setMessage('Please enter a valid number between 1 and 100.', 'red');
        return;
    }

    // Increment the number of attempts
    attempts++;

    // Check if the guess is correct, too high, or too low
    if (guess === randomNumber) {
        const message = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        setMessage(message, 'green');
        disableInputAndButton();
    } else if (guess < randomNumber) {
        setMessage(`Too low. Try again.`, 'blue');
    } else {
        setMessage(`Too high. Try again.`, 'blue');
    }

    // Clear the input for the next guess
    document.getElementById('guess').value = '';
}

function setMessage(message, color) {
    document.getElementById('message').textContent = message;
    document.getElementById('message').style.color = color;
}

function disableInputAndButton() {
    document.getElementById('guess').disabled = true;
    document.querySelector('button').disabled = true;
}
