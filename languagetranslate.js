
const dropdown=document.querySelector('.translatorinput');
const dropdownOutput=document.querySelector('.translatoroutput');
const translate=document.querySelector('.btntranslate');
const inputValue=document.querySelector('.input');
translate.addEventListener('click',()=>{
    fetch(`https://api.mymemory.translated.net/get?q=`+inputValue.value+`&langpair=`+dropdown.value+'|'+dropdownOutput.value)
    .then((response)=>response.json())
    .then((json)=>{
        // document.querySelector('.out').removeAttribute('hidden');
        document.querySelector('.out').value=json.responseData.translatedText;
    })

})