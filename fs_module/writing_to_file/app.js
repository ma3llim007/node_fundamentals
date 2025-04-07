import { readFile, writeFile, appendFile } from "node:fs/promises";

// Write File
// writeFile("fs_module\\writing_to_file\\text.txt","sameer")

// Append File
// appendFile("fs_module\\writing_to_file\\text.txt"," pasha")

// Problem 01: Read From First File Then Copy the content into second file
// Reading File
// const firstFileContent = await readFile("fs_module\\writing_to_file\\first.txt");
// Writing In File
// writeFile("fs_module\\writing_to_file\\second.txt", firstFileContent);

// Problem 02: Read Image Then Copy
const imageContent = await readFile("E:\\downloads\\about_790a2d0373.jpg");
writeFile("fs_module\\writing_to_file\\imag.jpg", imageContent);