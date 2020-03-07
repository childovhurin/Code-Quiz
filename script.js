//VARIABLES

var startBtn = document.getElementById("startBtn");
var submitBtn = document.querySelector("button.submitBtn")
var secondsLeft = (questions.length * 12 + 1);
var timerEl = document.getElementById("timer");
var submitScoreEl = document.querySelector("#submit-score");
var userScoreEl = document.getElementById("user-score");
var questionHead = document.getElementById("questions");
var answerChoices = document.getElementById("answers");

var answer;
var userNameInput;
var button = document.getElementById("start");
  

//First Click Event to launch game

button.addEventListener("click", start);
   console.log("clicked");

function start() {
    document.getElementById("empty").value = quiz;
        console.log("startquiz");
}

//TIMER


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
        title: "What is the correct JavaScript syntax to write "Hello World"?",
        choices: ["System.out.println("Hello World")", "println ("Hello World")", "document.write("Hello World")", "response.write("Hello World")"],
        answer: "document.write("Hello World")"
    },
    {
        title: "JavaScript entities start with _______ and end with _________.",
        choices: ["Semicolon, colon", "Semicolon, Ampersand", "Ampersand, colon", "Ampersand, semicolon"],
        answer: "Ampersand, semicolon"
    },
    {
        title: "What is mean by "this" keyword in javascript?",
        choices: ["It refers current object", "It referes previous object", "It is variable which contains value", "None of the above"],
        answer: "It refers current object"
    },

];


//Finish screen with score calculation

//Enter initials for high score with submit option, 'go back' and 'clear high score' buttons


