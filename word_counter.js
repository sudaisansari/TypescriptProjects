"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process_1.stdin,
    output: process_1.stdout
});
function wordsCount(index) {
    const words = index.split(/\s+/).filter((word) => word.length).length;
    const characters = index.split(/\s+/).join('');
    console.log("Characters in paragraph are ", characters.length);
    console.log("Words in paragraph are ", words);
}
rl.question("Enter a paragraph : ", (userInput) => {
    wordsCount(userInput);
    rl.close();
    return;
});
