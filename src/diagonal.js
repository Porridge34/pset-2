console.log();
const input = require("readline-sync");
const width = input.question("Width: ");
const length = input.question("Length: ");
const diagonal = Math.hypot(width,length);
console.log("\n"+"A(n) "+width+"-by-"+length+"-inch sheet of paper has a diagonal of "+diagonal.toLocaleString(undefined, {maximumFractionDigits:2})+" inch(es).");
