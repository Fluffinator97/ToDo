function addTodoFromLocaStorage(){
  let keys = Object.keys(localStorage);
  console.log("keys: ",keys);

  for(key of keys){
    const todos = JSON.parse(localStorage.getItem(key) || "[]")
    for (const todo of todos) {
      let toDoList = document.createElement('li')
      let span = document.createElement("SPAN")
      let txt = document.createTextNode("\u00D7")
      span.className = "close"
      span.appendChild(txt)
      
      toDoList.innerText = todo
      toDoList.appendChild(span)
      document.getElementById('list').appendChild(toDoList)
    }
    
  }
}
addTodoFromLocaStorage();

function addNewToDo(){
  let toDoList = document.createElement('li')
  let inputValue = document.getElementById('input').value
  let text = document.createTextNode(inputValue)
  let date = document.getElementById('input_date').value

  const todos = JSON.parse(localStorage.getItem(date) || "[]")
  todos.push(inputValue)
  localStorage.setItem(date, JSON.stringify(todos))
  
  toDoList.appendChild(text)
  
  
  if (inputValue === '') {
    
  } else {
    document.getElementById('list').appendChild(toDoList)
  }
  document.getElementById('input').value = ""

  const span = document.createElement("SPAN")
  const txt = document.createTextNode("\u00D7")
  span.className = "close"
  span.appendChild(txt)
  toDoList.appendChild(span)
  


  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement
      div.style.display = "none"
    }
  }
}
  // delete todos

  let close = document.getElementsByClassName("close")
  for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement
    div.style.display = "none"
    let re = new RegExp('[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])');
    let todoremoveItem = div.innerText.match(re)
   // console.log(todoremoveItem[0])
    localStorage.removeItem(todoremoveItem[0])
  }
}