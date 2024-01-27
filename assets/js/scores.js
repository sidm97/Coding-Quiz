var highscoreEl = document.querySelector("#highscores");
var highscoreEntries = { ...localStorage };
var clearBtn = document.querySelector("#clear");

let sortedHS = [];
for (var key in highscoreEntries) { sortedHS.push([key, highscoreEntries[key]]) };
sortedHS.sort(function (a, b) { return a[1] - b[1] });
sortedHS.reverse();

for (let i = 0; i < sortedHS.length; i++) {
    const element = sortedHS[i];
    var li = document.createElement("li");
    var entry = element[0] + "-----" + element[1];
    li.textContent = entry;
    highscoreEl.appendChild(li);
}

// Explanation of above; first, the local storage is sourced and stored in an object. An array is created and filled with the entries of the object; in this case, each entry is a key and value, a user and score. the new array or arrays is sorted in descending value order and a for loop renders it onto the page.

function clearHighscores() {
    localStorage.clear();
    highscoreEl.innerHTML = "";
};

clearBtn.addEventListener("click", clearHighscores);