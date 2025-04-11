import fs, { watch } from "fs";
import { readFile } from "fs/promises";

watch("fs_module\\watch\\file.txt", async (eventType, fileName) => {
    if (eventType === "change") {
        const content = await readFile("fs_module\\watch\\file.txt", "utf-8");
        console.log(content);
    }
});
