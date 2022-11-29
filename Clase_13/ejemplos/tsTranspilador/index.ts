// const lista: Array<number> = [2, 3, 4, 5]
// lista.map((x: number) => x * x).forEach((x: number) => console.log(x))



// Ejercicio RGB
// const getNum_0_to_255 = () 

const getNum_0_to_255 = (): number => Math.floor(Math.random() * 256)

class Color {
    get(): string {
        let color = `rgb(${getNum_0_to_255()}, ${getNum_0_to_255()}, ${getNum_0_to_255()
            }
})`
        return color;
    }
}
const color: Color = new Color()
console.log(color.get());

