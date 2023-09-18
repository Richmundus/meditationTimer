const timerFor = document.getElementById('timerForground');
const count = document.getElementById('count');
const press = document.getElementById('set');
let time;



function chime(){
    const audio = new Audio("gong1-94016.mp3");
    audio.play()
}

function perCentFill() {

    timerFor.style.width = `${(time / count.value) * 100}%`

    

}

function inervalTimer() {
    time = count.value;
    // setInterval(timer, 1000);
    

    function timer() {
        if (time >= 1) {

            time--;

            perCentFill()
            console.log(time)
            setTimeout(timer, 1000);
        }
        if (time === 0){
chime();
        }
    }
timer();
}

// press.addEventListener('click', perCentFill );
press.addEventListener('click', inervalTimer);