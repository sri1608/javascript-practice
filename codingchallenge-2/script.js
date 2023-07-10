/*Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement */


const marksHeight = 1.69;
const marksWeight = 78;
const johnHeight = 1.95;
const johnweight = 92;

const markBMI = marksWeight / (marksHeight * marksHeight);
const johnBMI = johnweight / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);

if(markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else{
    console.log(`John's (${johnBMI}) is higher than Mark's BMI (${markBMI})!`);
}
/*
const marksHeight = 1.88;
const marksWeight = 95;
const johnHeight = 1.76;
const johnweight = 85;

const markBMI = marksWeight / (marksHeight * marksHeight);
const johnBMI = johnweight / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);

if(markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else{
    console.log(`John's (${johnBMI}) is higher than Mark's BMI (${markBMI})!`);
}*/