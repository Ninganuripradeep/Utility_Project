function generatehash(){
    var input=document.getElementById('inputText').value;
    
    var hash=CryptoJS.SHA256(input).toString(CryptoJS.enc.Hex);
    document.getElementById('outputText').value=hash;
}