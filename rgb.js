let red=document.getElementById('red');
let green=document.getElementById('green');
let blue=document.getElementById('blue');
const hex=document.getElementById('hex');
function rgbtohex(){
    redvalue=parseInt(red.value);
    greenvalue=parseInt(green.value);
    bluevalue=parseInt(blue.value);
    let r=convert(redvalue);
    let g=convert(greenvalue);
    let b=convert(bluevalue);
    let output="#"+r+g+b;
    
    document.getElementById("hex").value=output;
    
    function convert(rgb){
        let ans=(rgb).toString(16);
        return ans;
    }
    document.body.style.backgroundColor=output;
}

function hextorgb(){
    
    hexvalue=hex.value;
    let hexcolor=hexvalue.replace('#','');
    let r=parseInt(hexcolor.substring(0,2),16);
    let g=parseInt(hexcolor.substring(2,4),16);
    let b=parseInt(hexcolor.substring(4,6),16);
    red.value=r;
    green.value=g;
    blue.value=b;
    document.body.style.backgroundColor =`rgb(${r}, ${g}, ${b})`;


}