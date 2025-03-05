const environmentVariables = process.env;
console.log(environmentVariables);
const port = environmentVariables.PORT || 3000;
console.log(port);