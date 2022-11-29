// Polyfill??

[1, 2, 3, 4].map(n => n * 2)


// queremos emular el metodo .map
Array.prototype.customMap = function (callback) {
    let result = []

    for (let index = 0; index < this.length; index++) {
        const el = this[index]
        const transFormedElement = callback(el, index)
        result.push(transFormedElement)
    }

    return result
};


[1, 2, 3, 4].customMap(n => n * 2)