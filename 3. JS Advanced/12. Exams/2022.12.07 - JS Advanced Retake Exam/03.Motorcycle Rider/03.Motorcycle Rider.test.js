import { expect } from "chai";
import { motorcycleRider } from "./03.Motorcycle Rider.js";

describe("motorcycleRider", function () {
    describe("licenseRestriction", function () {
        it("should return correct license restriction information", function () {
            expect(motorcycleRider.licenseRestriction("AM")).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
            expect(motorcycleRider.licenseRestriction("A1")).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
            expect(motorcycleRider.licenseRestriction("A2")).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
            expect(motorcycleRider.licenseRestriction("A")).to.equal('No motorcycle restrictions, and the minimum age is 24.');
        });

        it("should throw an error for invalid category", function () {
            expect(() => motorcycleRider.licenseRestriction("B")).to.throw("Invalid Information!");
        });
    });

    describe("motorcycleShowroom", function () {
        it("should return correct number of available motorcycles", function () {
            expect(motorcycleRider.motorcycleShowroom(["125", "250", "600"], 250)).to.equal('There are 2 available motorcycles matching your criteria!');
        });

        it("should throw an error for invalid parameters", function () {
            expect(() => motorcycleRider.motorcycleShowroom("125", 250)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom([], 250)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom(["125", "250", "600"], 49)).to.throw("Invalid Information!");
        });
    });

    describe("otherSpendings", function () {
        it("should return correct total price for equipment and consumables", function () {
            expect(motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], true)).to.equal('You spend $540.00 for equipment and consumables with 10% discount!');
            expect(motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], false)).to.equal('You spend $600.00 for equipment and consumables!');
        });

        it("should throw an error for invalid parameters", function () {
            expect(() => motorcycleRider.otherSpendings("helmet", ["engine oil", "oil filter"], true)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings(["helmet", "jacked"], "engine oil", true)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], "true")).to.throw("Invalid Information!");
        });
    });
});
