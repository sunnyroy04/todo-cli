// const { Command } = require('commander');
import { Command } from 'commander';
const program = new Command();
// const fs = require('fs');
import fs from 'fs';
import chalk from 'chalk';


const path = './todo.txt';


const readTodo = () => {
    try {
        const data = fs.readFileSync(path, 'utf-8');
        return data.split('\n').filter(line => line.trim() !== '');

    } catch (error) {

        if (error.code === 'ENOENT') {

            return [];
        } else {

            throw error;
        }

    }

};
const saveTodo = (todos) => {

    const data = todos.join('\n');
    fs.writeFileSync(path, data);

};



program.name('todo')
    .description('this CLI makes todo for you')
    .version('0.8.0')

program.command('add')
    .description('Lets you to add the todo')
    .argument('<string>', 'add your todo')
    .action((todo) => {

        let todos = readTodo();
        todos.push(todo);
        saveTodo(todos);

        console.log(chalk.red.bold(`Todo added: ${todo}`))
    })


    program.command('Detail')
    .description('Detail about this project')
    .action(() => {
        console.log(chalk.blue.bold(`
        📌 Todo CLI Project

        This is a simple command-line interface (CLI) Todo List application built with Node.js. 
        It allows users to manage their tasks efficiently with the following features:

        ✅ Add new tasks using the 'add' command.
        📜 View all tasks using the 'show' command.
        ❌ Delete the last task using the 'delete' command.
        ✏️ Edit existing tasks using the 'edit' command.
        ✅ Mark tasks as completed using the 'complete' command.
        
        Usage:
        - To add a task: todo add "Buy groceries"
        - To view tasks: todo show
        - To mark a task as complete: todo complete "Buy groceries"
        - To edit a task: todo edit "Old task" "New task"
        - To delete the last task: todo delete

        Built using:
        - Node.js
        - Commander.js for CLI functionality
        - Chalk for colored console output
        - File system (fs) for data persistence

        📌 Happy Task Managing!
        `));
    });

program.command('show')
    .description('show all your todos')
    .action(() => {

        let todos = readTodo();

        if (todos.length === 0) {
            console.log(chalk.yellow('Todo is Empty'));

            
        } else {
            todos.forEach((element, index) => {

                if (element.startsWith('[Completed]')) {

                    console.log(chalk.green(`${index + 1}: ${element}`));

                } else {

                    console.log(chalk.red(`${index + 1}: ${element}`));
                }
            });
        }

    })

program.command('delete')
    .description('delete your last todo')
    .action(() => {
        let todos = readTodo();

        if (todos.length !== 0) {
            todos.pop();
            console.log(chalk.blue('last todo deleted'));
            saveTodo(todos)

        } else {
            console.log(chalk.yellow(`Your todo is empty`));

        }
    });

program.command('edit')
    .description('Edit an existing todo')
    .argument('<old>', 'The old todo string to be replaced')
    .argument('<new>', 'The new todo string to replace the old one')
    .action((oldTodo, newTodo) => {
        let todos = readTodo();
        const index = todos.indexOf(oldTodo);
        if (index === -1) {
            console.log(chalk.yellow('Todo not found.'));
        } else {
            todos[index] = newTodo;
            saveTodo(todos);
            console.log(`Todo updated: "${oldTodo} to "${newTodo}"`);
        }
    });


program.command('complete')
    .description('.ark the todo as complete')
    .argument('<string>', 'add exact todo name to complete')
    .action((todo) => {
        let todos = readTodo();

        const index = todos.indexOf(todo);
        if (index === -1) {
            console.log(chalk.yellow('Todo not found.'));
        } else {
            todos[index] = `[Completed] ${todos[index]}`;
            console.log(chalk.green.bold(`${todos[index]}`))
            saveTodo(todos);
        }

    })


program.parse();    