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
saluda = 1234; //typescript gives you a message error, that the original variable is a string, not a number
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
