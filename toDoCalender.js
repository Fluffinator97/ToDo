
function count(){ 

    let toDoCounter = document.querySelectorAll('#list li');
    let visible = [];
    for (i = 0; i < toDoCounter.length; i++) {
        
      counterArray = toDoCounter[i];
      if (counterArray.offsetParent !== null)
        visible.push(toDoCounter[i]);
    }
    
    let counter = visible.length

    document.getElementById("toDoCounter").innerHTML = counter
    console.log(counter)
}
    