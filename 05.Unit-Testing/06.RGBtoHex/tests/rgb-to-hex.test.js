let rgbToHexColor = require('../rgb-to-hex').rgbToHexColor;

let expect = require('chai').expect;

describe("Test rgbToHexColor function", function () {
    it("Should be return #FF9EAA for rgbToHex(255,158,170)", function () {
        expect(rgbToHexColor(255, 158, 170)).to.equal("#FF9EAA");
    });
    it("Should work with lower limit", function () {
        expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
    });
    it("Should work with upper limit", function () {
        expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
    });
    it("Should pad values with zeroes", function () {
        expect(rgbToHexColor(12, 13, 14)).to.equal("#0C0D0E");
    });
    it("Should be return undefined for negative values", function () {
        expect(rgbToHexColor(-1, 152, 186)).to.be.undefined;
    });
    it("Should be return undefined for float values", function () {
        expect(rgbToHexColor(3.14, 3.14, 152)).to.be.undefined;
    });
    it("Should be return undefined for value greater than 255", function () {
        expect(rgbToHexColor(256, 172, 222)).to.be.undefined;
    });
});