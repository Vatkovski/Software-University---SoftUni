import { expect } from "chai";
import { lookupChar } from "./03. Char Lookup.js";

describe('lookupChar', () => {
    it('should return undefined when first parameter is not a string', () => {
        expect(lookupChar(5, 0)).to.equal(undefined);
    });

    it('should return undefined when second parameter is not a number', () => {
        expect(lookupChar('test', '0')).to.equal(undefined);
    });

    it('should return undefined when second parameter is a floating point number', () => {
        expect(lookupChar('test', 1.1)).to.equal(undefined);
    });

    it('should return "Incorrect index" when index is negative', () => {
        expect(lookupChar('test', -1)).to.equal("Incorrect index");
    });

    it('should return "Incorrect index" when index is equal to string length', () => {
        expect(lookupChar('test', 4)).to.equal("Incorrect index");
    });

    it('should return "Incorrect index" when index is greater than string length', () => {
        expect(lookupChar('test', 5)).to.equal("Incorrect index");
    });

    it('should return correct character at specified index', () => {
        expect(lookupChar('test', 1)).to.equal('e');
    });
});
