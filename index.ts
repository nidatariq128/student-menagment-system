#! / user/bin/env node
import inquirer from "inquirer"

const randomNumber : number = Math.floor (10000 + Math.random() * 60000)

let myBlance : number = 0;

let answer = await inquirer.prompt([
    {
        name : "students",
        type : "input",
        message : "Enter student name:",
        validate : function(item){
            if(item.trim() !== ""){
                return true;
            }
            return "pleacse enter a non empty value.";
        },
    },
    {
        name : "courses",
        type : "list",
        message : " select the course to enrolled!",
        choices : ["Digital Marketing","HTML","Typescript","Metaverse","python"]
    }
]);

const tutionFee : {[key : string]: number}={
    "Digital Marketing" : 5000,
   "HTML" : 2000,
   "Typescript" : 6000,
   "Metaverse" : 5000,
   "python" : 8000,
};
console.log(`\n tutionFee : ${[answer.courses]}/-\n`);
console.log(`Blance : ${myBlance}\n`);


let paymentType = await inquirer.prompt ([
    {
        name : "payment",
        type : "list",
        message : "Select payment method:",
        choices: ["Bank Transfer","Easypaisa","jazzcash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Teansfer money:",
        validate: function(value) {
            if(value.trim() !== "") {
                return true;
            }
            return "pleacse enter a non empty value.";
        },
    }
]);
console.log(`\nYou select payment method ${paymentType.payment}\n`);

const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount)

if(tutionFees === paymentAmount){
    console.log(`Congratulations, you have successfully enrolled in ${answer.courses}.\n`)

let ans = await inquirer.prompt([
    {
        name : "select",
        type: "list",
        message: " What would you like to do next?",
        choices: ["View Status", "Exit"]
    }
])

if(ans.select ===  "View Status"){
    console.log("\n==========Status=========\n");
    console.log(`Student Name: ${answer.students}`);
    console.log(`Student ID: ${randomNumber}`);
    console.log(`Course: ${answer.courses}`);
    console.log(`Tution Fees paid: ${paymentAmount}`);
    console.log(`Blance: ${myBlance += paymentAmount}`);
}else{
    console.log("\nExiting Student Manigment System");
}

}else{
console.log("Invaled amount due to course.\n")
}



