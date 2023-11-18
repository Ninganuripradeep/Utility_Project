var input=document.getElementById('input');
var output=document.getElementById('output');
var inputformat=document.getElementById('inputformat');
var outputformat=document.getElementById('outputformat');
input.addEventListener("keyup",Result);
inputformat.addEventListener("change",Result);
outputformat.addEventListener("change",Result);

function Result(){
    var inputformatvalue=inputformat.value;
    var outputformatvalue=outputformat.value;
    if(inputformatvalue==="kg" && outputformatvalue==="gram"){
        output.value=(input.value)*1000;

    }else if(inputformatvalue==="kg" && outputformatvalue==="pounds"){
        output.value=(input.value)*2.2;

}else if(inputformatvalue==="gram" && outputformatvalue==="kg"){
    output.value=(input.value)/1000;
}else if(inputformatvalue==="gram" && outputformatvalue==="pounds"){
    output.value=(input.value)*0.00220462;
}else if(inputformatvalue==="pounds" && outputformatvalue==="kg"){
    output.value=(input.value)*0.45359237;
}else if(inputformatvalue==="pounds" && outputformatvalue==="gram"){
    output.value=(input.value)*453.592;
}
else{
    output.value="invalid conversion";
}
}