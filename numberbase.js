var input=document.getElementById('input');

var output=document.getElementById('output');
var inputformat=document.getElementById('inputformat');
var outputformat=document.getElementById('outputformat');
input.addEventListener("keyup",Result);
inputformat.addEventListener("change",Result);
outputformat.addEventListener("change",Result);
function Result(){
    let inputvalue=parseInt(input.value)
    
    var inputformatvalue=inputformat.value;
    var outputformatvalue=outputformat.value;
    if(inputformatvalue=="decimal" && outputformatvalue=="binary"){
        output.value=inputvalue.toString(2);
    }
    else if(inputformatvalue=="decimal" && outputformatvalue=="octal"){
        output.value=inputvalue.toString(8);
    }
    else if(inputformatvalue=="decimal" && outputformatvalue=="hexadeci"){
        output.value=inputvalue.toString(16);
    }
    else if(inputformatvalue=="binary" && outputformatvalue=="decimal"){
        output.value=parseInt(inputvalue,2);

    }
    else if(inputformatvalue=="binary" && outputformatvalue=="octal"){
        let deci=parseInt(inputvalue,2);
        output.value=deci.toString(8);
    }
    else if(inputformatvalue=="binary" && outputformatvalue=="hexadeci"){
        let deci=parseInt(inputvalue,2);
        output.value=deci.toString(16);
    }else if(inputformatvalue=="octal" && outputformatvalue=="decimal"){
        output.value=parseInt(inputvalue,8);
    }
    else if(inputformatvalue=="octal" && outputformatvalue=="binary"){
        let deci=parseInt(inputvalue,8);
        output.value=deci.toString(2);

    }
    else if(inputformatvalue=="octal" && outputformatvalue=="hexadeci"){
        let deci=parseInt(inputvalue,8);
        output.value=deci.toString(2);
    }
    else if(inputformatvalue=="hexdeci" && outputformatvalue=="decimal"){
        output.value=parseInt(inputvalue,16);
    }
    else if(inputformatvalue=="hexadeci" && outputformatvalue=="binary"){
        let deci=parseInt(inputvalue,16);
        output.value=deci.toString(2);
    }
    else if(inputformatvalue=="hexadeci" && outputformatvalue=="octal"){
        let deci=parseInt(inputvalue,16);
        output.value=deci.toString(8);
    }

    else{
        output.value="invalid conversion";
    }
    }
