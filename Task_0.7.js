function celsiusToFahrenheit(temp) {
    const fahrenheit = (temp * 9/5) + 32;
    return `${fahrenheit} F`;
};

function fahrenheitToCelsius(temp) {
    const celsius = (temp -32 ) * 5/9;
    return `${celsius} C`;
}

console.log(celsiusToFahrenheit(0));
console.log(fahrenheitToCelsius(32));