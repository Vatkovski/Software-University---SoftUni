import { assert } from "chai";
import { onlineStore } from "./onlineStore.js";

describe("onlineStore Tests", function () {
    describe("isProductAvailable()", function () {
        it("should return out of stock message when stockQuantity is less than or equal to 0", function () {
            let result = onlineStore.isProductAvailable("Camera", 0);
            assert.equal(result, "Sorry, Camera is currently out of stock.");
        });

        it("should return available message when stockQuantity is greater than 0", function () {
            let result = onlineStore.isProductAvailable("Camera", 10);
            assert.equal(result, "Great! Camera is available for purchase.");
        });

        it("should throw an error when invalid parameters are passed", function () {
            assert.throws(() => onlineStore.isProductAvailable(123, "Camera"), "Invalid input.");
        });
    });

    describe("canAffordProduct()", function () {
        it("should return insufficient funds message when accountBalance is less than productPrice", function () {
            let result = onlineStore.canAffordProduct(100, 50);
            assert.equal(result, "You don't have sufficient funds to buy this product.");
        });

        it("should return success message when accountBalance is greater than or equal to productPrice", function () {
            let result = onlineStore.canAffordProduct(50, 100);
            assert.equal(result, "Product purchased. Your remaining balance is $50.");
        });

        it("should throw an error when invalid parameters are passed", function () {
            assert.throws(() => onlineStore.canAffordProduct("Camera", 100), "Invalid input.");
        });
    });

    describe("getRecommendedProducts()", function () {
        const productList = [
            { name: "Camera", category: "Photography" },
            { name: "Laptop", category: "Electronics" },
            { name: "Phone", category: "Electronics" }
        ];

        it("should return recommended products when matching category is found", function () {
            let result = onlineStore.getRecommendedProducts(productList, "Electronics");
            assert.equal(result, "Recommended products in the Electronics category: Laptop, Phone");
        });

        it("should return no recommended products message when no matching category is found", function () {
            let result = onlineStore.getRecommendedProducts(productList, "Books");
            assert.equal(result, "Sorry, we currently have no recommended products in the Books category.");
        });

        it("should throw an error when invalid parameters are passed", function () {
            assert.throws(() => onlineStore.getRecommendedProducts("Camera", "Electronics"), "Invalid input.");
        });
    });
});
