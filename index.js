'use strict';

let titleTime = document.querySelector('.title_time'),
firstL = document.querySelector('.first_light'),
secondL = document.querySelector('.second_light'),
thirdL = document.querySelector('.third_light'),
btn = document.querySelector('.js-btn');

btn.addEventListener('click', () => {
    startRandomLightRorG(2,4);
    Timer();
});


function Timer() {
    let i = 5;
    secondL.classList.remove('trafficLight-yellow');
    let timerTraf = setTimeout(function timer(){
        if (i !== 0) {
            titleTime.innerHTML = i;
            i--;
            if (i < 1) {
                yellowLight();
            }
            timerTraf = setTimeout(timer, 1000);
        } else {
        timerTraf = setTimeout(timer, 1000);
        switchLights();
        clearTimeout(timerTraf);}
        return;
    }, 0);
}

function startRandomLightRorG(min, max){
    let rndm = Math.random()*(max-min) + min;
    rndm = Math.floor(rndm);
    if (rndm === 2) {
        console.log('RED');
        firstL.classList.toggle('trafficLight-red');
    } if (rndm === 3) {
        console.log('GREEN');
        thirdL.classList.toggle('trafficLight-green');
    }
    console.log(rndm);
    return;
}

function switchLights(){
    let switchTraf = setTimeout(function switched(){
    firstL.classList.toggle('trafficLight-red');
    thirdL.classList.toggle('trafficLight-green');
    Timer();
    return switchLights;
    }, 500);
}

function yellowLight(){
    secondL.classList.add('trafficLight-yellow');
    titleTime.innerHTML = '';
}