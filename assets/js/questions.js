// inside div wrapper, 3 id's are present. The start screen, and the hidden questions and end screen. 
// on start button, questions div id should reveal, and start screen should hide. 
// Inside questions div id, h2 = question title, and div id choices = question choices.

// to start with, create a question to use. with 4 options as per the gif in readme instructions

// commonly used data types do not include
// strings 
// booleons
// alerts !
// numbers

var qContainer = document.querySelector("#questions")
console.log(qContainer);
var qTitle = document.querySelector("#question-title")
console.log(qTitle);

qTitle.textContent = "commonly used data types do not include"

// var qChoices = document.querySelector("#choices")
// console.log(qChoices);

var populateChoices = document.createElement("li")


var qChoices = ["strings", "booleans", "alerts", "numbers"]

var choiceEl = document.querySelector("#choices")

function render() {

    for (var i = 0; i < qChoices.length; i++) {
      var choice = qChoices[i];
      var li = document.createElement("li");
      li.textContent = qChoices;
      choiceEl.appendChild(li);
    }
  }

  console.log(qChoices);
startButton.addEventListener("click",render)