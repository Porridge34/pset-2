console.log();
const input = require("readline-sync");
const width = input.question("Width: ");
const length = input.question("Length: ");
const inch_cm = 2.54;
const perimeter = Math.round((width*inch_cm+width*inch_cm+length*inch_cm+length*inch_cm)*100)/100;
console.log("\n"+"A(n) "+width+"-by-"+length+"-inch sheet of paper has a perimeter of "+perimeter.toLocaleString()+" centimeter(s).");
