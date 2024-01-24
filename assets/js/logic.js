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

startScreen.setAttribute("class", "hide")
questionScreen.setAttribute("class","show")

}
function startQuiz () {
    
}

// id = start (create event listener)
startButton.addEventListener("click",startTimer)


