let timeinterval;
let timer=0;
let display=document.getElementById('display');
let start=document.getElementById('start');
let stop=document.getElementById('stop');
start.addEventListener('click',()=>{
    starttimer();
});
stop.addEventListener('click',()=>{
    stoptimer();
});
function starttimer(){
    start.disabled=true;
    stop.disabled=false;
    timeinterval=setInterval(()=>{
        timer++;
        display.textContent=timer;
    },1000

    )
}
function stoptimer(){
    start.disabled=false;
    stop.disabled=true;
    clearInterval(timeinterval);
}