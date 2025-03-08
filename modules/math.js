const sum = (...numbers) => {
    return numbers.reduce((curr, acc) => curr + acc, 0);
};

const product = (...numbers) => {
    return numbers.reduce((curr, acc) => curr * acc);
};

module.exports.sum = sum;
module.exports.product = product;
