// Define an array of words to guess from
const words = [
	'apple',
	'banana',
	'cherry',
	'dog',
	'elephant',
	'frog',
	'giraffe',
	'horse',
	'igloo',
	'jaguar',
	'kangaroo',
	'lion',
	'monkey',
	'nutmeg',
	'orange',
	'pineapple',
	'queen',
	'rhinoceros',
	'snake',
	'tiger',
	'umbrella',
	'vulture',
	'walrus',
	'xylophone',
	'yak',
	'zebra'
];

// Select a random word from the words array
let selectedWord = words[Math.floor(Math.random() * words.length)];

// Define a function to compare the user's guess to the selected word and display the results
function compareGuess(guess) {
	let result = '';
	for (let i = 0; i < 5; i++) {
		if (guess.charAt(i) === selectedWord.charAt(i)) {
			result += guess.charAt(i);
		} else if (selectedWord.includes(guess.charAt(i))) {
			result += charAt(i);
		} else {
			result += '-';
		}
	}
	return result;
}

// Add an event listener for the submit button
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', function() {
	const guessInput = document.getElementById('guess');
	const guess = guessInput.value.toLowerCase();
	
	if (guess.length !== 5) {
		alert('Please enter a 5-letter word.');
	} else if (!/^[a-z]+$/.test(guess)) {
		alert('Please enter only letters.');
	} else {
		const result = compareGuess(guess);
		if (result === selectedWord) {
			document.getElementById('result').innerHTML = 'You win!';
			submitButton.disabled = true;
		} else {
			document.getElementById('result').innerHTML += '<br>' + result;
			guessInput.value = '';
			guessInput.focus();
		}
	}
});


