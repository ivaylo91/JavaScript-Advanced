function assembleCar(initialCarParts) {
    let modifiedCar = {};
    let engine;
    if (initialCarParts.power <= 90) {
        engine = {
            power: 90,
            volume: 1800
        }
    } else if (initialCarParts.power <= 120) {

        engine = {
            power: 120,
            volume: 2400
        }
    } else if (initialCarParts.power <= 200) {

        engine = {
            power: 200,
            volume: 3500
        }
    }
    let wheels = [];

    if (initialCarParts.wheelSize % 2 === 0) {

        initialCarParts.wheelSize--;
    }
    for (let i = 0; i < 4; i++) {
        wheels.push(initialCarParts.wheelSize);
    }
    modifiedCar.model = initialCarParts.model;
    modifiedCar.engine = engine;
    modifiedCar.carrige = {
        type: initialCarParts.type,
        color: initialCarParts.color
    };
    modifiedCar.wheelSize = wheels;

    return modifiedCar;
}

console.log(assembleCar({
    model: 'Opel Vectra',
    power: 110,
    type: 'hatchback',
    color: 'blue',
    wheelSize: 17
}));