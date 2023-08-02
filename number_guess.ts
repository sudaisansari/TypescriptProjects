import { stdin, stdout } from "process";
import readline from "readline"
import chalk from "chalk";

const rl = readline.createInterface({
    input: stdin,
    output: stdout
})

const randomNumber = Math.floor(Math.random() * 10);
let attempts: number = 4;

function takeUserInput() {
    rl.question("Guess a number : ", (userInput) => {
        const guessedNum = parseFloat(userInput)
        if (isNaN(guessedNum)) {
            takeUserInput();
            return;
        }

        if (guessedNum === randomNumber) {
            console.log(chalk.blue("You Guessed a right number"))
            console.log(`Random number ${randomNumber} & Guessed number ${guessedNum}`)
        }
        else {
            attempts--;
            if (attempts > 0) {
                console.log(`Incorrect guess. You have ${attempts} attempts left.`);
                takeUserInput();
            } else {
                console.log("You've exhausted all attempts. Game over.");
                console.log(`The correct number was ${randomNumber}.`);
                rl.close();
            }
        }
    })
}
takeUserInput();




