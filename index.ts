#! /usr/bin/env node
import inquirer from "inquirer";

// initialize user balace and pin code
let myBalance = 40000;
let myPin = 301707;

// Print Wellcome Message
console.log("Wellcome to code with Fahad - ATM Machine");

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"

    }
])
if(pinAnswer.pin === myPin){
    console.log("Pin is Correct, Login Successfully!");
   // console.log(`Current Account Balance is ${myBalance}`)

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["Withdraw Amount","Check Balance"]

        }
    ])
    if(operationAns.operation === "Withdraw Amount"){
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the Amount to Withdraw:"
            }
        ])
        if(amountAns.amount > myBalance){
            console.log("Insufficent Balance");
        }
        else{
            myBalance -=amountAns.amount;
            console.log(`${amountAns.amount} Withdraw Successfully`);
            console.log(`Your Remaning Balance is:${myBalance}`)
        }
    }
    else if (operationAns.operation === "Check Balance"){
        console.log(`Your Account Balance is: ${myBalance}`);

    }
}
else{
    console.log("Pin is incorrect, Try Again!");
}