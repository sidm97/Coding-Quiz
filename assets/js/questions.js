// inside div wrapper, 3 id's are present. The start screen, and the hidden questions and end screen. 
// on start button, questions div id should reveal, and start screen should hide. 
// Inside questions div id, h2 = question title, and div id choices = question choices.

// to start with, create a question to use. with 4 options as per the gif in readme instructions

// commonly used data types do not include
// strings 
// booleons
// alerts !
// numbers

var questionOne = {
  title: "commonly used data types do not include: ",
  choices: ["strings", "booleans","alerts", "numbers"],
  correct: "alerts"
}
var questionTwo = {
  title: "1commonly used data types do not include: ",
  choices: ["1strings", "1booleans","1alerts", "1numbers"]
}


// do questions while timer >0
// inside questions, add event listener to listen for clicks on buttons. if button clicked, change text content of question to next. if button clicked is correct, 