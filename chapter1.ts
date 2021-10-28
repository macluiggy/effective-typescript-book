//Item 1
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
    isRectangle: boolean
    width: number;
}
interface Rectangle extends Square {
    kind: boolean
    height: number
}
//depending of what argument we give it shape will be defined, for example, if we give it a variable
// x = { width: 12 } it would be defined as Square, since it doesn't have the variable doesnt have the height
// property, but if we give it a variable y = { width: 13, height: 14 } it would be defined as Rectangle, since
// this variable have the height property
/*
type Shape = Square | Rectangle;
function calculateShape(shape: Shape) {
    if (shape.isRectangle) {
        return shape.width * shape.height
    } else {
        return shape.width ** 2
    }
}
console.log(calculateShape({width: 12, height: 12, isRectangle: true}))
console.log(calculateShape({width: 12, isRectangle: true})) //jdjdjdt//
 */

// i quiero you to erase me, please to something somethin
// hola, copiame a mi tambien

class Square {
    constructor(public width: number) {}
}
class Rectangle extends Square {
    constructor(public width: number, public height: number) {
        super(width);
    }
}
type Shape = Square | Rectangle;
// in this case scenario we indeed can use instanceof, because class Rectangle introduces both a type and a value
// whereas interface only introduce a type
function calculateArea(shape: Shape) {
    if (shape instanceof Rectangle) {
        shape;
        return shape.width * shape.height;
    } else {
        shape
        return shape.width ** 2 // OK
    }
}

function asNumber(val: number | string): number | string {
    //    return val as number;
    return typeof (val) === 'number' ? val : Number(val) === NaN ? 'please enter a number' : Number(val)
}
console.log(asNumber(88))
console.log(asNumber('jd'));
var isLightOn: boolean = false;
const turnLightOn = () => {isLightOn = true}
const turnLightOff = () => {isLightOn = false}
function setLightSwitch(value: boolean) {
    switch (value) {
        case true:
            turnLightOn()
            break
        case false:
            turnLightOff()
            break
        default:
            console.log(`I'm afraind i cant do that`)
    }
}

// You Cannot Overload a Function Based on TypeScript Types
function add2 (a: string| number, b: string| number): string { return `${a + b}`}
console.log(add(1, 2))





//Item 4: Get Comfortable with Structural Typing

interface Vector2D {
    x: number;
    y: number;
}


function calculateLength({x, y}: Vector2D): number {
    return Math.sqrt(x * x + y * y)
}
interface NamedVector {
    name: string;
    x: number;
    y: number;
}

//como tanto NamedVector y Vector2D tienen las propiedades x, y y ambas son de typo numero
//typescript tomara a la propiedad NamedVector como correcta, aun cuando tiene una propiedad de
//mas
const v: NamedVector = { x: 3, y: 4, name: 'Zee' };
calculateLength(v)
const v2: Vector2D = { x: 2, y: 1 }
calculateLength(v2)



//
