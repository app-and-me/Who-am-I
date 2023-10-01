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
const img = document.getElementsByTagName('img')[0];

for (let i in data.characters) {
    if (data.characters[i].name === maxKey) {
        resultTitle.innerHTML = data.characters[i].name;
        resultExplain.innerHTML = '당신은 000 유형입니다. 이 유형의 학생은 두산 알칸타라 빨리 내려라 미친 정수빈 들어와서 기대했는데 뜬공이고 조수행도 병살이고 어휴 아시안 게임이나 보면서 힐링해야지 개같은거'+ data.characters[i].explain;
        img.src = data.characters[i].img;
    }
}

const restartButton = document.getElementsByClassName('restart')[0];
restartButton.onclick = () => {
    window.open('../index.html', '_top');
}