import { expect } from "chai";
import { petAdoptionAgency } from "./03. Pet Adoption Agency.js";

describe("petAdoptionAgency", function () {
    describe('isPetAvailable', function () {
        it("should throw an error if parameters are not of the correct type", function () {
            expect(() => petAdoptionAgency.isPetAvailable(123, "abc", "true")).to.throw("Invalid input");
        });

        it("should return a message if no pets are available", function () {
            expect(petAdoptionAgency.isPetAvailable("dog", 0, true)).to.equal("Sorry, there are no dog(s) available for adoption at the agency.");
        });

        it("should return a message if pets are available and vaccinated", function () {
            expect(petAdoptionAgency.isPetAvailable("cat", 2, true)).to.equal("Great! We have 2 vaccinated cat(s) available for adoption at the agency.");
        });

        it("should return a message if pets are available but not vaccinated", function () {
            expect(petAdoptionAgency.isPetAvailable("rabbit", 3, false)).to.equal("Great! We have 3 rabbit(s) available for adoption, but they need vaccination.");
        });
    });

    describe('getRecommendedPets', function () {
        it("should throw an error if parameters are not of the correct type", function () {
            expect(() => petAdoptionAgency.getRecommendedPets("abc", [])).to.throw("Invalid input");
        });

        it("should return a message if no pets match the desired traits", function () {
            const petList = [{ name: "Fido", traits: "friendly" }, { name: "Rex", traits: "energetic" }];
            expect(petAdoptionAgency.getRecommendedPets(petList, "quiet")).to.equal("Sorry, we currently have no recommended pets with the desired traits: quiet.");
        });

        it("should return a list of pet names if pets match the desired traits", function () {
            const petList = [{ name: "Fido", traits: "friendly" }, { name: "Rex", traits: "energetic" }, { name: "Bella", traits: "friendly" }];
            expect(petAdoptionAgency.getRecommendedPets(petList, "friendly")).to.equal("Recommended pets with the desired traits (friendly): Fido, Bella");
        });
    });

    describe('adoptPet', function () {
        it("should throw an error if parameters are not of the correct type", function () {
            expect(() => petAdoptionAgency.adoptPet(123, [])).to.throw("Invalid input");
        });

        it("should return a success message if parameters are of the correct type", function () {
            expect(petAdoptionAgency.adoptPet("Bella", "John")).to.equal("Congratulations, John! You have adopted Bella from the agency. Enjoy your time with your new furry friend!");
        });
    });
});
