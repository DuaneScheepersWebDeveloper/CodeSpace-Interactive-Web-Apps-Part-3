let tasks = [
	'swim',
	'study',
	'eat',
	'code',
	'train',
	'tea',
	'learn',
	'jog',
	'Boxing',
	'walk',
	'washing',
];
//Activity 1
const loopFunction1 = () => {
	for (i = 0; i < tasks.length; i++) {
		document.getElementById('loops1').innerHTML += `${tasks[i] + ' '}`;
		console.log(tasks[i] + ' ');
	}
};
loopFunction1();
//Activity 2
//Activity 3
let sum = 0;
const loopFunction2 = () => {
	for (i = 1; i <= 10; i++) {
		sum += tasks[i].length;
	}
	console.log(sum);
};
loopFunction2();
//Activity 4
const timesTable = [];
const loopFunction3 = () => {
	for (i = 1; i <= sum; i++) {
		timesTable.push(i * 15);
	}
	//Activity 5
	console.log(timesTable);
};
loopFunction3();

//Activity 6

const calculateAverageLoop = (timesTable) => {
	let total = 0;
	let count = 0;
	const averageCalculation = (item) => {
		total += item;

		count++;
	};
	timesTable.forEach(averageCalculation);
	console.log(total);
	console.log(count);
	return total / count;
};
console.log('Your Average is: ' + calculateAverageLoop(timesTable));
