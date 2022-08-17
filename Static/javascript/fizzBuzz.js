const fizzBuzzChallenge = document.getElementById('fizzBuzzChallenge');
var output = [];

const fizzBuzz = () => {
	const fizzBuzzList = document.getElementById('fizzBuzz');
	for (count = 1; count < 101; count++) {
		if (count % 3 === 0 && count % 5 === 0) {
			output.push('FizzBuzz');
		} else if (count % 3 === 0) {
			output.push('Fizz');
		} else if (count % 5 === 0) {
			output.push('Buzz');
		} else {
			output.push(count);
		}
	}
	fizzBuzzList.innerHTML += `<p>${output}</p>`;
	console.log(output);
};
fizzBuzz();
