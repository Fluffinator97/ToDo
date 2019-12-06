window.setInterval(refreshTime, 1000);
window.onload = refreshTime()
function refreshTime() {
    let month = new Array("January", "February", "March", "April", "May", "June", "July",    "August", "September", "October", "November", "December");
    let dayOfWeek = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
     let today = new Date();
     let day = today.getDay();
     let dd = today.getDate();
     let mm = today.getMonth();
     let currentMonth = month[mm];
     let currentDay = dayOfWeek[day];
     let yyyy = today.getFullYear();
    
     let currentTime = new this.Date();
     let hour = currentTime.getHours();
     let minutes = currentTime.getMinutes();
     let seconds = currentTime.getSeconds();
         if(hour == 24){
             hour = 0;
         } else if(hour > 12){
             hour = hour - 0;
         }
         if(hour < 10){
             hour = "0" + hour;
         }
         if(minutes < 10){
             minutes = "0" + minutes;
         }
         if(seconds < 10){
             seconds = "0" + seconds;
         }
    
<<<<<<< #31_växla_mellan_månader
     today = dd + ' ' + currentMonth + ' ' + yyyy + '  |  ' + hour + ' : ' + minutes + ' : ' + seconds;
=======
     today = currentDay + '<br>' + currentMonth + ' ' + dd + ', ' + yyyy + '  |  ' + hour + ' : ' + minutes + ' : ' + seconds;
>>>>>>> master
     document.getElementById('display_date').innerHTML = today;
    }
    