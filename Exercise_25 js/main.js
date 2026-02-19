// Spread Operator
const originalNumbers = [1,2,3];

const newValue = [...originalNumbers,4,5,6];
console.log(newValue);

// Result Operator

const multiplyNumbers = (...anyNumbers) => {
    return anyNumbers.reduce((acc,number) => acc * number,1);
} 

const product = multiplyNumbers(2,4,6,1,5);
console.log(product);
