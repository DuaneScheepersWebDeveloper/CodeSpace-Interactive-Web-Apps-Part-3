//It is your challenge to destructure the data which is in
//the form of a single object, then restructure the data into
//several individual objects each representing a single task datum.
const serverData = {
	title1: 'Quiet Time',
	title2: 'Study',
	title3: 'Go Jogging',
	title4: 'Eat Breakfast',
	description1: '',
	description2: '',
	description3:
		'This is going to help to reach my goals and my life to the fullest',
	description4: '',
	date1: '05/02/2020',
	date2: '01/02/2020',
	date3: 'tomorrow',
	date4: 'today',
	time1: '08:12',
	time2: '13:15',
	time3: '12:36',
	time4: '13:25',
	completed1: false,
	completed2: true,
	completed3: false,
	completed4: true,
	priority1: 'red',
	priority2: 'yellow',
	priority3: 'black',
	priority4: 'white',
	tags1: ['Personal', 'Work', 'School'],
	tags2: ['Personal', 'School', 'Diary Entry'],
	tags3: ['Content Creation', 'Personal'],
	tags4: ['Personal'],
};
//need to turn the single object into individual objects
//title
const getTitle = () => {
	const { title1 } = serverData;
	const { title2 } = serverData;
	const { title3 } = serverData;
	const { title4 } = serverData;
	const title = [];
	title.push(title1, title2, title3, title4);
	titleObj = Object.assign({}, title);
	console.log(titleObj);
};
getTitle();

//description
const getDescription = () => {
	const { description1 } = serverData;
	const { description2 } = serverData;
	const { description3 } = serverData;
	const { description4 } = serverData;
	const descriptions = [];
	descriptions.push(description1, description2, description3, description4);
	descriptionsObj = Object.assign({}, descriptions);
	console.log(descriptionsObj);
};
getDescription();

//date
const getDate = () => {
	const { date1 } = serverData;
	const { date2 } = serverData;
	const { date3 } = serverData;
	const { date4 } = serverData;
	const dates = [];
	dates.push(date1, date2, date3, date4);
	datesObj = Object.assign({}, dates);
	console.log(datesObj);
};
getDate();

//time
const getTime = () => {
	const { time1 } = serverData;
	const { time2 } = serverData;
	const { time3 } = serverData;
	const { time4 } = serverData;
	const times = [];
	times.push(time1, time2, time3, time4);
	timesObj = Object.assign({}, times);
	console.log(timesObj);
};
getTime();

//completed
const getCompleted = () => {
	const { completed1 } = serverData;
	const { completed2 } = serverData;
	const { completed3 } = serverData;
	const { completed4 } = serverData;
	const complete = [];
	complete.push(completed1, completed2, completed3, completed4);
	completeObj = Object.assign({}, complete);
	console.log(completeObj);
};
getCompleted();

//priorities
const getPriorities = () => {
	const { priority1 } = serverData;
	const { priority2 } = serverData;
	const { priority3 } = serverData;
	const { priority4 } = serverData;
	const priorities = [];
	priorities.push(priority1, priority2, priority3, priority4);
	prioritiesObj = Object.assign({}, priorities);
	console.log(prioritiesObj);
};
getPriorities();

//Tags
const getTags = () => {
	const { tags1 } = serverData;
	const { tags2 } = serverData;
	const { tags3 } = serverData;
	const { tags4 } = serverData;
	const tags = [];
	tags.push(tags1, tags2, tags3, tags4);
	tagsObj = Object.assign({}, tags);
	console.log(tagsObj);
};
getTags();

const printDetails = (arguments) => {
	console.log(arguments);
};
printDetails(serverData);
