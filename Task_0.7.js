function celsiusToFahrenheit(temp) {
    var f = (temp * 9/5) + 32;
    return `${f} F`;
};

function fahrenheitToCelsius(temp) {
    var c = (temp -32 ) * 5/9;
    return `${c} C;
}

celsiusToFahrenheit(0);
fahrenheitToCelsius(32);
