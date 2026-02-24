const operater = (x, y, callback) => {
    return callback(x, y);

}
// callback functions that will do operation after outer function get x and y arguments.
const addition = (x, y) => {
    console.log(x + y);
}

const subtraction = (x, y) => {
    console.log(x = y);
}

const multiplication = (x, y) => {
    console.log(x * y);
}

const division = (x, y) => {
    console.log(x / y);

}


operater(50, 23, addition)
operater(99, 0.5, subtraction)
operater(40, 3, multiplication)
operater(50, 4, division)

