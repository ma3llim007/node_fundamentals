import { rename, copyFile } from "node:fs/promises";

// Rename the file
// await rename("F:\\node_fundamentals\\fs_module\\rename\\jaan.txt", "F:\\node_fundamentals\\fs_module\\rename\\learningFlow.txt");

// Copy the file
await copyFile("fs_module\\writing_to_file\\error.log","fs_module\\rename\\error.log")