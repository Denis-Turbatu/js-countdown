const startBtnElem = document.getElementById("btn-start");
const endBtnElem = document.getElementById("btn-end");
inizioSecondi = 0;

startBtnElem.addEventListener("click", function(){
    avviaCronometro();

    intervallo = setInterval(function () {
    inizioSecondi++;
    stampaOra(inizioSecondi);
}, 1000);
}); 

endBtnElem.addEventListener("click", function(){
    stopCronometro(avviaCronometro);
}); 