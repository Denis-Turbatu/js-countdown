function avviaCountdown(){
    setTimeout(messaggio, 10000);
}

function messaggio(){
    resultElem.innerHTML = "Buon Anno!";
}

function stopMessaggio() {
    console.log("Ho fermato tutto!");
    clearInterval(intervallo);
}


function stampaOra(s) {
    let updateSecond = document.getElementById("second").innerText = "0" + s.toString();
    if(parseInt(updateSecond) > 9){
        updateSecond = document.getElementById("second").innerText = s.toString();
    }
}