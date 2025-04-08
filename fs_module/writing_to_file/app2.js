import { readFile, appendFile } from "node:fs/promises";

try {
    const contentBuffer = await readFile("test.png");
} catch (error) {
    appendFile("fs_module\\writing_to_file\\error.log", `\n ${new Date().toLocaleTimeString()} - ${error.message} : ${error.stack} \n`);
    console.log(error);
}
