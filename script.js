
// const inputDate = document.querySelector('.add-items')
const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.todo-list')
const items = JSON.parse(localStorage.getItem('items')) || []


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
