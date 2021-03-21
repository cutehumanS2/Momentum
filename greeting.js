//쿼리셀렉터는 원하는 셀렉터는 다 가져옴 
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");
  
const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault(); //새로고침 안 되게
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
function saveName(text) {
    localStorage.setItem(USER_LS, text);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
  }
  
  function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
  }

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
  }

//localStorage에서 이름 가져오기
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
      // she is not
      askForName();
    } else {
      paintGreeting(currentUser);
    }
  }

//처음에 생성해야 할 것
function init(){
    loadName();
}

init();

/*
<localStorage()>
: 작은 정보를 유저 컴퓨터에 저장
- f12(inspector)~Application~local Storage
- localStroage.setItem("gahing", aaaa); ~> gahing 키에 aaaa 값 저장됨
- localStorage.getItem("gahing"); ~> aaaa 값 get
- inspector~~~에서 직접 변경 가능
*/