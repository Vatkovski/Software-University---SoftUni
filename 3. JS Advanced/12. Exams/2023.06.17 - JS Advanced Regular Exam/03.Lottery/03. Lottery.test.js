import { assert } from "chai";
import { lottery } from "./03. Lottery.js";

describe("Lottery", function () {
    describe("buyLotteryTicket", function () {
        it("should return the correct message when buying tickets", function () {
            assert.strictEqual(lottery.buyLotteryTicket(5, 3, true), "You bought 3 tickets for 15$.");
        });

        it("should throw an error when buy parameter is false", function () {
            assert.throw(() => {
                lottery.buyLotteryTicket(5, 3, false);
            }, Error, "Unable to buy lottery ticket!");
        });

        it("should throw an error for invalid input", function () {
            assert.throw(() => {
                lottery.buyLotteryTicket(-1, 3, true);
            }, Error, "Invalid input!");

            assert.throw(() => {
                lottery.buyLotteryTicket(5, -3, true);
            }, Error, "Invalid input!");

            assert.throw(() => {
                lottery.buyLotteryTicket("5", 3, true);
            }, Error, "Invalid input!");

            assert.throw(() => {
                lottery.buyLotteryTicket(5, 3, "true");
            }, Error, "Invalid input!");
        });
    });

    describe("checkTicket", function () {
        it("should return the correct message for winning tickets", function () {
            assert.strictEqual(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]), "You win the JACKPOT!!!");
        });

        it("should return the correct message for partially winning tickets", function () {
            assert.strictEqual(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 7]), "Congratulations you win, check your reward!");
        });

        it("should throw an error for invalid input", function () {
            assert.throw(() => {
                lottery.checkTicket([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]);
            }, Error, "Invalid input!");

            assert.throw(() => {
                lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5]);
            }, Error, "Invalid input!");

            assert.throw(() => {
                lottery.checkTicket("1, 2, 3, 4, 5, 6", [1, 2, 3, 4, 5, 6]);
            }, Error, "Invalid input!");

            assert.throw(() => {
                lottery.checkTicket([1, 2, 3, 4, 5, 6], "1, 2, 3, 4, 5, 6");
            }, Error, "Invalid input!");
        });
    });

    describe("secondChance", function () {
        it("should return the correct message for winning second chance ticket", function () {
            assert.strictEqual(lottery.secondChance(12345, [12345, 67890]), "You win our second chance prize!");
        });

        it("should return the correct message for losing second chance ticket", function () {
            assert.strictEqual(lottery.secondChance(54321, [12345, 67890]), "Sorry, your ticket didn't win!");
        });

        it("should throw an error for invalid input", function () {
            assert.throw(() => {
                lottery.secondChance("12345", [12345, 67890]);
            }, Error, "Invalid input!");

            assert.throw(() => {
                lottery.secondChance(12345, "12345, 67890");
            }, Error, "Invalid input!");
        });
    });
});
