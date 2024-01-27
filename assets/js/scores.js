highscoreEl = document.querySelector("#highscores")

var highscoreEntries = {...localStorage};

// console.log(highscoreEntries);

// for (const key in highscoreEntries) {
//     var li = document.createElement("li");
//     var entry = `${key}: ${highscoreEntries[key]}`
//     li.textContent = entry;
//     console.log(`${key}: ${highscoreEntries[key]}`);
//     highscoreEl.appendChild(li);
// }

let sortable = [];
for (var key in highscoreEntries) {
    sortable.push([key, highscoreEntries[key]]);
}
// console.log(sortable);
sortable.sort(function(a, b) {
    return a[1] - b[1];
});
sortable.reverse();
// console.log(sortable);

for (let i = 0; i < sortable.length; i++) {
    const element = sortable[i];
    var li = document.createElement("li");
    var entry = element[0] + "-----" + element[1]
    li.textContent = entry;
    highscoreEl.appendChild(li);
}

// Explanation of above; first, the local storage is sourced and stored in an object. An array is created and filled with the entries of the object; in this case, each entry is a key and value, a user and score. the new array or arrays is sorted in descending value order and a for loop renders it onto the page.



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
