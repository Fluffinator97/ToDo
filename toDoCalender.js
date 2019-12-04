
function count(){
    let ul = document.getElementById('list');
    let i = 0;
    let number = 0;
    while(ul.getElementsByTagName('li')[i++]) number++;
    document.getElementById("toDoCounter").innerHTML = number;

    var innerDiv = document.createElement('div');
    innerDiv.className = 'toDoCard';
    dayCard.appendChild(innerDiv);


    }


    //put in script.jc         let innerDiv = document.createElement('div');
        //innerDiv.className = 'toDoCard';
        //dayCard.appendChild(innerDiv);
        //.counter {
    //color: #F7C6AB;}
    