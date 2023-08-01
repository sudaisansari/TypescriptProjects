"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function Calculator(val1, val2, operation) {
    switch (operation) {
        case "+":
            return val1 + val2;
        case "-":
            return val1 - val2;
        case "*":
            return val1 * val2;
        case "/":
            if (val2 !== 0) {
                return val1 / val2;
            }
            else {
                throw new Error("Divide by zero not possible");
            }
        case "%":
            return val1 % val2;
        default:
            throw new Error("Invalid Operator");
    }
}
rl.question("Enter 1st value : ", (userInput1) => {
    const value1 = parseFloat(userInput1);
    if (isNaN(value1)) {
        console.log("Enter a number value");
        rl.close();
        return;
    }
    rl.question("Enter 2nd value : ", (userInput2) => {
        const value2 = parseFloat(userInput2);
        if (isNaN(value2)) {
            console.log("Enter a number value");
            rl.close();
            return;
        }
        rl.question("Enter Operation to Perform (+ , - , * , / , %): ", (operation) => {
            if (operation !== "+" && operation !== "/" && operation !== "*" && operation !== "-" &&
                operation !== "%") {
                console.log("Enter given Operations");
                rl.close();
                return;
            }
            const result = Calculator(value1, value2, operation);
            console.log(result);
        });
    });
});
