// function populateList(lists = [], todoList) {
//   todoList.innerHTML = lists.map((list, i) => {
//       return `
//           <li> 
//               <input type="checkbox" data-index=${i} id="item${i}" ${list.done ? 'checked' : ' '} />
//               <label for="">${list.text}</label>
//           </li>
//       `
//   }).join('')
//  }

function addNewToDo(){
  let toDoList = document.createElement('li');
  let inputValue = document.getElementById('input').value;
  let text = document.createTextNode(inputValue);
  
  const todo = {
    text: inputValue,
    date: "2019-12-04",
  }
  
  
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
  span.onclick = function() {
    toDoList.parentElement.removeChild(toDoList)
    count()
  }
  toDoList.appendChild(span);

}