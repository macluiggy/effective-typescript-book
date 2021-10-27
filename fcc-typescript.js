var birthdayGreeter = function (name, age) {
    "Happy birthday " + name + ", you are now " + age + " years old";
};
var birthdayHero = 'Jane User';
var age = 22;
console.log(birthdayGreeter(birthdayHero, age));
var value = 3433;
var someValue = value;
var und = undefined;
var nulll = null;
var operateNumbers = function (x, y, operation) {
    return {
        multiply: x * y,
        divide: y === 0 ? 'cant divide by zero' : x / y,
        subtract: x - y,
        add: x + y
    }[operation];
};
console.log(operateNumbers(2, 4, 'multiply'));
console.log(operateNumbers(2, 0, 'divide'));
console.log(operateNumbers(2, 4, 'subtract'));
console.log(operateNumbers(2, 4, 'add'));
