function updateCounts() {
    let inputtext = document.getElementById('inputtext').value;
    let wordcount = inputtext.split(/\s+/).filter(word => word !== '').length;
    document.getElementById('wordcount').textContent = "Word Count: " + wordcount;
    document.getElementById('charcount').textContent = "Character Count: " + inputtext.length;
}

function makeCapital() {
    let inputtext = document.getElementById('inputtext').value;
    let outputtext = document.getElementById('outputtext');
    outputtext.value = inputtext.toUpperCase();
}

function makeSmall() {
    let inputtext = document.getElementById('inputtext').value;
    let outputtext = document.getElementById('outputtext');
    outputtext.value = inputtext.toLowerCase();
}

function mirrorText() {
    let inputtext = document.getElementById('inputtext').value;
    let outputtext = document.getElementById('outputtext');
    outputtext.value = mirrorWords(inputtext);
}

function mirrorWords(text) {
    return text.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}