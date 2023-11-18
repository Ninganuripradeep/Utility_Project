function encode() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    const encodedText = encodeURIComponent(inputText);
    outputText.value = encodedText;
}
function decode() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');

    const decodedText = decodeURIComponent(inputText);
    outputText.value = decodedText;

}