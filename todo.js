var todo = document.querySelector('.todo'),
    todoinput = todo.querySelector('input'),
    todolist = document.querySelector('.todolist');

var dos = 'todo';

// localStorage에도 저장
var todos = [];

function saveTodos() {
    localStorage.setItem(dos, JSON.stringify(todos));
}

function something(todo) {
    console.log(todo.text); 
}

function loadTodo() {
    var loadTodo = localStorage.getItem(dos);

    if (loadTodo !== null) {
        // 불러오는게 string이라 json 한번더 쓴다.
        var parseTodo = JSON.parse(loadTodo);

        // 요소만큼 실행
        parseTodo.forEach(function (todo) {
            printTodo(todo.text);
        });
         
     } else {
        
    }
 }

function printTodo(text) {
    var li = document.createElement('li');
    var deleteBtn = document.createElement('button');
    
    // meta charset='utp-8' 했는데도 이모지 적용이 안되는데
    // 뭘 잘못했는지 아직 발견 못함.
    deleteBtn.value = `❌`;
    deleteBtn.addEventListener('click', delteTodo);

    var span = document.createElement('span');
    span.innerText = text;

    var liId = todos.length + 1;
    li.appendChild(deleteBtn);
    li.appendChild(span);
    li.id = liId;

    todolist.appendChild(li);

    var todoobj = {
        text: text,
        // id  부여
        id: liId
    };

    todos.push(todoobj);
    saveTodos();

}

function delteTodo(event) {
    // 클릭된 버튼을 찾아서
    var btn = event.target;

    // 버튼의 부모를 찾고
    var li = btn.parentNode;

    // 삭제한다.
    todolist.removeChild(li);

    // cleanTodo가 하는 역할
    // todos에서 해당 함수를 사용해서 조건이 맞는 것만 필터함.
    var cleanTodo = todos.filter(function (todo) {
        return todo.id !== parseInt(li.id);
    });


    // 기존 있는 배열을 변경된 배열로 바꾸고
    todos = cleanTodo;

    // 저장
    saveTodos();
}

function handleSubmit(event) {
    event.preventDefault();
    var currentValue = todoinput.value;
    
    printTodo(currentValue);
    todoinput.value = "";
}

function init() {
    loadTodo();
    todo.addEventListener("submit", handleSubmit)
}



init();