let evenOrOdd = require('../even-or-odd').evenOrOdd;

let expect = require('chai').expect;
let assert = require('chai').assert;
describe('isEvenOrOdd', () => {
    it('with a number parameter, should be return undefined', () => {
        expect(evenOrOdd(13)).to.equal(undefined, 'Function did not return correct result !');
    });
    it('with a object parameter,should be return undefined', () => {
        expect(evenOrOdd({name: 'pesho'})).to.equal(undefined, 'Function did not return correct result!');
    });
    it('with an even length string, should return correct result', () => {
        assert.equal(evenOrOdd("roar"), 'even', 'Function did not return correct result!');
    });
    it('with an odd length string,should return correct result', () => {
        assert.equal(evenOrOdd("pesho"), 'odd', "Function did not return correct result");
    })
    ;
});