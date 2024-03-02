import { expect } from "chai";
import { isOddOrEven } from "./02. Even Or Odd.js";

describe('isOddOrEven', () => {
    it('should return undefined when the input is not a string', () => {
        expect(isOddOrEven(123)).to.equal(undefined);
        expect(isOddOrEven({})).to.equal(undefined);
    });

    it('should return "even" when the length of the string is even', () => {
        expect(isOddOrEven("abcd")).to.equal("even");
    });

    it('should return "odd" when the length of the string is odd', () => {
        expect(isOddOrEven("abc")).to.equal("odd");
    });

    it('should return correct results with multiple different strings', () => {
        expect(isOddOrEven("a")).to.equal("odd");
        expect(isOddOrEven("ab")).to.equal("even");
        expect(isOddOrEven("abc")).to.equal("odd");
        expect(isOddOrEven("abcd")).to.equal("even");
    });
});
