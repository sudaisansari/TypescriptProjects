import { stdin, stdout } from "process";
import readline from "readline";
import fs from "fs";

const rl = readline.createInterface({
    input: stdin,
    output: stdout,
});

function readTodos(): string[] {
    try {
        const data = fs.readFileSync("todos.json", "utf-8");
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

function writeTodos(todos: string[]): void {
    fs.writeFileSync("todos.json", JSON.stringify(todos), "utf-8");
}

function addTodo(todo: string): void {
    const todos = readTodos();
    todos.push(todo);
    writeTodos(todos);
    console.log("Todo added successfully.");
}

function displayTodos(): void {
    const todos = readTodos();
    console.log("Your Todos List:");
    todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo}`);
    });
}

function deleteTodo(index: number) {
    const todos = readTodos();
    todos.splice(index - 1 , 1);
    writeTodos(todos);
    console.log(todos)
}

console.log("1 to Add a todo , 2 to display a todo, 3 to delete a todo ");

rl.question("Select Option : ", (userTodo) => {
    const userInput = parseFloat(userTodo)
    switch (userInput) {
        case 1:
            rl.question("Enter a todo : ", (user) => {
                addTodo(user)
                rl.close()
            })
            break;
        case 2:
            displayTodos();
            rl.close()
            break;
        case 3:
            rl.question("Enter a todo number to delete : ", (input) => {
                const num = parseFloat(input)
                deleteTodo(num)
                rl.close()
            })
            break;
        default:
            console.log("Enter correct Value")

            rl.close();
            return;
    }
});
