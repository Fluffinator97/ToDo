let monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
  
  function getFullDate(date) {
      let day = date.getDate()
      let monthIndex = date.getMonth()
      let year = date.getFullYear()
    
      return `
      ${day} ${ monthNames[monthIndex]} ${year}
      `
  }
  document.getElementById('date').innerHTML = getFullDate(new Date()) 
  
  
//   function month(monthNames){
//       let monthIndex = monthNames.getMonth()
//       return `
//       ${ monthNames[monthIndex]}
//       `
//   }   
   
//     document.getElementById('h1').innerHTML = month(new Date() )
  


    let currentDate = new Date()
    let currentMonth = currentDate.getMonth();
    let lastDayOfMonth = new Date(currentDate.getFullYear(), currentMonth + 1, 0)
    
    let daysInCurrentMonth = lastDayOfMonth.getDate()
    let dayInWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()
    
    const calenderWrapper = document.querySelector('.calenderWrapper')
    
    console.log("Selected month", currentMonth)
    console.log("Day in week: ", dayInWeek)
  
    //renders empty boxes in calender
    for(let i = 1; i < dayInWeek; i++) {
        let dayCard = document.createElement('div')
        dayCard.classList = 'days'
        calenderWrapper.appendChild(dayCard)         
    }
  //
    for(let i = 1; i <= daysInCurrentMonth; i++) {
        let dayCard = document.createElement('div')
        dayCard.innerText = i
        // class="days"
        dayCard.classList = 'days'
        calenderWrapper.appendChild(dayCard)
    }
  
   
  