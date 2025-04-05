import { readFile } from "node:fs/promises";

const filePath = process.argv[2];
const userEnterWord = process.argv[3];

const fileContent = await readFile(filePath, "utf-8");

const wordArray = fileContent.split(/[\W]/).filter((w) => w);

const wordCount = {};

if (userEnterWord) {
    wordArray.forEach((word) => {
        if (word.toLowerCase() === userEnterWord.toLowerCase()) {
            const key = word.toLowerCase();
            wordCount[key] = (wordCount[key] || 0) + 1;
        }
    });
} else {
    wordArray.forEach((word) => {
        if (word in wordCount) {
            wordCount[word] += 1;
        } else {
            wordCount[word] = 1;
        }
    });
}

console.table(wordCount);
