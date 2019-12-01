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
      ${day} ${ monthNames[allMonths]} ${year}
      `
  }
    document.createElement('date').innerHTML = getFullDate(new Date()) 
   
  
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
    let dayInWeek = new Date(today.getFullYear(), today.getMonth(), 1).getDay()
    
    const calenderWrapper = document.querySelector('.calenderWrapper')
    const header = document.querySelector('header')

   
    
    console.log("Selected month", currentMonth)
    console.log("Day in week: ", dayInWeek)
    /**
    * Asynchronous `for` loop.
    * @function for
    * @param {function} initial Sets up initial condition for loop. i = 1 (adding one day causes the date to roll over to the next month is necessary)
    * @param {function} condition Checksif index is bigger then 6
    * @param {function} update add 1 after exicution
    * @returns {Promise} Resolves if successful; otherwise rejects with error.
    */
    //renders empty boxes in calender
function emtyDates(dayInWeek){
    for(let i = 1; i < dayInWeek; i++) {
        let dayCard = document.createElement('div')
        dayCard.classList = 'days'
        calenderWrapper.appendChild(dayCard)         
    }
}
  //shows dates in calender cards
    for(let i = 1; i <= daysInCurrentMonth; i++) {
        let dayCard = document.createElement('div')
        dayCard.innerText = i
        // class="days"
        dayCard.classList = 'days'
        calenderWrapper.appendChild(dayCard)
    }
  //shows current month in header
    for(let i = 0; i <= daysInCurrentMonth; i++) {
        if(i === currentMonth){
            let month = document.createElement('h1')
            month.innerText = allMonths[i]
            month.classList = 'curentMonthYear'
            header.appendChild(month)
        }
        
    }

    // function daysInMonth(currentMonth, year) {
    //     // day 0 here returns the last day of the PREVIOUS month
    //     return new Date(year, month + 1, 0).getDate();
    // }
  
 