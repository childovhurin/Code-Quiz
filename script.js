//Variables
var timerEl = document.querySelector("#timer");
var timerDiv = document.querySelector(".timer-div");
var secondsLeft = 100;
var quizBeginEl = document.querySelector("#quiz-begin");
var quizEl = document.querySelector("#quiz");
var scoreSpan = document.querySelector("#score-span");
var highScoreEl = document.querySelector(".high-score");

quizBeginEl.innerHTML = "<h4>Click Here to Begin</h4>";

//Timer function
var timer;

function countDown() {

    if (secondsLeft < 1) {
        timerDiv.textContent = "Time's Up!";
        clearInterval(timer);
        endOfQuiz();
    } else {
        timerEl.textContent = secondsLeft;
        secondsLeft--;
    }
}

//Click event to start quiz
quizBeginEl.addEventListener("click", function () {
    quizBeginEl.textContent = "";
    timer = setInterval(countDown, 1000);
    countDown();
    questionCreator(firstQuestion, makeFirstChoice);
  
})

//Changing questions into their own variables instead of arrays

var firstQuestion = {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
        {
            choice: "<js>",
            correct: false
        },
        {
            choice: "<script>",
            correct: true
        },
        {
            choice: "<javascript>",
            correct: false
        },
        {
            choice: "<scripting>",
            correct: false
        }
    ]
}

var secondQuestion = {
    question: "Where is the correct place to insert a JavaScript?",
    answers: [
        {
            choice: "The <body> section",
            correct: false
        },
        {
            choice: "The <head> section",
            correct: true
        },
        {
            choice: "The <javascript> section",
            correct: false
        }
    ]
}

var thirdQuestion = {
    question: "What is the name of a function that is built into an object?",
    answers: [
        {
            choice: "variable",
            correct: false
        },
        {
            choice: "string",
            correct: false
        },
        {
            choice: "this",
            correct: false
        },
        {
            choice: "method",
            correct: true
        }
    ]
}

var fourthQuestion = {
    question: "How can you add a comment in a JavaScript?",
    answers: [
        {
            choice: "'This is a comment'",
            correct: false
        },
        {
            choice: "<!--This is a comment--!>",
            correct: true
        },
        {
            choice: "//This is a comment",
            correct: false
        }
    ]
}
var fifthQuestion = {
    question: "What is the correct way to write a JavaScript array?",
    answers: [
        {
            choice: "var colors = 'red', 'green', 'blue'",
            correct: false
        },
        {
            choice: "var colors = [red, green, blue]",
            correct: true
        },
        {
            choice: "var colors = (red, green, blue)",
            correct: false
        },
        {
            choice: "var colors = 1 = red, green, blue",
            correct: false
        }
    ]
}

