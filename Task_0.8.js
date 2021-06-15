function numberToHoursAndMinutes(number){
    var hours,minutes;
    hours = Math.floor(number /60);
    minutes = number % 60;
    console.log(hours +" hour(s), "+ minutes +(" minute(s)."))
}

numberToHoursAndMinutes(578);