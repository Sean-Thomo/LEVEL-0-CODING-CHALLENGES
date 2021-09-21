function celsiusToFahrenheit(temp) {
    const f = (temp * 9/5) + 32;
    return `${f} F`;
};

function fahrenheitToCelsius(temp) {
    const c = (temp -32 ) * 5/9;
    return `${c} C`;
}

console.log(celsiusToFahrenheit(0));
console.log(fahrenheitToCelsius(32));