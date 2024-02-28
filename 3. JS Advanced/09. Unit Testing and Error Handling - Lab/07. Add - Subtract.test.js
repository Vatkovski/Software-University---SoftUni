import { expect } from "chai";
import { createCalculator } from "./07. Add - Subtract.js";

describe('createCalculator', () => {
    let calc = null;

    beforeEach(() => {
        calc = createCalculator();
    });

    it('should return an object', () => {
        expect(calc).to.be.an('object');
    });

    it('should have add, subtract and get methods', () => {
        expect(calc).to.have.property('add');
        expect(calc).to.have.property('subtract');
        expect(calc).to.have.property('get');
    });

    it('should add numbers correctly', () => {
        calc.add(5);
        expect(calc.get()).to.equal(5);
        calc.add('7');
        expect(calc.get()).to.equal(12);
    });

    it('should subtract numbers correctly', () => {
        calc.subtract(3);
        expect(calc.get()).to.equal(-3);
        calc.subtract('2');
        expect(calc.get()).to.equal(-5);
    });

    it('should not allow direct modification of the internal sum', () => {
        calc.value = 100;
        expect(calc.get()).to.not.equal(100);
    });
});