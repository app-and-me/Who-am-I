localStorage.setItem('깔끔왕', 0); 
localStorage.setItem('조용왕', 0); 
localStorage.setItem('열광왕', 0);  
localStorage.setItem('정보왕', 0);  
localStorage.setItem('모범왕', 0);  
localStorage.setItem('돌아이', 0);  
localStorage.setItem('공감왕', 0);  
localStorage.setItem('허당왕', 0);  
localStorage.setItem('보부상', 0);  

const bgm = new Audio();
bgm.src = '../sound/common_bgm.mp3';
// bgm.play();

const clickSound = new Audio();
clickSound.src = '../sound/common_button.wav';

const startButton = document.getElementsByClassName('start-button')[0];
startButton.onclick = () => {
    clickSound.play();
    setTimeout(()=>{
        window.open('choice.html?id=0&current=0', '_top');
    }, 300);
}

window.onload = ()=>{
    bgm.play();
};