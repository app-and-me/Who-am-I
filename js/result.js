let scores = [];

let localStorageArray = Object.entries(localStorage);

for (let [key, value] of localStorageArray) {
    scores.push([key, parseInt(value)]);
}

let maxScore = -Infinity;
let maxKey = null;

for (let i = 0; i < scores.length; i++) {
    let [key, score] = scores[i];
    if (score > maxScore) {
        maxScore = score;
        maxKey = key;
    }
}

console.log("Maximum Score:", maxScore);
console.log("Key with Maximum Score:", maxKey);

const resultTitle = document.getElementsByClassName('result-title')[0];
const resultExplain = document.getElementsByClassName('result-explain')[0];

resultTitle.innerHTML = maxKey;
resultExplain.innerHTML = '설명';