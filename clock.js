//querySelector는 element의 자식을 탐색함
const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    //innerText ~> 객체 안에 텍스트 넣음 / ``을 '백틱'이라 함
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours} : ${
            minutes <10 ? `0${minutes}` : minutes} : ${
            seconds <10 ? `0${seconds}` : seconds}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000); //getTime()을 1초마다 수행
}

init();
