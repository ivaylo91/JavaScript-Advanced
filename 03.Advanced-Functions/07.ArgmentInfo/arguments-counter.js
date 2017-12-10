function result() {

    let argumentTypes = {};

    for (let index = 0; index < arguments.length; index++) {
        let argumentValue = arguments[index];
        console.log(`${typeof  argumentValue} : ${argumentValue}`);

        if (!argumentTypes.hasOwnProperty(typeof  argumentValue)) {
            argumentTypes[typeof argumentValue] = 0;
        }
        argumentTypes[typeof argumentValue]++;
    }
    let sortedArr = [];
    for (let argumentType in argumentTypes) {

        if (argumentTypes.hasOwnProperty(argumentType)) {

            let element = argumentTypes[argumentType];
            sortedArr.push([argumentType, element]);
        }
    }
    sortedArr = sortedArr.sort((a, b) => {
        return b[1] - a[1];
    });
    for (let index = 0; index < sortedArr.length; index++) {

        let element = sortedArr[index];
        let argumentType = element[0];
        let argumentCount = element[1];
        console.log(`${argumentType} : ${argumentCount}`);
    }
}

result('cat', 42,420, function () {
    console.log("Hello World !")
});