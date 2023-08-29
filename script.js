function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    const unitFrom = document.getElementById("unitFrom").value;
    let result = "";

    if (unitFrom === "celsius") {
        const fahrenheit = (inputTemperature * 9/5) + 32;
        const kelvin = inputTemperature + 273.15;
        result = `${inputTemperature}°C is equal to ${fahrenheit.toFixed(2)}°F and ${kelvin.toFixed(2)} K`;
    } else if (unitFrom === "fahrenheit") {
        const celsius = (inputTemperature - 32) * 5/9;
        const kelvin = (inputTemperature - 32) * 5/9 + 273.15;
        result = `${inputTemperature}°F is equal to ${celsius.toFixed(2)}°C and ${kelvin.toFixed(2)} K`;
    } else if (unitFrom === "kelvin") {
        const celsius = inputTemperature - 273.15;
        const fahrenheit = (inputTemperature - 273.15) * 9/5 + 32;
        result = `${inputTemperature} K is equal to ${celsius.toFixed(2)}°C and ${fahrenheit.toFixed(2)}°F`;
    }

    document.getElementById("result").textContent = result;
}
