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

function getFullDate(today) {
    // let today = new Date()
    let day = today.getDate()
    let monthNames = today.getMonth();
    let year = today.getFullYear()

    return `
      ${day} ${monthNames[allMonths]} ${year}
      `
    console.log(today)
}
document.createElement('showDate').innerHTML = getFullDate(new Date())


//   function thisMonth(monthNames){
//       let month = date.getMonth()

//       return `
//       ${ monthNames[month]}
//       `
//   }    
//     document.querySelector('.month').innerHTML = thisMonth(new Date() )



let today = new Date()
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




