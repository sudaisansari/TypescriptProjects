import { stdin, stdout } from "process";
import readline from "readline"

const rl = readline.createInterface({
    input : stdin,
    output : stdout
})

function wordsCount(index: string) {
    const words = index.split(/\s+/).filter((word) => word.length).length
    const characters = index.split(/\s+/).join('');

    console.log("Characters in paragraph are ", characters.length);
    console.log("Words in paragraph are ", words);
}

rl.question("Enter a paragraph : ", (userInput) => {
    wordsCount(userInput)
    rl.close()
    return;
})


