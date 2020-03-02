//Variables and arrays
var quiz = [
[1, "question1", "option1", "option2", "option3", "option4"],
[2, "question2", "option1", "option2", "option3", "option4"],
[3, "question3", "option1", "option2", "option3", "option4"],
[4, "question4", "option1", "option2", "option3", "option4"],
[5, "question5", "option1", "option2", "option3", "option4"]
];

var answer;
var response;
var button = document.getElementById("start");

//First Click Event to launch game

button.addEventListener("click", start);
   console.log("clicked");

function start() {
    document.getElementById("empty").value = quiz;
        console.log("startquiz");
}


//Finish screen with score calculation

//Enter initials for high score with submit option, 'go back' and 'clear high score' buttons


