const seatDivs = document.getElementsByClassName('seat');
const seatList = [...seatDivs];

seatList.forEach(seat => {
    seat.onclick = () => {
        window.open('../choice.html?id=3');
    };
});