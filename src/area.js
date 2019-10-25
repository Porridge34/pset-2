console.log();
const input = require("readline-sync");
const width = input.question("Width: ");
const length = input.question("Length: ");
const inch_mm = 25.4
const area =width*inch_mm*length*inch_mm;
console.log("\n"+"A(n) "+width+"-by-"+length+"-inch sheet of paper has an area of "+area.toLocaleString(undefined, {maximumFractionDigits:2})+" square millimeter(s).");
