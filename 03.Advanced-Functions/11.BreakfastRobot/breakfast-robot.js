let solution = (function () {
    let robot = {
        protein: 0,
        carbohydrates: 0,
        fat: 0,
        flavour: 0
    };
    let products = {
        Apple: {
            carbohydrates: 1,
            flavour: 2
        },
        Coke: {
            carbohydrates: 10,
            flavour: 20
        },
        Burger: {
            carbohydrates: 5,
            fat: 7,
            flavour: 3
        },
        Omlete: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        Cheverme: {
            protein: 10,
            carbohydrates: 10,
            fat: 10,
            flavour: 10
        }
    };
    return function (input) {
        let inputData = input.split(' ');
        let command = inputData[0];

        if (command === 'restock') {
            let microElement = inputData[1];
            let quantity = Number(inputData[2]);
            robot[microElement] += quantity;
            console.log("Success");
        } else if (command === 'report') {
            console.log(`protein = ${robot.protein} carbohydrates=${robot.carbohydrates} fat=${robot.fat} flavour=${robot.flavour}`);
        } else if (command === 'prepare') {
            let selectedProduct = inputData[1];
            let quantitySelectedProduct = Number(inputData[2]);
            let currentProductStats = products[selectedProduct];

            let canProductBeCooked = true;

            for (let microElement in currentProductStats) {
                if (currentProductStats.hasOwnProperty(microElement)) {
                    let microElementQuantity = currentProductStats[microElement];

                    if (robot[microElement] < microElementQuantity * quantitySelectedProduct) {

                        canProductBeCooked = false;
                        console.log(`Error: not enough ${microElement} in stock`);
                        break;
                    }
                }
            }
            if (canProductBeCooked) {
                for (let microElement in currentProductStats) {
                    if (currentProductStats.hasOwnProperty(microElement)) {
                        let microElementQuantity = currentProductStats[microElement];
                        robot[microElement] -= microElementQuantity * quantitySelectedProduct;
                    }
                }
                console.log("Success");
            }
        }
    }
})();

solution("restock carbohydrates 10");
solution("restock flavour 10 ");
solution("prepare apple 1");
solution("restock fat 10");
solution("prepare burger 1");
solution("report");
