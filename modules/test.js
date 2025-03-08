const { sum, product } = require("./math");

const user = {
    name: "Mohd Sameer",
    age: 88,
    address: {
        city: "NYC",
        state: "Uttar Pradesh",
    },
    hobbies: ["Teaching", "Coding", "TT"],
};

let address = user.address;
// console.log(user.address === address);

address.pinCode = 568737;
address.country = "India";

console.log(sum(2, 2, 2, 2, 2));
console.log(product(2, 2, 2, 2, 2));
