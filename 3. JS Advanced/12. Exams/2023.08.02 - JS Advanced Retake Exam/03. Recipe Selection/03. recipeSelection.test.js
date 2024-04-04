import { assert } from "chai";
import { recipeSelection } from "./03. recipeSelection.js";

describe("recipeSelection", function () {
    describe("isTypeSuitable", function () {
        it("should return correct message for Vegetarian and Meat", function () {
            assert.equal(recipeSelection.isTypeSuitable("Meat", "Vegetarian"), "This recipe is not suitable for vegetarians");
        });

        it("should return correct message for Vegan and Meat", function () {
            assert.equal(recipeSelection.isTypeSuitable("Meat", "Vegan"), "This recipe is not suitable for vegans");
        });

        it("should return correct message for Vegan and Dairy", function () {
            assert.equal(recipeSelection.isTypeSuitable("Dairy", "Vegan"), "This recipe is not suitable for vegans");
        });

        it("should return correct message for other combinations", function () {
            assert.equal(recipeSelection.isTypeSuitable("Fish", "Pescatarian"), "This recipe is suitable for your dietary restriction");
        });

        it("should throw error for invalid input", function () {
            assert.throws(() => recipeSelection.isTypeSuitable(123, "Vegetarian"), "Invalid input");
        });
    });

    describe("isItAffordable", function () {
        it("should return correct message when budget is less than price", function () {
            assert.equal(recipeSelection.isItAffordable(100, 50), "You don't have enough budget to afford this recipe");
        });

        it("should return correct message when budget is more than price", function () {
            assert.equal(recipeSelection.isItAffordable(50, 100), "Recipe ingredients bought. You have 50$ left");
        });

        it("should throw error for invalid input", function () {
            assert.throws(() => recipeSelection.isItAffordable("100", 50), "Invalid input");
        });
    });

    describe("getRecipesByCategory", function () {
        const recipes = [
            { title: "Spicy Tofu Stir-Fry", category: "Asian" },
            { title: "Chicken Tikka Masala", category: "Indian" },
            { title: "Beef Stroganoff", category: "Russian" }
        ];

        it("should return correct recipes for given category", function () {
            assert.deepEqual(recipeSelection.getRecipesByCategory(recipes, "Asian"), ["Spicy Tofu Stir-Fry"]);
        });

        it("should throw error for invalid input", function () {
            assert.throws(() => recipeSelection.getRecipesByCategory("recipes", "Asian"), "Invalid input");
        });
    });
});
