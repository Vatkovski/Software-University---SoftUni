import { expect } from "chai";
import { planYourTrip } from "./03.Plan Your Trip.js";

describe("planYourTrip", function () {
    describe("choosingDestination", function () {
        it("should throw an error for an invalid year", function () {
            expect(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 2023)).to.throw("Invalid Year!");
        });

        it("should throw an error for an invalid destination", function () {
            expect(() => planYourTrip.choosingDestination("Beach", "Winter", 2024)).to.throw("This destination is not what you are looking for.");
        });

        it("should return a message for the winter season at a Ski Resort", function () {
            const result = planYourTrip.choosingDestination("Ski Resort", "Winter", 2024);
            expect(result).to.equal("Great choice! The Winter is the perfect time to visit the Ski Resort.");
        });

        it("should return a message for non-winter seasons at a Ski Resort", function () {
            const result = planYourTrip.choosingDestination("Ski Resort", "Summer", 2024);
            expect(result).to.equal("Consider visiting during the Winter for the best experience at the Ski Resort.");
        });
    });

    describe("exploreOptions", function () {
        it("should throw an error for invalid activities parameter (not an array)", function () {
            expect(() => planYourTrip.exploreOptions("not an array", 1)).to.throw("Invalid Information!");
        });

        it("should throw an error for invalid activityIndex (not a number)", function () {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], "one")).to.throw("Invalid Information!");
        });

        it("should throw an error for invalid activityIndex (out of bounds)", function () {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], 3)).to.throw("Invalid Information!");
        });

        it("should throw an error for invalid activityIndex (not an integer)", function () {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], 1.5)).to.throw("Invalid Information!");
        });

        it("should return the updated activities array as a string after removing the specified index", function () {
            const result = planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 1);
            expect(result).to.equal("Skiing, Winter Hiking");
        });
    });

    describe("estimateExpenses", function () {
        it("should throw an error for invalid distanceInKilometers (not a number)", function () {
            expect(() => planYourTrip.estimateExpenses("not a number", 1.2)).to.throw("Invalid Information!");
        });

        it("should throw an error for invalid distanceInKilometers (negative number)", function () {
            expect(() => planYourTrip.estimateExpenses(-10, 1.2)).to.throw("Invalid Information!");
        });

        it("should throw an error for invalid distanceInKilometers (zero)", function () {
            expect(() => planYourTrip.estimateExpenses(0, 1.2)).to.throw("Invalid Information!");
        });

        it("should throw an error for invalid fuelCostPerLiter (not a number)", function () {
            expect(() => planYourTrip.estimateExpenses(100, "not a number")).to.throw("Invalid Information!");
        });

        it("should throw an error for invalid fuelCostPerLiter (negative number)", function () {
            expect(() => planYourTrip.estimateExpenses(100, -1.2)).to.throw("Invalid Information!");
        });

        it("should throw an error for invalid fuelCostPerLiter (zero)", function () {
            expect(() => planYourTrip.estimateExpenses(100, 0)).to.throw("Invalid Information!");
        });

        it("should return a budget-friendly message for total cost less than or equal to $500", function () {
            const result = planYourTrip.estimateExpenses(100, 4);
            expect(result).to.equal("The trip is budget-friendly, estimated cost is $400.00.");
        });

        it("should return a plan accordingly message for total cost greater than $500", function () {
            const result = planYourTrip.estimateExpenses(200, 3);
            expect(result).to.equal("The estimated cost for the trip is $600.00, plan accordingly.");
        });
    });
});