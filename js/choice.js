for (var key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
        var value = localStorage[key];
        console.log(key + ': ' + value);
    }
}

// url 쿼리 값 가져오기
let id = parseInt(new URL(location.href).searchParams.get('id'));
console.log(id);

if  (id === 8) {
    window.open('../result.html', '_top');
}

const current = Number(new URL(location.href).searchParams.get('current'));

// audio
const bgm = new Audio();
bgm.src = '../sound/common_bgm.mp3';
bgm.currentTime = current;

const buttonSound = new Audio();
if (id === 7) {
    buttonSound.src = '../sound/last_button.mp3';
} else {
    buttonSound.src = '../sound/common_button.wav';
}


// 질문 html 요소 가져오기
const questionSpan = document.getElementsByClassName("question")[0].getElementsByTagName("span")[0];
questionSpan.innerHTML = data.question[id].content;

// 선택지 html 요소 가져오기
const choiceDiv = document.getElementsByClassName("choice")[0];

// 배경 이미지 넣기
const body = document.getElementsByTagName('body')[0];
body.style.backgroundImage = `url('../image/bg1.png')`

// 선택지 등록하기
const choiceItem = document.getElementsByClassName('choice-item');
let choiceItemList = [...choiceItem];
choiceItemList.forEach((e, i) => {
    // 안에 글자 바꾸기
    e.innerHTML = data.choice[id].contents[i];

    // 이벤트
    e.onclick = () => {
        buttonSound.play();
        switch (id) {
            case 0:
                {
                    if (i == 0) {
                        addScore('모범왕');
                        addScore('열광왕');
                    } else if (i == 1) {
                        addScore('돌아이');
                    } else {
                        addScore('깔끔왕');
                    }
                } break;
            case 2:
                {
                    if (i == 0) {
                        addScore('열광왕');
                        addScore('돌아이');
                        addScore('정보왕');
                    } else if (i == 1) {
                        addScore('조용왕');
                    } else {
                        addScore('모범왕');
                    }
                } break;
            case 3: 
                {
                    if (i == 0) {
                        addScore('열광왕');
                    } else if (i == 1) {
                        addScore('조용왕');
                        addScore('모범왕');
                    } else {
                        addScore('돌아이');
                    }
                } break;
            case 4:
                {
                    if (i == 0) {
                        addScore('정보왕');
                    } else if (i == 1) {
                        addScore('깔끔왕');
                    } else {
                        addScore('허당왕');
                    }
                } break;
            case 5:
                {
                    if (i == 0) {
                        addScore('열광왕')
                    } else if (i == 1) {
                        addScore('조용왕');
                        addScore('모범왕');
                    } else {
                        addScore('정보왕');
                    }
                } break;
            case 6:
                {
                    if (i == 0) {
                        addScore('모범왕')
                    } else if (i == 1) {
                        addScore('열광왕');
                        addScore('돌아이');
                    } else {
                        addScore('조용왕');
                    }
                } break;
            case 7:
                {
                    if (i == 0) {
                        addScore('모범왕')
                        addScore('깔끔왕')
                    } else if (i == 1) {
                        addScore('열광왕');
                    } else {
                        addScore('정보왕');
                    }
                } break;
            default: break;
        }
    
        
        id++;
        setTimeout(() => {
            window.open(`choice.html?id=${id}&current=${bgm.currentTime}`, '_top');
        }, 300);
    };
});

function addScore(key) {
    let score = parseInt(localStorage.getItem(key)) + 1;
    localStorage.setItem(key, score);
}
    
// 3초 뒤에 선택지 보이도록
setTimeout(()=> {
    // 아이디가 1이면 다른 html 파일 불러오기
    if (id === 1) {
        window.open(`../seat.html?current=${bgm.currentTime}`, '_top');
    }

    choiceDiv.style.display = `flex`; 
}, 3000);

window.onload = () => {
    bgm.play();
};
