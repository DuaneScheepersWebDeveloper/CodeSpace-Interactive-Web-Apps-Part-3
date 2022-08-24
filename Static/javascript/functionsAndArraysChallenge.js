tasks = [
	'swim',
	'eat',
	'study',
	'read',
	'sleep',
	'awake',
	'breakfast',
	'party',
	'relax',
	'exercise',
];

tasksCompleted = [true, false, true, true, false];
//----------------------------------------------------------------------------
//Activity 1 - Edit the tasksCompleted array by programmatically doing the following:
//1) Remove the first completed task
const removeTheFirstTask = () => {
	const firstTaskRemove = tasksCompleted.shift();
	console.log(tasksCompleted);
	console.log(firstTaskRemove);
	// document.getElementById('demo').innerHTML = fruits;
};
removeTheFirstTask();
//2) Add a new completed task of false at beginning of the array
const addCompletedTaskAtBeginning = () => {
	const secondTaskAdd = tasksCompleted.unshift(false);
	console.log(tasksCompleted);
	console.log(secondTaskAdd);
};
addCompletedTaskAtBeginning();
//3) Add a new completed task of true at the end of the array
const addCompletedTaskAtEnd = () => {
	const thirdTaskAdd = tasksCompleted.push(true);
	console.log(tasksCompleted);
	console.log(thirdTaskAdd);
};
addCompletedTaskAtEnd();
//4) Add two more completed tasks with a boolean value of your choice, to the end of the array
const addCompletedTwoTaskAtEnd = () => {
	const fourthTaskAdd = tasksCompleted.push(true, false);
	console.log(tasksCompleted);
	console.log(fourthTaskAdd);
};
addCompletedTwoTaskAtEnd();
// expected result[false, false, true, true, false, true, true, false];
//----------------------------------------------------------------------------
//Activity 2 - Complete this function.
//Create a for loop that can loop through an array and print out all the array items in the console.
const displayArray = (arguments) => {
	for (i = 0; i < arguments.length; i++) {
		console.log(arguments[i]);
		document.getElementById('functionsAndArrayChallenge').innerHTML += `<li>${
			arguments[i] + ' '
		}</li>`;
	}
};
//----------------------------------------------------------------------------
//Activity 3 - Print the tasks array to the console by using the function you created in Activity 2
displayArray(tasks);

//----------------------------------------------------------------------------
//Activity 4 - Complete this function.
//The purpose of this function is to calculate the sum of all the values in an array.
//Create a variable inside this function called total and set it equal to 0.
//Create a for loop that calculates the sum of all the values in an array store the answer in the total variable.
//Outside the for loop, console log the total.
const calculateTotal = (arguments) => {
	let totalTasks = '';
	for (i = 0; i <= arguments.length - 1; i++) {
		totalTasks += arguments[i] + ', ';
	}
	document.getElementById(
		'functionsAndArrayChallenge2'
	).innerHTML += `<p>${totalTasks}</p>`;
	console.log(totalTasks);
};
//----------------------------------------------------------------------------
//Activity 5 - Call the calculateTotal function and pass tasksCompleted as an argument.
calculateTotal(tasks);
//----------------------------------------------------------------------------
//Activity 6 - Complete this function
//The purpose of this function is to calculate the average of the values put together in an array
//Create a variable inside this function called total and set it equal to 0
//Create a for loop that calculates the sum of all the values in an array, store the answer in the total variable
//Outside the for loop, create a variable called average and store your calculations of the average in that variable
const averageVariable = [];
const calculateAvr = (arguments) => {
	let averageTotal = arguments.length;
	// let initialCount = Array.from(arguments);
	let initialCount = '';
	for (i = 0; i <= arguments.length - 1; i++) {
		initialCount = arguments[i];
	}

	const averageCal = (item) => {
		averageTotal += item;
		initialCount++;
	};
	averageVariable.forEach(averageCal);
	console.log(averageTotal);
	console.log(initialCount);

	return console.log(averageTotal / Math.random());
};
calculateAvr(tasks);
