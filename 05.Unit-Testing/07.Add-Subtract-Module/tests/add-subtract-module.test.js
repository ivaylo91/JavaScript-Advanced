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
    it("should return 0 value when created.", () => {
        expect(calculator.get()).to.equal(0);
    });
});