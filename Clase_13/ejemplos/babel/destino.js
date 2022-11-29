"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// codigo en ES6
// const lista = [2, 3, 4, 5]
// lista.map(x => x * x).forEach(x => console.log(x))

// definimos una clase
// class Persona {
//     constructor(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad
//     }

//     getNombre() {
//         return this.nombre
//     }

//     getEdad() {
//         return this.edad
//     }
// }

// const juan = new Persona('Juan', 34)
// console.log(juan.getNombre());

// Ejercicio RGB
// const getNum_0_to_255 = () 

var randomNumber = function randomNumber(max) {
  return Math.floor(Math.random() * max);
};
var Color = /*#__PURE__*/function () {
  function Color(r, g, b) {
    _classCallCheck(this, Color);
    this.r = r, this.g = g, this.b = b;
  }
  _createClass(Color, [{
    key: "mostrarColor",
    value: function mostrarColor() {
      console.log("El color es R: ".concat(this.r, ", G:").concat(this.g, ", B:").concat(this.b));
    }
  }]);
  return Color;
}();
var color1 = new Color(randomNumber(255), randomNumber(255), randomNumber(255));
console.log(color1.mostrarColor());
