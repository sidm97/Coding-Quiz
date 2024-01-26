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
  title: "1. Commonly used data types do NOT include: ",
  choices: ["Strings", "Booleans","Alerts", "Numbers"],
  correct: "Alerts"
}
var questionTwo = {
  title: "2. Inside which HTML element do we put the JavaScript?",
  choices: ["<scripting>", "<javascript>","<js>", "<script>"],
  correct: "<js>"
}

var questionThree = {
  title: "3. Where is the correct place to insert a JavaScript?",
  choices: ["The <head section>", "The <body> section","Both the <head> and <body> sections"],
  correct: "The <body> section"
}
var questionFour = {
  title: "4. How do you write 'Hello World!' in an alert box?",
  choices: ["alertBox('Hello World!)", "msgBox('Hello World!)","msg('Hello World!)", "alert('Hello World!)"],
  correct: "alert('Hello World!)"
}
var questionFive = {
  title: "5. How does a FOR loop start?",
  choices: ["for(i = 0; i <= 5; i++)", "for(i = 0; i <= 5)","for (i <= 5; i++)", "for i = 1 to 5"],
  correct: "for(i = 0; i <= 5"
}


// do questions while timer >0
// inside questions, add event listener to listen for clicks on buttons. if button clicked, change text content of question to next. if button clicked is correct, 