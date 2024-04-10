const btnStart = document.getElementById('start');
let inizioSecondi = 10;
const secondsTime = document.getElementById("second");
const resultElem = document.getElementById("result");
let intervallo;

btnStart.addEventListener("click", function(){
    avviaCountdown();

    intervallo = setInterval(function () {
    inizioSecondi--;
    stampaOra(inizioSecondi);
    if(inizioSecondi === 0){
        stopMessaggio();
    }
}, 1000);
}); 


