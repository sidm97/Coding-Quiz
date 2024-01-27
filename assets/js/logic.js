// Start screen convenience variables
var startButton = document.querySelector("#startbtn");
var timerEl = document.querySelector("#time");
var startScreen = document.querySelector("#start-screen");
var questionScreen = document.querySelector("#questions");
// Question screen convenience variables
var qContainer = document.querySelector("#questions");
var qTitle = document.querySelector("#question-title");
var choiceEl = document.querySelector("#choices");
var buttonEl = document.querySelector("button");
var feedbackEl = document.querySelector("#feedback");
// Question variables
var questionNum = 0;
var array = [questionOne, questionTwo, questionThree, questionFour, questionFive];
var selectedQuestion = array[questionNum];
// End screen variables
var endScreen = document.querySelector("#end-screen");
var finalScoreel = document.querySelector("#final-score");
var initialsEl = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var regex = /^[a-zA-Z]+$/;
var highscoreEntries = { ...localStorage };
var users = Object.keys(highscoreEntries);
// Timer variables
let timeLeft = 0;


// Start screen functions
function init() {
  startTimer();
  transitionToquestionScreen();
};

function startTimer() {
  timeLeft = 60;
  let ticking = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft === 0 || timeLeft < 0) {
      clearInterval(ticking);
      timerEl.textContent = 0;
      if (qTitle.textContent !== "") {
        timeOut();
      }
    }
  }, 1000)
};

function timeOut() {
qTitle.textContent = "";
  choiceEl.innerHTML = "";
  questionScreen.setAttribute("class", "hide");
  endScreen.setAttribute("class", "show");
  finalScoreel.textContent = 0;
}

function generateQuestion() {
  for (let i = 0; i < selectedQuestion.choices.length; i++) {
    var choice = selectedQuestion.choices[i];
    var button = document.createElement("button");
    button.textContent = choice;
    choiceEl.appendChild(button);
  }
}

function transitionToquestionScreen() {
  startScreen.setAttribute("class", "hide");
  questionScreen.setAttribute("class", "show");
  feedbackEl.classList.replace("hide", "show");
  qTitle.textContent = selectedQuestion.title;
  generateQuestion();
};

// Question screen functions; to manage transitions to each question and to end questions after Q5 and join up to end screen
function nextQuestion(event) {
  questionNum++;
  selectedQuestion = array[questionNum];
  qTitle.textContent = "";
  qTitle.textContent = selectedQuestion.title;
  choiceEl.textContent = "";
generateQuestion()
};

function lastQuestion(event) {
  let score = timeLeft;
  finalScoreel.textContent = score;
  qTitle.textContent = "";
  choiceEl.innerHTML = "";
  questionScreen.setAttribute("class", "hide");
  endScreen.setAttribute("class", "show");
  timeLeft = 0;
  timerEl.textContent = 0;
};

function resetFeedback() {
  feedbackEl.textContent = "";
};

// Event listeners
startButton.addEventListener("click", init);

choiceEl.addEventListener("click", function (event) {
  var trueBtn = event.target;
  if (trueBtn.matches("button") === true && questionNum < 4) {
    setTimeout(nextQuestion, 500);
  } else if (trueBtn.matches("button") === true && questionNum === 4) {
    setTimeout(lastQuestion, 500);
  }
});

choiceEl.addEventListener("click", function (event) {
  var trueBtn = event.target;
  if (trueBtn.matches("button") === true) {
    if (trueBtn.textContent === "Alerts") {
      feedbackEl.textContent = "Correct";
      setTimeout(resetFeedback, 500);
    } else if (trueBtn.textContent === "<js>") {
      feedbackEl.textContent = "Correct";
      setTimeout(resetFeedback, 500);
    } else
      if (trueBtn.textContent === "The <body> section") {
        feedbackEl.textContent = "Correct";
        setTimeout(resetFeedback, 500);
      } else
        if (trueBtn.textContent === "alert('Hello World!)") {
          feedbackEl.textContent = "Correct";
          setTimeout(resetFeedback, 500);
        } else
          if (trueBtn.textContent === "for(i = 0; i <= 5; i++)") {
            feedbackEl.textContent = "Correct";
            setTimeout(resetFeedback, 500);
          } else {
            feedbackEl.textContent = "Incorrect";
            timeLeft -= 10;
            setTimeout(resetFeedback, 500);
          }
  }
});

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  resetFeedback();
  var initialsInput = initialsEl.value.trim();
  var initials = initialsInput.toUpperCase();
  if (initialsInput === "") {
    feedbackEl.textContent = "Please input your initials so your highscore can be saved";
  } else if (!regex.test(initialsInput)) {
    feedbackEl.textContent = "Please enter only letters for your initials";
  } else if (initialsInput.length > 3) {
    feedbackEl.textContent = "Please enter a maximum of 3 letters";
  } else if (users.includes(initials)) {
    var previousScore = parseInt(localStorage.getItem(initials));
    if (previousScore > parseInt(finalScoreel.textContent)) {
      if (confirm("You have a previous score that is higher on the leaderboard; do you want to save this score instead?")) {
        localStorage.setItem(initials, finalScoreel.textContent);
        initialsEl.disabled = true;
        submitButton.disabled = true;
        feedbackEl.textContent = "Your score has been updated on the leaderboard. Reload the page to play again";
      } else { feedbackEl.textContent = "Please input your initials to save your score, or reload the page to play again" }
    } else {
      localStorage.setItem(initials, finalScoreel.textContent);
      feedbackEl.textContent = "Your score has been saved. Reload the page to play again";
      initialsEl.disabled = true;
      submitButton.disabled = true;
    }
  } else {
    localStorage.setItem(initials, finalScoreel.textContent);
    feedbackEl.textContent = "Your score has been saved. Reload the page to play again";
    initialsEl.disabled = true;
    submitButton.disabled = true;
  }
  document.getElementById("initials").value = ""
}
)