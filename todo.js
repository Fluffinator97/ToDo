function populateList(lists = [], todoList) {
  todoList.innerHTML = lists.map((list, i) => {
      return `
          <li> 
              <input type="checkbox" data-index=${i} id="item${i}" ${list.done ? 'checked' : ' '} />
              <label for="">${list.text}</label>
          </li>
      `
  }).join('')
 }

function addNewToDo(){
  let toDoList = document.createElement('li');
  let inputValue = document.getElementById('input').value;
  let text = document.createTextNode(inputValue);
  
  
  
  toDoList.appendChild(text);
  
  
  if (inputValue === '') {
    
  } else {
    document.getElementById('list').appendChild(toDoList);
  }
  document.getElementById('input').value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  toDoList.appendChild(span);
  
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}
  // delete todos

  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}