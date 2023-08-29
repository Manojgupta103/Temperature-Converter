const CelsiusE1 = document.getElementById("Celcius");
const FahrenheitE2 = document.getElementById("Fahrenheit");
const KelvinE3 = document.getElementById("Kelvin");

function computeTemp() {
  const currentValue = +event.target.value;
  switch (event.target.name) {
    case "Celcius":
      KelvinE3.value = currentValue + 273.15;
      FahrenheitE2.value = currentValue * 1.8 + 32;
      break;
    case "Fahrenheit":
      KelvinE3.value = (currentValue -32)/1.8+273.15;
      CelsiusE1.value = (currentValue -32)/1.8;
      break;
    case "Kelvin":
      CelsiusE1.value = currentValue - 273.15;
      FahrenheitE2.value = (currentValue - 273.15) *1.8+32;
      break;
  }
  // console.log(event.target.value);
}