import { expect } from "chai";
import { weddingDay } from "./03.Wedding Day.js";

describe("Wedding Day", function () {
    describe("pickVenue", function () {
        it("should throw an error if invalid parameters are passed", function () {
            expect(() => weddingDay.pickVenue('150', '120', '')).to.throw("Invalid Information!");
        });
        it("should throw an error if location is not 'Varna'", function () {
            expect(() => weddingDay.pickVenue(150, 120, 'Sofia')).to.throw("The location of this venue is not in the correct area!");
        });
        it("should return a success message if requirements are met", function () {
            expect(weddingDay.pickVenue(150, 120, 'Varna')).to.equal("This venue meets the requirements, with capacity of 150 guests and 120$ cover.");
        });
        it("should return a failure message if requirements are not met", function () {
            expect(weddingDay.pickVenue(100, 130, 'Varna')).to.equal("This venue does not meet your requirements!");
        });
    });

    describe("otherSpendings", function () {
        it("should throw an error if invalid parameters are passed", function () {
            expect(() => weddingDay.otherSpendings('flowers', 'pictures', 'true')).to.throw("Invalid Information!");
        });
        it("should calculate total price with discount", function () {
            expect(weddingDay.otherSpendings(['flowers'], ['pictures'], true)).to.equal("You spend 1020$ for wedding decoration and photography with 15% discount!");
        });
        it("should calculate total price without discount", function () {
            expect(weddingDay.otherSpendings(['flowers'], ['pictures'], false)).to.equal("You spend 1200$ for wedding decoration and photography!");
        });
    });

    describe("tableDistribution", function () {
        it("should throw an error if invalid parameters are passed", function () {
            expect(() => weddingDay.tableDistribution('10', '2')).to.throw("Invalid Information!");
        });
        it("should suggest joining tables if people on table are less than 6", function () {
            expect(weddingDay.tableDistribution(10, 2)).to.equal("There is only 5 people on every table, you can join some tables.");
        });
        it("should return the number of tables and guests on table", function () {
            expect(weddingDay.tableDistribution(12, 2)).to.equal("You have 2 tables with 6 guests on table.");
        });
    });
});