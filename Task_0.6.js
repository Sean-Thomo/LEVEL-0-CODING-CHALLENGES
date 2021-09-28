function maxNumber (num1, num2, num3){
    var maxNum = 0;
    if (num1 > num2){
        maxNum = num1;
    } else {
        maxNum = num2;
    }
    if (num3 > maxNum) {
        maxNum = num3;
    }
    return maxNum;
}

console.log(maxNumber(1,22,3));
console.log(maxNumber(1,2,3));
