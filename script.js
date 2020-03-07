//QUESTIONS
var questions = [
    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ["<SCRIPT>", "<BODY>", "<HEAD>", " <TITLE>"],
        answer: "<SCRIPT>"
    },
    {
        title: "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ["<SCRIPT>", "<BODY>", "<HEAD>", " <TITLE>"],
        answer: "<SCRIPT>"
    },
    {
        title: "JavaScript entities start with _______ and end with _________.",
        choices: ["Semicolon, colon", "Semicolon, Ampersand", "Ampersand, colon", "Ampersand, semicolon"],
        answer: "Ampersand, semicolon"
    },
    {
        title: "What is mean by the this keyword in Javascript?",
        choices: ["It refers current object", "It referes previous object", "It is variable which contains value", "None of the above"],
        answer: "It refers current object"
    },

];

//VARIABLES

var startBtn = document.getElementById("startBtn");
var submitBtn = document.querySelector("button.submitBtn")
//var secondsLeft = (questions.length * 12 + 1);
var timerEl = document.getElementById("timer");
var submitScoreEl = document.querySelector("#submit-score");
var userScoreEl = document.getElementById("user-score");
var questionHead = document.getElementById("questions");
// var answerChoices = document.getElementById("answers");

var answer;
var userNameInput;
var button = document.getElementById("start");



//First Click Event to launch game

startBtn.addEventListener("click", start);

function start() {
    console.log(questions)
    var question = questions.shift()
    var questionsDiv = document.createElement("div")
    questionsDiv.textContent = question.title;
    console.log(questionHead)
    questionHead.prepend(questionsDiv)
    var questionChoices = question.choices;
    var answerChoices = document.getElementById("answers");
    console.log(answerChoices)
    for (i = 0; i < questionChoices.length; i++) {
        var choiceButton = document.createElement("button")
        choiceButton.textContent = questionChoices[i]
        answerChoices.appendChild(choiceButton);
    }

    var count = 15;
    var interval = setInterval(function () {
        document.getElementById('timer').innerHTML = count;
        count--;
        if (count === 0) {
            clearInterval(interval);
            document.getElementById('timer').innerHTML = 'Done';
        }
    }, 1000);
};


//TIMER - click button start button, timer starts and first question pops up





//Finish screen with score calculation

//Enter initials for high score with submit option, 'go back' and 'clear high score' buttons


