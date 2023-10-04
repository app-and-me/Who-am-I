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
const img = document.getElementsByClassName('character-img')[0];

for (let i in data.characters) {
    if (data.characters[i].name === maxKey) {
        resultTitle.innerHTML = data.characters[i].name;
        resultExplain.innerHTML = data.characters[i].explain;
        img.src = data.characters[i].img;
    }
}

const restartButton = document.getElementsByClassName('restart')[0];
restartButton.onclick = () => {
    window.open('../index.html', '_top');
}