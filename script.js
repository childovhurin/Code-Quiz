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



