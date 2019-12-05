let allMonths = [
    "Januari",
    "Februari",
    "Mars",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "Augusti",
    "September",
    "Oktober",
    "November",
    "December"
]

let today = new Date()
let thisDay = today.getDate()
let currentMonth = today.getMonth()
let lastDayOfMonth = new Date(today.getFullYear(), currentMonth + 1, 0)
console.log("date : ", lastDayOfMonth)
console.log("sueernt month: ", currentMonth)
let year = today.getFullYear()
let daysInCurrentMonth = lastDayOfMonth.getDate()
let startingWeekDayOfMonth = new Date(today.getFullYear(), currentMonth, 0).getDay()

const calenderWrapper = document.querySelector('.calenderWrapper')
const monthInHeader = document.querySelector('header')
// const yearsInHeader = document.querySelector('p')


window.addEventListener('load', createCalendar)


function createCalendar() {
    console.log(currentMonth)
    calenderWrapper.innerHTML = ''
    monthInHeader.innerHTML = ''
    createEmptyDateCards()
    createCalenderCards()
    showCurrentMonthInHeader()
}

function createEmptyDateCards() {
    startingWeekDayOfMonth = new Date(today.getFullYear(), currentMonth, 0).getDay()
    for (let i = 0; i < startingWeekDayOfMonth; i++) {
        let dayCard = document.createElement('div')
        dayCard.classList = 'days'
        calenderWrapper.appendChild(dayCard)
    }
}

function createCalenderCards() {
    lastDayOfMonth = new Date(today.getFullYear(), currentMonth + 1, 0)
    daysInCurrentMonth = lastDayOfMonth.getDate()
    console.log("daysInCurrentMonth: ", daysInCurrentMonth)
    for (let i = 1; i <= daysInCurrentMonth; i++) {
        let dayCard = document.createElement('div')
        dayCard.innerText = i
        // class="days"
        dayCard.classList = 'days'
        calenderWrapper.appendChild(dayCard)

        let innerDiv = document.createElement('div')
        innerDiv.className = 'toDoCard'
        dayCard.appendChild(innerDiv)

    }
}


function nextMonth() {
    if(currentMonth === 11){
        year = year +1
    }else{
        year = year
    }

    if(currentMonth === 11){
        currentMonth = 0
    }else{
        currentMonth = currentMonth +1
    }
   createCalendar()
}
document.getElementById('next').addEventListener("click", nextMonth)

function prevMonth() {
    if(currentMonth === 0){
        year = year-1
    } else{
        year = year
    }

    if(currentMonth === 0){
        currentMonth = 11
    } else{
        currentMonth = currentMonth-1
    }
    createCalendar(currentMonth)
}
document.getElementById('prev').addEventListener("click", prevMonth)



function showCurrentMonthInHeader() {
    for (let i = 0; i <= daysInCurrentMonth; i++) {
        if (i === (currentMonth)) {
            let month = document.createElement('h1')
            let thisyear = document.createElement('h1')
            month.innerText = allMonths[i]
            month.classList = 'curentMonthYear'
            monthInHeader.appendChild(month)
            thisyear.innerText = year
            thisyear.classList = 'curentMonthYear'
            monthInHeader.appendChild(thisyear)

        }
        
    }
}




