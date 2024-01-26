// when start button pressed, timer should start

// create multiple convenience variables
var startButton = document.querySelector("#startbtn")
var timerEl = document.querySelector("#time")
var startScreen = document.querySelector("#start-screen")
// 	create variable secsleft that starts at 60
var timeleft = 0
var questionScreen = document.querySelector("#questions")

// create function that changes text of "time", count --, every 1000
function startTimer() {
    var timeLeft = 60
    var ticking = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft;
        // Spaceholder for if function that checks if answer is correct; if not, deduct 10 seconds from timeLeft
        if(timeLeft === 0 || timeLeft < 0) {
        clearInterval(ticking);
        //   function that ends quiz and brings up highscore section to input name
        }
},1000)
};

function transitionToquestionScreen(){
startScreen.setAttribute("class", "hide")
questionScreen.setAttribute("class","show")
};

function startQuiz () {
startTimer()
transitionToquestionScreen()
};

// id = start (create event listener)
startButton.addEventListener("click",startQuiz);





var qContainer = document.querySelector("#questions");
var qTitle = document.querySelector("#question-title");
var choiceEl = document.querySelector("#choices");
var questionNum = 0;

var array = [questionOne,questionTwo,questionThree,questionFour,questionFive]
selectedQuestion = array[questionNum];

qTitle.textContent = selectedQuestion.title
for (let i = 0; i < selectedQuestion.choices.length; i++) {
  var choice = selectedQuestion.choices[i];
  var button = document.createElement("button")
  button.textContent = choice
  choiceEl.appendChild(button);
}
var buttonEl = document.querySelector("button")


function nextQuestion(event) {
    questionNum++
    selectedQuestion = array[questionNum];
  qTitle.textContent = ""
  qTitle.textContent = selectedQuestion.title;
    choiceEl.textContent = ""
  for (let i = 0; i < selectedQuestion.choices.length; i++) {
    var choice = selectedQuestion.choices[i];
    var li = document.createElement("button")
    li.textContent = choice
    choiceEl.appendChild(li);
}
if (questionNum === 4) {
    
}
}



choiceEl.addEventListener("click", nextQuestion);

