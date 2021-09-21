function numberToHoursAndMinutes(number){
    let hours,minutes;
    hours = Math.floor(number /60);
    minutes = number % 60;
    if (hours > 1 && minutes > 1) {
        console.log(hours +" hours, "+ minutes +" minutes.")
    }else if(hours > 1 && minutes == 1){
        console.log(hours +" hours, "+ minutes +" minute.")
    }else if(hours == 1 && minutes == 1){
        console.log(hours +" hour, "+ minutes +" minute.")
    }else if(hours == 1 && minutes > 1){
        console.log(hours +" hour, "+ minutes +" minutes.")
    }else if(hours > 1 && minutes == 0){
        console.log(hours  + " hours ")
    }else if(hours == 0 && minutes == 1) {
        console.log(minutes +" minute" )
    }else if(hours == 0 && minutes > 1) {
        console.log(minutes + " minutes")
    }   
    else{
        console.log(hours+ " hour")
    }
}

numberToHoursAndMinutes(71);
numberToHoursAndMinutes(133);
numberToHoursAndMinutes(121);
numberToHoursAndMinutes(1);
