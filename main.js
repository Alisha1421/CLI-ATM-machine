#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 25000;
let myPin = 1243;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!");
    let operatinAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"]
        }
    ]);
    if (operatinAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`your remaining balance is ${myBalance}`);
        }
    }
    else if (operatinAns.operation === "fast cash") {
        let fast = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Select the amount which you withdrawal",
                type: "list",
                choices: ["1000", "2000", "5000", "10000"]
            }
        ]);
        myBalance -= fast.fastCash;
        console.log(`you have successfully withdrawal ${fast.fastCash} \nyour remaining balance is ${myBalance}`);
    }
    else if (operatinAns.operation === "check balance")
        console.log(`your remaining balance is ${myBalance}`);
}
else {
    console.log("incorrect pin code");
}
