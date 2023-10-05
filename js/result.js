const bgm = new Audio();
bgm.src = '../sound/result_bgm.mp3';
window.onload = ()=> {
    bgm.play();
};

const buttonSound = new Audio();
buttonSound.src = '../sound/common_button.wav';


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


// 값 가져오기

const resultTitle = document.getElementsByClassName('result-title')[0];
const resultDescriptionTitle = document.getElementsByClassName('result-description-title')[0];
const resultContent = document.getElementsByClassName('result-content')[0];
const resultTags = document.getElementsByClassName('result-tags')[0];
const tagItems = [...document.getElementsByClassName('tag-item')];
const resultPersonal = document.getElementsByClassName('result-personal')[0];
const personalItems = [...document.getElementsByClassName('personal-item')];
const characterImg = document.getElementsByClassName('character-img')[0];
const goodContainer = document.getElementsByClassName('good-container')[0];
const goodLable = goodContainer.getElementsByClassName('relation-lable')[0];
const goodTypeImg = goodContainer.getElementsByClassName('type-img')[0];
const goodTypeTitle = goodContainer.getElementsByClassName('type-title')[0];
const badContainer = document.getElementsByClassName('bad-container')[0];
const badLable = badContainer.getElementsByClassName('relation-lable')[0];
const badTypeImg = badContainer.getElementsByClassName('type-img')[0];
const badTypeTitle = badContainer.getElementsByClassName('type-title')[0];

for (let i in data.characters) {
    if (data.characters[i].name === maxKey) {
        let character = data.characters[i];
        resultTitle.innerHTML = character.name;
        // resultExplainContainer.innerHTML = data.characters[i].explain.title;
        characterImg.src = data.characters[i].img;
        resultDescriptionTitle.innerHTML = character.description.title;
        resultContent.innerHTML = character.description.content;
        tagItems.forEach((e, index) => {
            e.innerHTML = '#' + character.description.tag[index];
        });
        personalItems.forEach((e, index) => {
            e.innerHTML = '- ' + character.description.personal[index]; 
        });
    }
}

const restartButton = document.getElementsByClassName('restart')[0];
restartButton.onclick = () => {
    buttonSound.play();
    setTimeout(()=>{
        window.open('../index.html', '_top');
    }, 300);
};