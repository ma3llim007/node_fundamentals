import fs from "node:fs";

const content = fs.readFileSync("fs_module\\text.txt", "utf8");
console.log(content);
