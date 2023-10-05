const current = Number(new URL(location.href).searchParams.get('current'));
const bgm = new Audio();

bgm.src = '../sound/common_bgm.mp3';
bgm.currentTime = current;

window.onload = () => {
    bgm.play();
};
const buttonSound = new Audio();
buttonSound.src = '../sound/common_button.wav';

const seatDivs = document.getElementsByClassName('seat');
const seatList = [...seatDivs];

seatList.forEach((seat, i) => {
    seat.onclick = () => {
        buttonSound.play();
        switch (i) {
            case 0: 
                addScore('모범왕');
                break;
            case 1: 
                addScore('열광왕');
                break;
            case 2: 
                addScore('정보왕');
                break;
            case 3: 
                addScore('보부상');
                break;
            case 4: 
                addScore('돌아이');
                break;
            case 5: 
                addScore('공감왕');
                break;
            case 6: 
                addScore('허당왕');
                break;
            case 7: 
                addScore('조용왕');
                break;
            case 7: 
                addScore('깔끔왕');
                break;
        }
        setTimeout(()=>{
            window.open(`../choice.html?id=2&current=${bgm.currentTime}`, '_top');
        }, 300);
        
    };
});

function addScore(key) {
    let score = parseInt(localStorage.getItem(key)) + 1;
    localStorage.setItem(key, score);
}