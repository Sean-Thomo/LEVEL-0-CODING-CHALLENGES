function maxNumber (a, b, c){
    var maxValue = 0;
    if (a > b){
        maxValue = a;
    } else {
        maxValue = b;
    }
    if (c > maxValue) {
        maxValue = c
    }
    console.log(maxValue)
}

maxNumber(1,22,3)