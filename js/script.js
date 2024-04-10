const btnStart = document.getElementById('start');
let inizioSecondi = 1;
const secondsTime = document.getElementById("second");
console.log(secondsTime);

btnStart.addEventListener("click", function(){
    avviaCountdown();
    setInterval(function () {
            stampaOra(inizioSecondi);
            console.log(inizioSecondi);
            inizioSecondi++;
        }, 1000);    
    
}); 