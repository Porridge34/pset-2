console.log();
const input = require("readline-sync");
const username = input.question("Hi! What's your name?"+"\n");
if (username!=null){
  console.log("\n"+"Hello, "+username+"!");
}
