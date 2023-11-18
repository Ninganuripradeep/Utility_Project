function convertToHumanReadable(){
    const timestamp=document.getElementById('timestamp').value;
    const date=new Date(timestamp * 1000); 
    document.getElementById('humanReadableOutput').innerHTML=date.toUTCString();
}

function convertToEpoch(){
    const humanReadableTime=document.getElementById('humanReadableTime').value;
    const epochTime=new Date(humanReadableTime).getTime()/1000;
        document.getElementById('epochOutput').value=epochTime;

}