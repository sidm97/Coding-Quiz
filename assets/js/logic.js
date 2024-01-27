// Start screen convenience variables
var startButton = document.querySelector("#startbtn")
var timerEl = document.querySelector("#time")
var startScreen = document.querySelector("#start-screen")
var questionScreen = document.querySelector("#questions")


// Question screen convenience variables
var qContainer = document.querySelector("#questions");
var qTitle = document.querySelector("#question-title");
var choiceEl = document.querySelector("#choices");
var buttonEl = document.querySelector("button");
// Variable to measure question number to allow transition to next question and to end quiz after 5 questions
var questionNum = 0;
// Variable that fetches questions from separate js
var array = [questionOne,questionTwo,questionThree,questionFour,questionFive];
selectedQuestion = array[questionNum];
// Timer variable
let timeLeft = 0;
let ticking = null;

// End screen variables
var endScreen = document.querySelector("#end-screen");
var finalScoreel = document.querySelector("#final-score");
var initialsEl = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
// Start screen functions; one for the timer and one to manage the transition into questions (which also populates the first question)

function startTimer() {
  timeLeft = 60
  let ticking = setInterval(function() {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if(timeLeft === 0 || timeLeft < 0) {
      clearInterval(ticking);
      timerEl.textContent = 0
      //   function that ends quiz and brings up highscore section to input name
    }
  },1000)
};

function transitionToquestionScreen(){
  startScreen.setAttribute("class", "hide")
  questionScreen.setAttribute("class","show")
  qTitle.textContent = selectedQuestion.title
  for (let i = 0; i < selectedQuestion.choices.length; i++) {
    var choice = selectedQuestion.choices[i];
    var button = document.createElement("button")
    button.textContent = choice
    choiceEl.appendChild(button);
  }
};


// Question screen functions; to manage transitions to each question and to end questions after Q5 and join up to end screen
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
let score = timeLeft
qTitle.textContent = "";
choiceEl.innerHTML = "";
questionScreen.setAttribute("class","hide");
endScreen.setAttribute("class", "show");
timeLeft = 0
clearInterval(ticking);
timerEl.textContent = 0
finalScoreel.textContent = score;
}


// Final function for quiz as a whole
function startQuiz () {
startTimer()
transitionToquestionScreen()
};


// Event listeners
startButton.addEventListener("click",startQuiz);



choiceEl.addEventListener("click",function(event) {
  var elementTwo = event.target;
  if(elementTwo.matches("button")===true){
    if (elementTwo.textContent === "Alerts") {
      console.log("correct");
    } else     if (elementTwo.textContent === "<js>") {
      console.log("correct");
    } else 
    if (elementTwo.textContent === "The <body> section") {
      console.log("correct");
    } else 
    if (elementTwo.textContent === "alert('Hello World!)") {
      console.log("correct");
    } else 
    if (elementTwo.textContent === "for(i = 0; i <= 5; i++)") {
      console.log("correct");
    } else {
      console.log("incorrect");
      timeLeft -= 10;
    }
  }
});


choiceEl.addEventListener("click", function(event) {
  var element = event.target;
  if (element.matches("button")===true && questionNum < 4){
    setTimeout(nextQuestion,500);
  } else if (element.matches("button") === true && questionNum === 4) {
    setTimeout(lastQuestion,500);
  }
});


submitButton.addEventListener("click", function(event){
event.preventDefault();
var initialsInput = initialsEl.value;
if (initialsInput === "") {
  // feedback = please input your initials so your highscore can be saved
}
else {
  // clear input field, feedback = your highscore has been saved, local storage
}
})