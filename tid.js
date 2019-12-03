window.onload = refreshTime()
function refreshTime() {
    let month = new Array("January", "February", "March", "April", "May", "June", "July",    "August", "September", "October", "November", "December");
     let today = new Date();
     let dd = today.getDate();
     let mm = today.getMonth();
     let currentMonth = month[mm];
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
    
     today = currentMonth + ' ' + dd + ', ' + yyyy + '  |  ' + hour + ' : ' + minutes + ' : ' + seconds;
     document.getElementById('display_date').innerHTML = today;
     setInterval(refreshTime(), 1000);
    }
    refreshTime();