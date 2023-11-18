function generatehash(){
    var input=document.getElementById('inputText').value;
    var hash=CryptoJS.SHA512(input).toString(CryptoJS.enc.Hex);
    document.getElementById('outputText').value=hash;
}