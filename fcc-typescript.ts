const birthdayGreeter = (name: string, age: number): void => {//esto le dice a typescript que la funcion no tiene que devolver nada jajajjajajajajajajajajajajajajajjajajaajajaa
    `Happy birthday ${name}, you are now ${age} years old`
}

const birthdayHero = 'Jane User'
const age = 22
console.log(birthdayGreeter(birthdayHero, age))

const value = 3433
const someValue: number | string = value;

const und = undefined
const nulll = null

type Operator = 'multiply' | 'add' | 'divide' | 'subtract'
const operateNumbers = (x: number, y: number, operation: Operator): number | string => {
    return {
        multiply: x * y,
        divide: y === 0 ? 'cant divide by zero' : x / y,
        subtract: x - y,
        add: x + y,
    }[operation]
}

console.log(operateNumbers(2, 4, 'multiply'))
console.log(operateNumbers(2, 0, 'divide'))
console.log(operateNumbers(2, 4, 'subtract'))
console.log(operateNumbers(2, 4, 'add'))

interface User {
    name: string,
    age: number
}
interface User {
    name: string,
    age: number
}
type description = string
type description = number
const user: User = {
    name: 'luiggy',
    age: 23
}
