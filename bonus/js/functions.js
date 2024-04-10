function avviaCronometro(){
    setInterval(function(){}, 10000);
}

function stopCronometro() {
    console.log("Ho fermato tutto!");
    clearInterval(avviaCronometro);
}


function stampaOra(s) {
    let updateSecond = document.getElementById("second").innerText = "0" + s.toString();
    if(parseInt(updateSecond) > 9){
        updateSecond = document.getElementById("second").innerText = s.toString();
    }
}