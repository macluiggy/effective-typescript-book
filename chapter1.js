// Item 1
// Se recomienda tener activada la opcion noImplicitAny: true para que typescript detecte los errores en los typos de variables
// es apropiado dejarlo desactivado cuando se esta transicionando de un projecto a otro
function add(a, b) {
    return a + b;
}
add(10, 23);
// strictNullChecks controla si null y undefined son valores permisibles en cada typon
var x = null; //no se muestra error si strictNullChecks esta desactivado
// al igual que noImplicitAny, strictNullChecks no se activa si se esta emigrando en un projecto
//Item 3: Understand That Code Generation Is Independent of Types
var saluda = 'hello';
saluda = 1234; //typescript gives you a message error, that the original variable is a string, not a number
function calculateShape(shape) {
    if ('height' in shape) {
        return shape.width * shape.height;
    }
    else {
        return Math.pow(shape.width, 2);
    }
}
console.log(calculateShape({ width: 12, height: 12 }));
console.log(calculateShape({ width: 12 }));
