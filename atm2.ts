#! /usr/bin/env node
import inquirer from "inquirer";

let mybalance =25000;
let mypin = 4747;

 let myAtm = await inquirer.prompt(
    [
        {
            name:"pin",
            type:"number",
            message:"enter your pin",

        }
    ]
 )

 if (myAtm.pin === mypin){
    console.log("your pin is correct");

    let operations = await inquirer.prompt(
        [
            {
                name:"options",
                type:"list",
                message:"choose action",
                choices:["checkbalance" , "withdraw" , "fastcash" ]
            }
        ]
    )

    if(operations.options === "checkbalance"){
        console.log(mybalance );

    } else if(operations.options === "withdraw"){

     let myamount = await inquirer.prompt(
        [
            {
                name: "amount",
                type: "number",
                message:"enter amount",
            }
        ]
     ) 
     
     if (myamount.amount <= mybalance){
        mybalance -= myamount.amount;
        console.log(`your remaning balance is ${mybalance}`)
     }
      else  {
        console.log(`insuficient balance`)

     }
    }
     else if (operations.options ==="fastcash") {
        let mycash = await inquirer.prompt(
            [
                {
                    name:"cash",
                    type:"list",
                    message:"choose any one",
                    choices:["1000" , "2000" , "3000"]
                }
            ]
        )
        if (mycash.cash ==="1000"){
            mybalance-= mycash.cash
            console.log(`your remaning balance is ${mybalance}`)
        } else if (mycash.cash === "2000"){
            mybalance-= mycash.cash
            console.log(`your remaning balance is ${mybalance}`)
        }else if (mycash.cash === "3000"){
            mybalance-= mycash.cash
            console.log (`your remaning balance is${mybalance}`);
     }
     }
 }

 else {
  console.log("your pin is wrong");
 };
 