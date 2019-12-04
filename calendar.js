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
let thisDay = today.getDate();
let currentMonth = today.getMonth();
let lastDayOfMonth = new Date(today.getFullYear(), currentMonth + 1, 0)
let year = today.getFullYear();
let daysInCurrentMonth = lastDayOfMonth.getDate()
let startingWeekDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDay()

const calenderWrapper = document.querySelector('.calenderWrapper')
const header = document.querySelector('header')


window.addEventListener('load', createCalendar)


function createCalendar() {
    createEmptyDateCards()
    createCalenderCards()
    showCurrentMonthInHeader()
}

function createEmptyDateCards() {   
    for (let i = 0; i < startingWeekDayOfMonth; i++) {
        let dayCard = document.createElement('div')
        dayCard.classList = 'days'
        calenderWrapper.appendChild(dayCard)
    }
}

function createCalenderCards() {
    for (let i = 1; i <= daysInCurrentMonth; i++) {
        let dayCard = document.createElement('div')
        dayCard.innerText = i
        // class="days"
        dayCard.classList = 'days'
        calenderWrapper.appendChild(dayCard)
        let innerDiv = document.createElement('div')
        innerDiv.className = 'toDoCard'
        dayCard.appendChild(innerDiv)
        // if (
	    //     thisDay === today &&
		// 	currentMonth === today.getMonth() &&
		// 	year === today.getFullYear()
		// ) {
		// 	dayCard.classList = 'active'
		// }
    }
}




function showCurrentMonthInHeader() {
    for (let i = 0; i <= daysInCurrentMonth; i++) {
        if (i === currentMonth) {
            let month = document.createElement('h1')
            month.innerText = allMonths[i]
            month.classList = 'curentMonthYear'
            header.appendChild(month)
        }
    }
}

let nextMonthBtn = document.getElementById('next').addEventListener("click", nextMonth)
let prevMonthBtn = document.getElementById('prev').addEventListener("click", prevMonth)

function nextMonth(){
    year = currentMonth === 11 ? year + 1 : year
	currentMonth = (currentMonth + 1) % 12
	createCalendar(currentMonth, year)
}

function prevMonth(){
    year = currentMonth === 0 ? year - 1 : year
	currentMonth = currentMonth === 0 ? 11 : currentMonth - 1
	createCalendar(currentMonth, year)
}
