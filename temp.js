var input = document.getElementById('input');
var output = document.getElementById('output');
var inputformat = document.getElementById('inputformat');
var outputformat = document.getElementById('outputformat');
input.addEventListener("keyup", Result);
inputformat.addEventListener("change", Result);
outputformat.addEventListener("change", Result);

function Result() {
    var inputformatvalue = inputformat.value;
    var outputformatvalue = outputformat.value;
    if (inputformatvalue === "celsius" && outputformatvalue === "kelvin") {
        output.value = (input.value) + 273.15;

    } else if (inputformatvalue === "celsius" && outputformatvalue === "fahrenheit") {
        output.value = (1.8) * (input.value) + 32;

    } else if (inputformatvalue === "kelvin" && outputformatvalue === "celsius") {
        output.value = (input.value) - 273.15;
    } else if (inputformatvalue === "kelvin" && outputformatvalue === "fahrenheit") {
        output.value = ((input.value) - 273.15) * 1.8 + 32;
    } else if (inputformatvalue === "fahrenheit" && outputformatvalue === "celsius") {
        output.value = ((input.value) - 32) * (5 / 9);
    } else if (inputformatvalue === "fahrenheit" && outputformatvalue === "kelvin") {
        output.value = ((input.value) - 32) * (5 / 9) + 273.15;
    }
    else {
        output.value = "invalid conversion";
    }
}