const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber){
    //== const image = document.createElement("img");
    const image = new Image();
    //imgNumber+1 ~ imgNumber에 0이 올 수도 있기 때문
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage"); //css로 조정하기 위해 class추가
    //prepend(): appendChild()와 유사한 동작,
    //맨 뒤가 아닌 맨 앞에 요소 추가
    body.prepend(image);
}

function genRandom(){
    //소수점 ~ floor은 버림, ceil은 올림
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();