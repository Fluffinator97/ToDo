const inputDate = document.querySelector('.add-items')
const addItems = document.querySelector('.add_button')
const itemsList = document.getElementById('list')
const local = JSON.parse(localStorage.getItem('local')) || []

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
      text,
      done: false
    }
}
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

/**
 * @typedef {index} index of data-index
 * @param {event} event 
 */
function toggleDone(event){
    if(!event.target.matches('input'))return
    const el = event.target;
    const index = el.dataset.index;
    local[index].done = !local[index].done;
    console.log(item)
    localStorage.setItem('local', JSON.stringify(local));
    populateList(local, itemsList);
}




/*KOLLA OM DETTA FUNKAR */
function removeTodoListener(event) {
    // Remove the li element from the DOM
    const li = event.target.parentElement
    li.remove()

    // Also update local storage
    const todoText = event.target.nextSibling.textContent
    removeTodo(todoText)
}
/*KOLLA OM DETTA FUNKAR */


// inputDate.addEventListener('date')
addItems.addEventListener('click', addItem)
itemsList.addEventListener('click', toggleDone)

populateList(local,itemsList)
