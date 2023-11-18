function encode(){
    const inputText=document.getElementById('inputText').value;
    const outputText=document.getElementById('outputText');
    const encodedText=btoa(inputText);
    outputText.value=encodedText;
}
function decode(){
    const inputText=document.getElementById('inputText').value;
    const outputText=document.getElementById('outputText');
    const decodedText=atob(inputText);
outputText.value = decodedText;
    
}