import { expect } from "chai";
import { findNewApartment } from "./03.Find Apartment.js";

describe("findNewApartment", function () {
    describe("isGoodLocation", function () {
        it("should throw an error if inputs are not a string and a boolean", function () {
            expect(() => findNewApartment.isGoodLocation(123, "not a boolean")).to.throw("Invalid input!");
        });

        it("should return 'This location is not suitable for you.' if city is not 'Sofia', 'Plovdiv', or 'Varna'", function () {
            expect(findNewApartment.isGoodLocation("London", true)).to.equal("This location is not suitable for you.");
        });

        it("should return 'There is no public transport in area.' if nearPublicTransportation is false", function () {
            expect(findNewApartment.isGoodLocation("Sofia", false)).to.equal("There is no public transport in area.");
        });

        it("should return 'You can go on home tour!' if city is 'Sofia', 'Plovdiv', or 'Varna' and nearPublicTransportation is true", function () {
            expect(findNewApartment.isGoodLocation("Sofia", true)).to.equal("You can go on home tour!");
        });
    });

    describe("isLargeEnough", function () {
        it("should throw an error if apartments is not an array or minimalSquareMeters is not a number or apartments is empty", function () {
            expect(() => findNewApartment.isLargeEnough("not an array", 50)).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough([], 50)).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough([40, 50, 60], "not a number")).to.throw("Invalid input!");
        });

        it("should return an array of apartments that are equal to or larger than minimalSquareMeters", function () {
            expect(findNewApartment.isLargeEnough([40, 50, 60], 50)).to.equal("50, 60");
        });
    });

    describe("isItAffordable", function () {
        it("should throw an error if price or budget are not numbers or are less than or equal to 0", function () {
            expect(() => findNewApartment.isItAffordable("not a number", 100000)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(100000, "not a number")).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(-100000, 100000)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(100000, -100000)).to.throw("Invalid input!");
        });

        it("should return 'You don't have enough money for this house!' if budget - price is less than 0", function () {
            expect(findNewApartment.isItAffordable(100000, 50000)).to.equal("You don't have enough money for this house!");
        });

        it("should return 'You can afford this home!' if budget - price is greater than or equal to 0", function () {
            expect(findNewApartment.isItAffordable(50000, 100000)).to.equal("You can afford this home!");
        });
    });
});