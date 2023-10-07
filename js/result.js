const bgm = new Audio();
bgm.src = '../sound/result_bgm.mp3';
bgm.autoplay = true;
window.onload = ()=> {
    bgm.play();
};

const buttonSound = new Audio();
buttonSound.src = '../sound/common_button.wav';

const key = new URL(location.href).searchParams.get('character');


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
const goodLabel = document.getElementsByClassName('relation-label')[0];
const goodTypeImg = goodContainer.getElementsByClassName('type-img')[0];
const goodTypeTitle = goodContainer.getElementsByClassName('type-title')[0];
const badContainer = document.getElementsByClassName('bad-container')[0];
const badLabel = badContainer.getElementsByClassName('relation-label')[0];
const badTypeImg = badContainer.getElementsByClassName('type-img')[0];
const badTypeTitle = badContainer.getElementsByClassName('type-title')[0];

for (let i in data.characters) {
    if (data.characters[i].name === key) {
        let character = data.characters[i];
        resultTitle.innerHTML = character.name;
        characterImg.src = data.characters[i].img;
        resultDescriptionTitle.innerHTML = '"'+ character.description.title +'"';
        resultContent.innerHTML = character.description.content;
        tagItems.forEach((e, index) => {
            e.innerHTML = '#' + character.description.tag[index];
        });
        personalItems.forEach((e, index) => {
            e.innerHTML = character.description.personal[index]; 
        });

        goodLabel.innerHTML = character.good;
        goodTypeImg.src = `../image/${character.good}.jpg`;
        goodContainer.onclick = () => {
            window.open(`../result.html?character=${character.good}`, '_top');
        };

        badLabel.innerHTML = character.bad;
        badTypeImg.src = `../image/${character.bad}.jpg`;
        badContainer.onclick = () => {
            window.open(`../result.html?character=${character.bad}`, '_top');
        };

    
    }
}

const restartButton = document.getElementsByClassName('restart')[0];
restartButton.onclick = () => {
    buttonSound.play();
    setTimeout(()=>{
        window.open('../index.html', '_top');
    }, 300);
};

const allButton = document.getElementsByClassName('all-button')[0];
allButton.onclick = () => {
    window.open('../dictionary.html', '_top');
};

