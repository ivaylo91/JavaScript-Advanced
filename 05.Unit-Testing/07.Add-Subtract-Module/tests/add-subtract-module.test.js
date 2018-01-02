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
    it("should work with fractions", () => {
        calculator.add(3.14);
        calculator.subtract(1.13);
        expect(calculator.get()).to.be.closeTo(2.01, 0.001);
    });
    it("should work with negative numbers", () => {
        calculator.add(-4);
        calculator.subtract(-3);
        expect(calculator.get()).to.equal(-1);
    });
    it("should not add NaNs", () => {
        calculator.add('hello');
        calculator.add(2);
        expect(calculator.get()).to.be.NaN;
    });
    it("should not subtract NaNs", () => {
        calculator.add('hello');
        calculator.subtract(2);
        expect(calculator.get()).to.be.NaN;
    });
});