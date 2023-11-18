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
    if(inputformatvalue==="meter" && outputformatvalue==="kilometer"){
        output.value=(input.value)*0.001;

    }else if(inputformatvalue==="kilometer" && outputformatvalue==="meter"){
        output.value=(input.value)*1000;

}else if(inputformatvalue==="kilometer" && outputformatvalue==="feet"){
    output.value=(input.value)*3280.8;
}else if(inputformatvalue==="meter" && outputformatvalue==="feet"){
    output.value=(input.value)*3.280;
}else if(inputformatvalue==="feet" && outputformatvalue==="meter"){
    output.value=(input.value)*0.305;
}else if(inputformatvalue==="feet" && outputformatvalue==="kilometer"){
    output.value=(input.value)*0.000305;
}
else{
    output.value="invalid conversion";
}
}