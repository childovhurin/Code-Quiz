//VARIABLES
var timer = document.getElementById("timer");
var startButton = document.getElementById("start-quiz");
var welcomeContainer = document.getElementById("welcome-container");
var questionContainer = document.getElementById("question-container");
var quizQuestion = document.getElementById("quiz-question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var correctIncorrect = document.getElementById("correct-incorrect");
var allDone = document.getElementById("all-done-container");
var highscoresContainer = document.getElementById("highscores-container");
var finalScoreP = document.getElementById("final-score-p");
var viewHighscores = document.getElementById("view-highscores");
var submitHighscore = document.getElementById("submit-highscore");
var goBack = document.getElementById("go-back");
var clearHighscores = document.getElementById("clear-highscores");
var highscoresList = document.getElementById("highscores-list");
var initials = document.getElementById("initials");

// HIDE CONTAINERS
questionContainer.style.display = "none";
correctIncorrect.style.display = "none";
allDone.style.display = "none";
highscoresContainer.style.display = "none";

// QUESTIONS
var myQuestions = [
    { 
      question: "The three fundamental programming languages of the modern web are: HTML, CSS, and _________.",
      option: [
        "Dothraki",
        "Hebrew",
        "JavaScript",
        "HTML"
      ],
      answer: "opt3"
    },

    {
      question: "Variables are the _______ of programming.",
      option: [
        "verbs",
        "icebergs",
        "whales",
        "nouns"
      ],
      answer: "opt4"
    },

    { 
      question: "Which identifier will surround a string in JavaScript?",
      option: [
        "bulbs",
        "lampshades",
        "quotation marks",
        "parentheses"
      ],
      a: "opt3"
    },

    { 
      question: "Where will the \"console.log()\" method display data?",
      option: [
        "in the garden",
        "in the browser",
        "in the console",
        "in the toolbar"
      ],
      answer: "opt3"
    },

    { 
      question: "When an alert is executed it will popup in the _____",
      option: [
        "console",
        "browser",
        "dictionary",
        "atmosphere"
      ],
      answer: "opt2"
    },
];

// VARIABLES
var userScore;
var timeLeft;
var i;

// START QUIZ
var beginQuiz = function(event) {
  userScore = 0;
  timeLeft = 120;
  i = 0;
  var timeInterval = setInterval(function() {
    timer.textContent = "Timer: " + timeLeft;
    timeLeft--;
  
    if (timeLeft <= 0) {
      timer.textContent = "Timer: ";
      clearInterval(timeInterval);
      endGame();
    }
    if (i >= myQuestions.length - 1) {
      timer.textContent = "Timer: ";
      clearInterval(timeInterval);
    }
  }, 1000);
  beginQuestions();
};

// HIDE FUNCTION
var beginQuestions = function() {
  event.preventDefault;
  welcomeContainer.style.display = "none";
  allDone.style.display = "none";
  highscoresContainer.style.display = "none";
  questionContainer.style.display = "block";

  quizQuestion.textContent = myQuestions[i]["question"];

  opt1.textContent = myQuestions[i]["option"][0];
  opt2.textContent = myQuestions[i]["option"][1];
  opt3.textContent = myQuestions[i]["option"][2];
  opt4.textContent = myQuestions[i]["option"][3];

  if (i >= myQuestions.length - 1) {
    endGame();
  }
}

// ANSWER CHECK
var checkAnswer = function(event) {
  var userGuess = event.target.id;
  if (userGuess === myQuestions[i]["a"]) {
    userScore++;
    correctIncorrect.style.display = "block";
    correctIncorrect.textContent = "Correct! You've earned a point!";
  } else {
    timeLeft -= 10;
    correctIncorrect.style.display = "block";
    correctIncorrect.textContent = "Incorrect! You've lost 10 seconds!";
  }
    i++;
    beginQuestions();
}

// END GAME FUNCTION
var endGame = function() {
  questionContainer.style.display = "none";
  highscoresContainer.style.display = "none";
  welcomeContainer.style.display = "none";
  allDone.style.display = "block";
  finalScoreP.textContent = "Your final score is: " + userScore;
}

// HIGHSCORE
var userHighscores = [];

var addHighscore = function(event) {
  questionContainer.style.display = "none";
  allDone.style.display = "none";
  welcomeContainer.style.display = "none";
  highscoresContainer.style.display = "block";

  highscoresList.innerHTML = "";
  for (var j = 0; j < userHighscores.length; j++) {
    var userHighscore = userHighscores[j];

    var li = document.createElement("li");
    li.textContent = userHighscore;
    li.setAttribute("data-index", j);
    highscoresList.appendChild(li);
  }
}

// LOCAL STORGE HIGH SCORES
var getHighscores = function() {
  var loggedHighscores = JSON.parse(localStorage.getItem("userHighscores"));
  if (userHighscores !== null) {
    userHighscores = loggedHighscores;
  }
  addHighscore();
}

var storeHighscore = function() {
  localStorage.setItem("userHighscores", JSON.stringify(userHighscores));
}

submitHighscore.addEventListener("click", function(event) {
  event.preventDefault();
  var userInitialsScore = initials.value + " - " + userScore;
  if (userInitialsScore === "") {
    return;
  }

  userHighscores.push(userInitialsScore);
  initials.value = "";
  storeHighscore();
  getHighscores();
});

// CLEAR HIGH SCORE
var clearScores = function(event) {
  localStorage.clear();
  userHighscores = [];
  console.log(userHighscores)
  highscoresList.textContent = "";
  console.log(localStorage);
  checkHighscore();
}

// START OVER FUNCTION
var startOver = function(event) {
  questionContainer.style.display = "none";
  allDone.style.display = "none";
  highscoresContainer.style.display = "none";
  correctIncorrect.style.display = "none";
  welcomeContainer.style.display = "block";
}

// CHECK HIGH SCORES
var checkHighscore = function(event) {
  questionContainer.style.display = "none";
  allDone.style.display = "none";
  welcomeContainer.style.display = "none";
  highscoresContainer.style.display = "block";
}

// EVENT LISTENERS
startButton.addEventListener("click", beginQuiz);
opt1.addEventListener("click", checkAnswer);
opt2.addEventListener("click", checkAnswer);
opt3.addEventListener("click", checkAnswer);
opt4.addEventListener("click", checkAnswer);
goBack.addEventListener("click", startOver);
viewHighscores.addEventListener("click", checkHighscore);
clearHighscores.addEventListener("click", clearScores);