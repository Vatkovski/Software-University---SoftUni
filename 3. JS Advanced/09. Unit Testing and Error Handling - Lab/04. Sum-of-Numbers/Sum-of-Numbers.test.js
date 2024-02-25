import { expect } from "chai";
import { assert } from "chai";
import { sum } from "./Sum-of-Numbers.js"

describe("sum", function () {
    it("should sum the numbers in array", () => {
        expect(sum([1, 2, 3])).to.be.equal(6);
    });

    it("should return 0 if we pass empty array", () => {
        expect(sum([])).to.be.equal(0);
    });

    it("should return NaN if we pass string parameters", () => {
        assert.isNaN(sum(['toni', '12']));
    });
})