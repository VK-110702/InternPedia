function convertTemperature() {
    var inputTemp = parseFloat(document.getElementById("tempInput").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var result;

    if (fromUnit === "celsius") {
        if (toUnit === "celsius") {
            result = inputTemp;
        } else if (toUnit === "fahrenheit") {
            result = (inputTemp * 9/5) + 32;
        } else if (toUnit === "kelvin") {
            result = inputTemp + 273.15;
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            result = (inputTemp - 32) * 5/9;
        } else if (toUnit === "fahrenheit") {
            result = inputTemp;
        } else if (toUnit === "kelvin") {
            result = (inputTemp - 32) * 5/9 + 273.15;
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            result = inputTemp - 273.15;
        } else if (toUnit === "fahrenheit") {
            result = (inputTemp - 273.15) * 9/5 + 32;
        } else if (toUnit === "kelvin") {
            result = inputTemp;
        }
    }

    document.getElementById("result").innerHTML = result.toFixed(2);
}