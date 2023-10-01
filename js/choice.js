// url 쿼리 값 가져오기
let id = parseInt(new URL(location.href).searchParams.get('id'));
console.log(id);

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
    e.innerHTML = data.choice[id].contents[i];
})
// 클릭할 때 다음 아이디로 넘기기
for (let item of choiceItem) {
    item.onclick = () => {
        id++;
        window.open(`choice.html?id=${id}`, '_top');
    };
}
    
// 3초 뒤에 선택지 보이도록
setTimeout(()=> {
    // 아이디가 1이면 다른 html 파일 불러오기
    if (id === 1) {
        window.open('../seat.html', '_top');
    }
    choiceDiv.style.display = `flex`; 
}, 3000);

