
const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.todo-list')
const items = []

function addItem(e) {
   e.preventDefault()
  
       const text = (this.querySelector('[name=item]')).value
       const item = {
           text: text,
           done: false
       }
       items.push(item)
       populateList(items, itemsList)
       this.reset()
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


addItems.addEventListener('submit', addItem)