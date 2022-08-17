let tasks = ['swim', 'study', 'eat'];
//Activity 1
const loopFunction1 = () => {
	for (i = 0; i < tasks.length; i++) {
		document.getElementById('loops1').innerHTML += `<li>${tasks[i]}</li>`;
	}
};
loopFunction1();
//Activity 2
let sum = 0;
const loopFunction2 = () => {
	for (i = 1; i <= 10; i++) {
		sum = sum + i;
		document.getElementById('loops2').innerHTML += `<li>${sum}</li>`;
		console.log(sum);
	}
};
loopFunction2();
