let createCalculator = require('../add-substract-module').createCalculator;

let expect = require('chai').expect;

describe("Calculator maker", () => {

    let calculator;

    beforeEach(() => {
        calculator = createCalculator();
    });

    it("should return an object", () => {
        expect(typeof  calculator).to.equal("object");
    });
    it("should add", () => {
        calculator.add(3);
        calculator.add(5);
        expect(calculator.get()).to.equal(8);
    });
    it("should subtract", () => {
        calculator.add(5);
        calculator.add(6);
        calculator.subtract(2);
        expect(calculator.get()).to.equal(9);
    });
});