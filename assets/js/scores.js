highscoreEl = document.querySelector("#highscores")

var highscoreEntries = {...localStorage};


for (const key in highscoreEntries) {
    var li = document.createElement("li");
    var entry = `${key}: ${highscoreEntries[key]}`
    li.textContent = entry;
    console.log(`${key}: ${highscoreEntries[key]}`);
    highscoreEl.appendChild(li);
}











// var obj = {
// qer: 6,
// twe: 14
// }

// for (const key in obj) {
//     console.log(`${key}: ${obj[key]}`);
// }

// console.log(obj);

// console.log(window.localStorage);


// console.log(Object.keys(window.localStorage));

// console.log(Object.values(window.localStorage));





// oJson = {};
// var sKey = "";
// for (let i = 0 ; sKey = window.localStorage.key(i); i++) {
//     oJson[sKey] = window.localStorage.getItem(sKey);
// }
// console.log(oJson);
