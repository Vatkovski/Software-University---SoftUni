import { expect } from "chai";
import { rgbToHexColor } from "./06. RGB to Hex.js"


describe('rgbToHexColor', () => {
    it('should return white color', () => {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal("#FFFFFF")
    });

    it('should return black color', () => {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal("#000000")
    });

    it('should return blue color', () => {
        expect(rgbToHexColor(2, 65, 143)).to.be.equal("#02418F")
    });

    it('should return undefined when we don`t pass all the arguments', () => {
        expect(rgbToHexColor(2, 63)).to.be.undefined;
    });

    it('should return undefined for values out of range', () => {
        expect(rgbToHexColor(2, 65, -43)).to.be.undefined
        expect(rgbToHexColor(2, -1, 52)).to.be.undefined
        expect(rgbToHexColor(-56, 65, 100)).to.be.undefined
    });

    it('should return undefined for values bigger thatn 255', () => {
        expect(rgbToHexColor(2, 65, 5345)).to.be.undefined
        expect(rgbToHexColor(2, 6732, 52)).to.be.undefined
        expect(rgbToHexColor(7685, 65, 100)).to.be.undefined
    });

    it('should return undefined for values different than integer', () => {
        expect(rgbToHexColor(2, "Toni", -43)).to.be.undefined
        expect(rgbToHexColor([2, 178, 52])).to.be.undefined
        expect(rgbToHexColor({ age: 66 })).to.be.undefined
        expect(rgbToHexColor("2", "66")).to.be.undefined
    });
})