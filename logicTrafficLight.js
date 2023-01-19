const LIGHTS = {
    red: 'red',
    yellow: 'yellow',
    green: 'green',
};

const CLASSES_BY_LIGHT = {
    [LIGHTS.red]: 'trafficLight-red',
    [LIGHTS.yellow]: 'trafficLight-yellow',
    [LIGHTS.green]: 'trafficLight-green'
};

const NEXT_LIGHT_BY_LIGHT = {
    [LIGHTS.red]: LIGHTS.green,
    [LIGHTS.yellow]: LIGHTS.red,
    [LIGHTS.green]: LIGHTS.yellow,
};

let currentLight = LIGHTS.red;

function switchLight(trafficLight) {
    const currentClass = CLASSES_BY_LIGHT[currentLight];
    const nextLight = NEXT_LIGHT_BY_LIGHT[currentLight];
    const nextClass = CLASSES_BY_LIGHT[nextLight];

    currentLight = NEXT_LIGHT_BY_LIGHT[currentLight];
    trafficLight.classList.replace(currentClass, nextClass);
}

function initLight(trafficLight) {
    trafficLight.classList.add(CLASSES_BY_LIGHT[currentLight]);
}