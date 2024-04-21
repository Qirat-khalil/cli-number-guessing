#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);
let answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number"
    }
]);
if(answer.userGuessdeNumber === randomNumber){
    console.log("congratulation! you guessed a right number");
} else{
    console.log("sorry you guessed a wrong number");
}