function celsiusToFahrenheit(temp) {
    var f = (temp * 9/5) + 32;
    return f;
};

function fahrenheitToCelsius(temp) {
    var c = (temp -32 ) * 5/9;
    return c;
}

celsiusToFahrenheit(0);
fahrenheitToCelsius(32);
