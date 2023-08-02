"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const readline_1 = __importDefault(require("readline"));
const chalk_1 = __importDefault(require("chalk"));
const rl = readline_1.default.createInterface({
    input: process_1.stdin,
    output: process_1.stdout
});
const randomNumber = Math.floor(Math.random() * 10);
let attempts = 4;
function takeUserInput() {
    rl.question("Guess a number : ", (userInput) => {
        const guessedNum = parseFloat(userInput);
        if (isNaN(guessedNum)) {
            takeUserInput();
            return;
        }
        if (guessedNum === randomNumber) {
            console.log(chalk_1.default.blue("You Guessed a right number"));
            console.log(`Random number ${randomNumber} & Guessed number ${guessedNum}`);
        }
        else {
            attempts--;
            if (attempts > 0) {
                console.log(`Incorrect guess. You have ${attempts} attempts left.`);
                takeUserInput();
            }
            else {
                console.log("You've exhausted all attempts. Game over.");
                console.log(`The correct number was ${randomNumber}.`);
                rl.close();
            }
        }
    });
}
takeUserInput();
