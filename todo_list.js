"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const readline_1 = __importDefault(require("readline"));
const fs_1 = __importDefault(require("fs"));
const rl = readline_1.default.createInterface({
    input: process_1.stdin,
    output: process_1.stdout,
});
function readTodos() {
    try {
        const data = fs_1.default.readFileSync("todos.json", "utf-8");
        return JSON.parse(data);
    }
    catch (error) {
        return [];
    }
}
function writeTodos(todos) {
    fs_1.default.writeFileSync("todos.json", JSON.stringify(todos), "utf-8");
}
function addTodo(todo) {
    const todos = readTodos();
    todos.push(todo);
    writeTodos(todos);
    console.log("Todo added successfully.");
}
function displayTodos() {
    const todos = readTodos();
    console.log("Your Todos List:");
    todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo}`);
    });
}
function deleteTodo(index) {
    const todos = readTodos();
    todos.splice(index - 1, 1);
    writeTodos(todos);
    console.log(todos);
}
console.log("1 to Add a todo , 2 to display a todo, 3 to delete a todo ");
rl.question("Select Option : ", (userTodo) => {
    const userInput = parseFloat(userTodo);
    switch (userInput) {
        case 1:
            rl.question("Enter a todo : ", (user) => {
                addTodo(user);
                rl.close();
            });
            break;
        case 2:
            displayTodos();
            rl.close();
            break;
        case 3:
            rl.question("Enter a todo number to delete : ", (input) => {
                const num = parseFloat(input);
                deleteTodo(num);
                rl.close();
            });
            break;
        default:
            console.log("Enter correct Value");
            rl.close();
            return;
    }
});
