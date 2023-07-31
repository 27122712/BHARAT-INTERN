function convertTemperature() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const kelvinInput = document.getElementById("kelvin");

    const celsiusValue = parseFloat(celsiusInput.value);

    // Convert Celsius to Fahrenheit
    const fahrenheitValue = (celsiusValue * 9/5) + 32;
    fahrenheitInput.value = isNaN(fahrenheitValue) ? "" : fahrenheitValue.toFixed(2);

    // Convert Celsius to Kelvin
    const kelvinValue = celsiusValue + 273.15;
    kelvinInput.value = isNaN(kelvinValue) ? "" : kelvinValue.toFixed(2);
}
