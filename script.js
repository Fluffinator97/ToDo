window.onload = function() {
    var month = new Array("January", "February", "March", "April", "May", "June", "July",    "August", "September", "October", "November", "December");
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth();
    var currentMonth = month[mm];
    var yyyy = today.getFullYear();
    today = currentMonth + ' ' + dd + ', ' + yyyy;
    document.getElementById('output').innerHTML = today;
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
    
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
  