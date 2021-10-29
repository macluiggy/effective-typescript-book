var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Item 1
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
var Square = /** @class */ (function () {
    function Square(width) {
        this.width = width;
    }
    return Square;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this, width) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    return Rectangle;
}(Square));
// in this case scenario we indeed can use instanceof, because class Rectangle introduces both a type and a value
// whereas interface only introduce a type
function calculateArea(shape) {
    if (shape instanceof Rectangle) {
        shape;
        return shape.width * shape.height;
    }
    else {
        shape;
        return Math.pow(shape.width, 2); // OK
    }
}
function asNumber(val) {
    //    return val as number;
    return typeof (val) === 'number' ? val : Number(val) === NaN ? 'please enter a number' : Number(val);
}
console.log(asNumber(88));
console.log(asNumber('jd'));
var isLightOn = false;
var turnLightOn = function () { isLightOn = true; };
var turnLightOff = function () { isLightOn = false; };
function setLightSwitch(value) {
    switch (value) {
        case true:
            turnLightOn();
            break;
        case false:
            turnLightOff();
            break;
        default:
            console.log("I'm afraind i cant do that");
    }
}
// You Cannot Overload a Function Based on TypeScript Types
function add2(a, b) { return "" + (a + b); }
console.log(add(1, 2));
function calculateLength(_a) {
    var x = _a.x, y = _a.y;
    return Math.sqrt(x * x + y * y);
}
//como tanto NamedVector y Vector2D tienen las propiedades x, y y ambas son de typo numero
//typescript tomara a la propiedad NamedVector como correcta, aun cuando tiene una propiedad de
//mas
var v = { x: 3, y: 4, name: 'Zee' };
calculateLength(v);
var v2 = { x: 2, y: 1 };
calculateLength(v2);
//
function normalize(v) {
    var x = v.x, y = v.y, z = v.z;
    //dado que la funcion siguiente toma un objeto con dos o mas propiedades, typescript no detectara
    //el error, que el que esta funcion usa 3 propiedades, debido a que n propiedades definidas en un
    //typo/interface n o mas propiedades deben haber, siendo que tambien las propiedades tienen
    //que tener el mismo nombre tanto en el parametro como en el argumento
    var length = calculateLength(v);
    return {
        x: x / length,
        y: y / length,
        z: z / length
    };
}
normalize({ x: 1, z: 2, y: 3 });
var userx = { a: 'dd' };
//userx.er
function calculateLengthL1(v) {
    /*let length = 0;
    for (const axis of Object.keys(v)) {
        //dado que v puede tener mas propiedades en el argumento que en el parametro
        //esta puede tener una o mas con tipo diferente al establecido en Vector3D
        //es por ese motivo que typescript considera a axis como typo any, ya que aqui se
        //hace una labaza de propiedades. TypeScript no tiene motivo para creer que v[axis]
        //es un numero
        const coord = v[axis]
        length += Math.abs(coord)
    }
    return length*/
    var x = v.x, y = v.y, z = v.z;
    return Math.abs(x) + Math.abs(y) + Math.abs(z);
    /*for (let axis in v) {
        const cord = v[axis]
    }*/
}
var C = /** @class */ (function () {
    function C(foo) {
        this.foo = foo;
    }
    return C;
}());
var c = new C('instance of C');
// aqui esta clase se esta tomando como un typo, esto conlleva a que un objeto pueda ser definido
// como typo C como se muestra en la variable d, ya que esta tiene la misma estructura que la 
// clase C => { foo: string } => this.foo => d.foo = 'string'
var d = { foo: 'object literal' };
function getAuthors(database) {
    var authorRows = database.runQuery('SELECT FIRST, LAST FROM AUTHORS');
    console.log(authorRows)
    return authorRows.map(function (row) { return ({ first: row[0], last: row[1] }); });
}
module.exports = {
    getAuthors: getAuthors
};
