let celsius = parseFloat(prompt("Introduce la temperatura en °C:"));
let fahrenheit = (celsius * 9/5) + 32;
document.write(`${celsius}°C es ${fahrenheit.toFixed(2)}°F<br>`);

let fahrenheit2 = parseFloat(prompt("Introduce la temperatura en °F:"));
let celsius2 = (fahrenheit2 - 32) * 5/9;
document.write(`${fahrenheit2}°F es ${celsius2.toFixed(2)}°C`);
