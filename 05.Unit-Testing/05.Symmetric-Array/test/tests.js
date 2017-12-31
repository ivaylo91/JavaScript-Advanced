let isSymmetric = require('../symmetric-array').isSymmetric;

let expect = require('chai').expect;

describe("Check symmetry", function () {
    describe("General Test", function () {
        it("should be a function", function () {
            expect(typeof isSymmetric).to.equal('function');
        });
    });
    describe("Value Tests", function () {
        it('should return true', function () {
            expect(isSymmetric([1, 2, 3, 3, 2, 1])).to.be.true;
        });
        it('should return false', function () {
            expect(isSymmetric([1, 2, 3, 4, 2, 1])).to.be.false;
        });
        it('should return true for [1,2,3,2,1]', function () {
            expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
        });
        it('should return false for [1,2,4,1]', function () {
            expect(isSymmetric([1, 2, 3, 4, 1])).to.be.false;
        });
        it('should return false for [1,2]', function () {
            expect(isSymmetric([1, 2])).to.be.false;
        });
        it('should return true for [1]', function () {
            expect(isSymmetric([1])).to.be.true;
        });
        it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function () {
            expect(isSymmetric([5, 'hi', {a: 5}, new Date(), {a: 5}, 'hi', 5])).to.be.true;
        });
    });
});