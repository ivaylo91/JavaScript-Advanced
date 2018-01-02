let createCalculator = require('../add-substract-module').createCalculator;

let expect = require('chai').expect;

describe("Calculator maker", () => {
    it("should return an object", () => {
        let calculator = createCalculator();
        expect(typeof  calculator).to.equal("object");
    });
});