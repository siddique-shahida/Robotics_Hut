//Creating our Quiz Button...
const quizButton = document.querySelector('#begin-quiz');

//Creating an array of JSON Objects with our questions and answers...
var myQuestions = [
	{
		question: "What is a Microprocessor?",
		answers: {
			a: 'A brain of a computer',
			b: 'A supercomputer',
			c: 'Just a fancy name for a mouse'
		},
		correctAnswer: 'a'
	},
	{
		question: "Who invented the Light Bulb?",
		answers: {
			a: 'Thomas Edison',
			b: 'Michael Jackson',
			c: 'Nikola Tesla'
		},
		correctAnswer: 'a'
	},
	{
		question: "Which language can help in developing robots?",
		answers: {
			a: 'JavaScript',
			b: 'Python',
			c: 'Both of the above'
		},
		correctAnswer: 'b'
	}
];



//Functions involved in our Quiz...


let createResults = () => {
	console.log("Generating quiz results...");

	// Initializng variables for finding the correct answers...
	var answerContainers = document.querySelectorAll('.answer');
	var userAnswer = '';
	var correctAnswers = 0;

	for (var i = 0; i < myQuestions.length; i++) {
		//Extracting the user's answer...
		userAnswer = (answerContainers[i].querySelector('input[name=question' + (i+1) + ']:checked') || {}).value;

		//Checking for the correct answers...
		if (userAnswer === myQuestions[i].correctAnswer) {
			correctAnswers++;
			answerContainers[i].style.border = '2px solid lightgreen';
		} else {
			answerContainers[i].style.border = '2px solid red';
		}
	}

	let result = 'You got ' + correctAnswers + ' questions right out of ' + myQuestions.length + "! Keep exploring!";
	console.log(result);

	//Send the message to the backend...
	alert(result);
}

let createQuestionCards = () => {
	questioncard = [];
	var MCQs;

	//Creating our Quiz Heading...
	questioncard.push('<br /><hr /><div class="my-5"><h2>Answer the following questions...</h2></div>');

	//For each question...
	for (var i = 0; i < myQuestions.length; i++) {
		MCQs = [];
		//For each Answers...
		for (letter in myQuestions[0].answers) {
			MCQs.push('<input type="radio" name="question' + (i + 1) + '" value="' + letter + '">' + '<label>' + myQuestions[i].answers[letter] + '</label><br/>');
		}

	//Creating our question card...
	questioncard.push('<div class="questions">' +
		'<p class= "mb-2"> Question ' + (i + 1) + ': ' + myQuestions[i].question + '</p>' +
		'<div class="form-check answer">' +
		MCQs + '</div></div>' + '<br>'
	);
}

	//Finally adding our Submit Button...
	questioncard.push('<br /><br />' + '<div><div class= "row">' +
		'<div class="col-sm-12 col-md-4 col-lg-4"></div>' +
		'<div class="col-sm-12 col-md-4 col-lg-4">' + '<div class="d-grid gap-2">' +
		'<button class="btn btn-dark" id="submit-quiz">Submit Quiz</button>' +
		'</div></div></div></div>' + '<div class="col-sm-12 col-md-4 col-lg-4"></div>');

	//let quiz = "append";
	$("#quiz-generate").append(questioncard);

	//Now creating an event Listener for our Submit Button...
	let submitButton = document.querySelector('#submit-quiz');
	submitButton.addEventListener("click", createResults, false);
}

//Checking our results for the Quiz...


function generateQuiz(event) {
	event.preventDefault();
	createQuestionCards();
}

quizButton.addEventListener("click", generateQuiz, false);