// import fs from "node:fs";
import fs from "node:fs/promises";

// const content = fs.readFileSync("fs_module\\text.txt", "utf8");
// fs.readFile("./fs_module/text.txt", (err, data) => {
//     const content = data.toString();
//     console.log(content);
// });

const a = await fs.readFile("./fs_module/text.txt");
console.log(a.toString());
console.log("End");
