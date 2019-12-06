
function addTodoFromLocaStorage(){
  let keys = Object.keys(localStorage);
  console.log("keys: ",keys);

for(key in keys){
  if(localStorage.getItem( keys[key] ) === ""){
    return;
  }
    let toDoList = document.createElement('li')
    let span = document.createElement("SPAN")
    var txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    console.log("local key: ",localStorage.getItem( keys[key] ))
    toDoList.innerText = localStorage.getItem( keys[key] )
    toDoList.innerText += " "+keys[key]
    toDoList.appendChild(span)
    document.getElementById('list').appendChild(toDoList)
    
  }
}
addTodoFromLocaStorage();

function addNewToDo(){
  let toDoList = document.createElement('li')
  let inputValue = document.getElementById('input').value
  let text = document.createTextNode(inputValue)
  let date = document.getElementById('input_date').value

  localStorage.setItem(date, inputValue)
  
  toDoList.appendChild(text)
  
  
  if (inputValue === '') {
    
  } else {
    document.getElementById('list').appendChild(toDoList)
  }
  document.getElementById('input').value = ""

  var span = document.createElement("SPAN")
  var txt = document.createTextNode("\u00D7")
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
    var re = new RegExp('[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])');
    let todoremoveItem = div.innerText.match(re)
   // console.log(todoremoveItem[0])
    localStorage.removeItem(todoremoveItem[0])
  }
}