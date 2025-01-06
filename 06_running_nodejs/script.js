const fs = require("fs");

const textContent = fs.readFileSync("./06_running_nodejs/text.txt");

console.log(textContent.toString());