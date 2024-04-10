function avviaCountdown(){
    setTimeout(messaggio, 10000);
}

function messaggio(){
    console.log("Buon Anno!");
}

function stopMessaggio() {
    console.log("SOno attivo");
    clearInterval(setInterval, 10000);
}

function stampaOra(s) {
    let upadateSecond = document.getElementById("second").innerText = "0" + s.toString();
    if(parseInt(upadateSecond) > 9){
        upadateSecond = document.getElementById("second").innerText = s.toString();
    }
}