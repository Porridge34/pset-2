const input = require("readline-sync");
const width = input.question("Width: ");
const length = input.question("Length: ");
const area = Math.round(width*25.4*length*25.4*100)/100;
console.log("\n"+"A(n) "+width+"-by-"+length+"-inch sheet of paper has an area of "+area.toLocaleString()+" square millimeter(s).");
