
const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.todo-list')
const items = JSON.parse(localStorage.getItem('items')) || []

function addItem(e) {
   e.preventDefault()
  
       const text = (this.querySelector('[name=item]')).value
       const item = {
           text: text,
           done: false
       }
       items.push(item)
       populateList(items, itemsList)
       localStorage.setItem('items', JSON.stringify(items))
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

function toggleDone(e){
    console.log(e)
}


addItems.addEventListener('submit', addItem)
itemsList.addEventListener('click', toggleDone)

populateList(items,itemsList)

function formatDate(date) {
    let monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }
  

  document.getElementById('date').innerHTML = formatDate(new Date()) 

  let currentDate = new Date()
  let lastDayOfMonth = new Date(currentDate.getFullYear(), 0 + 1, 0)
  let daysInCurrentMonth = lastDayOfMonth.getDate()
  let dayInWeek = new Date(currentDate.getFullYear(), 0 + 1, 1).getDay()

  const calenderWrapper = document.querySelector('.calenderWrapper')

  console.log(dayInWeek)


  for(let i = 1; i <= dayInWeek; i++) {
      let dayCard = document.createElement('div')
      // class="days"
      dayCard.classList = 'days'
      calenderWrapper.appendChild(dayCard)
  }

  for(let i = 1; i <= daysInCurrentMonth; i++) {
      let dayCard = document.createElement('div')
      dayCard.innerText = i
      // class="days"
      dayCard.classList = 'days'
      calenderWrapper.appendChild(dayCard)
  }