//CHALLANGE 1
//marks input
let marks = ("Enter marks")
//declaring grading creteria 
if (marks >= 79) {
    console.log('A');
} else if (marks >=60 && marks < 79){
    console,loggg('B');
} else if (marks >= 49 && marks <59){
    console.log('C');
} else if ( marks >= 40 && marks < 49){
    console.log('D');
} else if (marks <40){
    console.log('E');
}
// giving output to the user
console.log(marks);


//CHALLANGE 2
// input speed of car
let speed = ("Enter speed")
// speed limit in km/h
const speedLimit = 70; 
// the number of km equivalent to a demerit point
const kmPerDemeritPoint = 5; 
let demeritPoints = 0;
if (speed <= speedLimit) {
  console.log("Ok");
} else {
  // calculating the number of demerit points depending on the speed
  demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
  if (demeritPoints > 12) {
    console.log("License suspended");
  } else {
    console.log(`Demerit points: ${demeritPoints}`);
  }
}


//CHALLANGE 3
// DefinING the tax, NHIF, and NSSF rates (above 32333 basic salary)
const TAX_RATE = 0.3
const NHIF_RATE = 2.1
const NSSF_RATE = 0.06

//the user's inputs for basic salary and benefits
const basicSalary = parseFloat(prompt("Enter basic salary: "));
const benefits = parseFloat(prompt("Enter benefit: "));

//Calculating the gross salary
const grossSalary = basicSalary + benefits;

// Calculating the tax, NHIF, and NSSF deductions 
const taxDeduction = grossSalary * TAX_RATE;
const nhifDeduction = grossSalary * NHIF_RATE;
const nssfDeduction = grossSalary * NSSF_RATE;

// Calculating the net salary 
const netSalary = grossSalary - taxDeduction - nhifDeduction - nssfDeduction;

// giving outputs
console.log(`Gross Salary: ${grossSalary}`);
console.log(`PAYE (Tax): ${taxDeduction}`);
console.log(`NHIF Deduction: ${nhifDeduction}`);
console.log(`NSSF Deduction: ${nssfDeduction}`);
console.log(`Net Salary: ${netSalary}`);

