const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

//toDos라는 문자열 저장
//+) LS : Local Stroage
const TODOS_LS = "toDos";
let toDos = [];

function deleteToDo(event){
    /*
    1. local storage에서 to do 하나 지워야 함, 그리고 저장
    2. 그리고 HTML에서도 지워야 함
     */
    //console.log(event.target); 
    //console.dir(event.target);
    //console.log(event.target.parentNode); //우리가 삭제할 id 나옴
    //delete child element mdn 찾아보기
    const btn = event.target; //리스트 중 어떤 버튼이 클릭 되었는지
    const li = btn.parentNode; //지워야 할 li
    toDoList.removeChild(li); //HTML에서 li 지움

    //filter() ~ forEach()처럼 각각의 item 실행, array 만듦
    //'li'에 없는 id인 toDos를 체크하고 싶음
    const cleanToDos = toDos.filter(function(toDo){
        //모든 toDos가 'li'의 id와 같지 않을 때
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    //JSON.stringify(): json 객체(object)를 string객체로 변환
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length+1; 

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function loadToDos(){
    /*
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){}*/
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        //JSON.parse(): string 객체를 json 객체로 변환
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();

/*
<JSON 객체>
-JS Object Notation
-JSON은 객체, 배열, 숫자, 문자열, 불리언과 null을 직렬화하기 
위한 구문으로, JavaScript 구문에 기반을 두고 있지만 분명한 
차이점을 가지고 있습니다. 즉, 어떤 JavaScript는 JSON이 아닙니다.

-json 사용하는 이유
: local storage에는 js의 data 저장할 수 없음
: 오직 string만 저장 가능
*/