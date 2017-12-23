function constructionCrew(obj) {
    let alchInTake = 0;

    if (obj.handsShaking === true) {
        isShaking();
    }

    function isShaking() {
        alchInTake += 0.1 * obj.weight * obj.experience;
        obj.handsShaking = false;
    }

    obj.bloodAlcoholLevel += alchInTake;
    return obj;
}

console.log(constructionCrew({
    weight: 95,
    experience: 3,
    bloodAlcoholLevel: 0,
    handsShaking: false
}));
console.log(constructionCrew({
    weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true
}));