// Item 1
// Se recomienda tener activada la opcion noImplicitAny: true para que typescript detecte los errores en los typos de variables
// es apropiado dejarlo desactivado cuando se esta transicionando de un projecto a otro
function add(a: number, b: number) {
    return a + b
}
add(10, 23)

// strictNullChecks controla si null y undefined son valores permisibles en cada typon
const x: number | null = null //no se muestra error si strictNullChecks esta desactivado
// al igual que noImplicitAny, strictNullChecks no se activa si se esta emigrando en un projecto

//Item 3: Understand That Code Generation Is Independent of Types

let saluda = 'hello'
saluda = 1234 //typescript gives you a message error, that the original variable is a string, not a number
//but it won't prevent you from the build, they are just warnings of potencial error
//You cannot check typescript types at runtime
interface Square {
    width: number;
}
interface Rectangle extends Square {
    height: number
}
//depending of what argument we give it shape will be defined, for example, if we give it a variable 
// x = { width: 12 } it would be defined as Square, since it doesn't have the variable doesnt have the height
// property, but if we give it a variable y = { width: 13, height: 14 } it would be defined as Rectangle, since
// this variable have the height property
type Shape = Square | Rectangle;
function calculateShape(shape: Shape) {
    if ('height' in shape) {
        return shape.width * shape.height
    } else {
        return shape.width ** 2
    }
}
console.log(calculateShape({width: 12, height: 12}))
console.log(calculateShape({width: 12})) //j
