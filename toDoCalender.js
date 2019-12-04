

function count(){ 

    let elem = document.querySelectorAll('#list li');
    let visible = [];
    for (i = 0; i < elem.length; i++) {
      _this = elem[i];
      if (_this.offsetParent !== null)
        visible.push(elem[i]);
    }
    
    let counter = visible.length

    document.getElementById("toDoCounter").innerHTML = counter
    console.log(counter)
}
    