"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const process_1 = require("process");
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process_1.stdin,
    output: process_1.stdout
});
const questions = [
    "1. How many stanzas are there in Pakistan national anthem? (One Two Three Four)",
    "2. What was the old name of PIA? (Orient Airways Qatar Airways Pak Airways Green Airways)",
    "3. What is the meaning of Pakistan? (Pak-Land Green-Land Holy-Land Unite-Pak)",
    "4. According to population, which is the largest city in Pakistan? (Lahore Quetta Islamabad Karachi)",
    "5. Where is the biggest shoes factory in Pakistan? (Lahore Quetta Islamabad Karachi)",
    "6. What is the name of the highest peak of Pakistan? (Mount Everest K2 K4 Himaliya)",
    "7. What is the national flower of Pakistan? (Jasmine Rose Daffodil Tulip)"
];
const answers = ["Three", "Orient Airways", "Holy-Land", "Karachi", "Lahore", "K2", "Jasmine"];
let Index = 0;
let correctAns = 0;
let wrongAns = 0;
console.log("Write full answer from given options");
const takeQuestion = () => {
    rl.question(questions[Index] + "\n>  ", (userInput) => {
        if (userInput.toLowerCase() == answers[Index].toLowerCase()) {
            console.log(chalk_1.default.blue("Correct Answer"));
            correctAns++;
        }
        else {
            console.log(chalk_1.default.red("Wrong Answer"));
            wrongAns++;
        }
        if (Index === questions.length - 1) {
            rl.close();
            console.log(`\t Correct Answers : ${correctAns} & Wrong Answers : ${wrongAns}`);
        }
        else {
            Index++;
            takeQuestion();
        }
    });
};
takeQuestion();
