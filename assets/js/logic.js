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
console.log(questionNum);
};

// id = start (create event listener)
startButton.addEventListener("click",startQuiz);





var qContainer = document.querySelector("#questions");
var qTitle = document.querySelector("#question-title");
var choiceEl = document.querySelector("#choices");
var questionNum = 0;
var buttonEl = document.querySelector("button")


var array = [questionOne,questionTwo,questionThree,questionFour,questionFive]
selectedQuestion = array[questionNum];

qTitle.textContent = selectedQuestion.title
for (let i = 0; i < selectedQuestion.choices.length; i++) {
  var choice = selectedQuestion.choices[i];
  var button = document.createElement("button")
  button.textContent = choice
  choiceEl.appendChild(button);
}


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
}

function lastQuestion(event) {
  qTitle.textContent = ""
  choiceEl.innerHTML = ""
}

choiceEl.addEventListener("click", function(event) {
  var element = event.target;
  if (element.matches("button")===true && questionNum < 4){
    nextQuestion()
  } else {
    lastQuestion()
  }
});


// in a separate function, fetch question number. for q1, if event.target is not textcontent = "answer", deduct 10 secs from counter