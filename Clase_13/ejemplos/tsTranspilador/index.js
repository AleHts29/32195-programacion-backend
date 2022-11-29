// const lista: Array<number> = [2, 3, 4, 5]
// lista.map((x: number) => x * x).forEach((x: number) => console.log(x))
// Ejercicio RGB
// const getNum_0_to_255 = () 
var getNum_0_to_255 = function () { return Math.floor(Math.random() * 256); };
var Color = /** @class */ (function () {
    function Color() {
    }
    Color.prototype.get = function () {
        var color = "rgb(".concat(getNum_0_to_255(), ", ").concat(getNum_0_to_255(), ", ").concat(getNum_0_to_255(), "\n})");
        return color;
    };
    return Color;
}());
var color = new Color();
console.log(color.get());
