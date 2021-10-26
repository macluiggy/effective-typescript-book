// Item 1
// Se recomienda tener activada la opcion noImplicitAny: true para que typescript detecte los errores en los typos de variables
// es apropiado dejarlo desactivado cuando se esta transicionando de un projecto a otro
function add(a, b) {
    return a + b;
}
add(10, 23);
// strictNullChecks controla si null y undefined son valores permisibles en cada typo
var x = null; //no se muestra error si strictNullChecks esta desactivado
// al igual que noImplicitAny, strictNullChecks no se activa si se esta emigrando en un projecto
