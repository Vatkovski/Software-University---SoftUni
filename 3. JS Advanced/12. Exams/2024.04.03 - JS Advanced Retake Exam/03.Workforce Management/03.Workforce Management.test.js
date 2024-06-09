import { expect } from "chai";
import { workforceManagement } from "./03.Workforce Management.js";

describe("workforceManagement", function () {
    describe("recruitStaff", function () {
        it("should successfully recruit a Developer with 4 or more years of experience", function () {
            const result = workforceManagement.recruitStaff("John", "Developer", 5);
            expect(result).to.equal("John has been successfully recruited for the role of Developer.");
        });

        it("should not recruit a Developer with less than 4 years of experience", function () {
            const result = workforceManagement.recruitStaff("Jane", "Developer", 3);
            expect(result).to.equal("Jane is not suitable for this role.");
        });

        it("should throw an error if the role is not Developer", function () {
            expect(() => workforceManagement.recruitStaff("Jake", "Designer", 5)).to.throw("We are not currently hiring for this role.");
        });
    });

    describe("computeWages", function () {
        it("should compute wages correctly for hours less than or equal to 160", function () {
            const result = workforceManagement.computeWages(160);
            expect(result).to.equal(2880); // 160 * 18
        });

        it("should compute wages correctly with bonus for hours greater than 160", function () {
            const result = workforceManagement.computeWages(170);
            expect(result).to.equal(4530); // (170 * 18) + 1500
        });

        it("should throw an error if hoursWorked is not a number", function () {
            expect(() => workforceManagement.computeWages("a string")).to.throw("Invalid hours");
        });

        it("should throw an error if hoursWorked is a negative number", function () {
            expect(() => workforceManagement.computeWages(-10)).to.throw("Invalid hours");
        });
    });

    describe("dismissEmployee", function () {
        it("should dismiss an employee and return the updated workforce as a string", function () {
            const workforce = ["Petar", "Ivan", "George"];
            const result = workforceManagement.dismissEmployee(workforce, 1);
            expect(result).to.equal("Petar, George");
        });

        it("should throw an error if workforce is not an array", function () {
            expect(() => workforceManagement.dismissEmployee("not an array", 1)).to.throw("Invalid input");
        });

        it("should throw an error if employeeIndex is not a number", function () {
            const workforce = ["Petar", "Ivan", "George"];
            expect(() => workforceManagement.dismissEmployee(workforce, "a string")).to.throw("Invalid input");
        });

        it("should throw an error if employeeIndex is out of bounds", function () {
            const workforce = ["Petar", "Ivan", "George"];
            expect(() => workforceManagement.dismissEmployee(workforce, 3)).to.throw("Invalid input");
        });
    });
});
