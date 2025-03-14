const fs = require("fs");
const vm = require("vm");
const b = loadModule("F:/node_fundamentals/modules/custom_require_functions/math.js");

function loadModule(path) {
    const fileContent = fs.readFileSync(path).toString();
    return (function (send) {
        vm.runInNewContext(fileContent, { send, loadModule, console });
        return send;
    })({});
}
