
import faker from 'faker'
faker.locale = 'es'

function createNFakeProducts(n) {
    const productos = []
    for (let i = 1; i <= n; i++) {
        const prod = createFakeProduct(i)
        productos.push(prod)
    }
    return productos
}

function createFakeProduct(id) {
    const prod = {
        title: faker.commerce.product(),
        price: faker.commerce.price(),
        thumbnail: `${faker.image.imageUrl()}?${isNaN(id) ? 1 : id}`
    }
    if (id) {
        prod.id = id
    }
    return prod
}

export {
    createFakeProduct,
    createNFakeProducts
}