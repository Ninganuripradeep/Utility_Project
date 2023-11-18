function generatehash(){


var input=document.getElementById('inputText').value;
var hash=CryptoJS.MD5(input).toString(CryptoJS.enc.Hex);
document.getElementById('outputText').value=hash;
}