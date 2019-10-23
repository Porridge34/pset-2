console.log();
const input = require("readline-sync");
const width = input.question("Width: ");
const length = input.question("Length: ");
const perimeter = Math.round((width*2.54+width*2.54+length*2.54+length*2.54)*100)/100;
console.log("\n"+"A(n) "+width+"-by-"+length+"-inch sheet of paper has a perimeter of "+perimeter.toLocaleString()+" centimeter(s).");
