const shop = {
    owner: "Kasem",
    location: "Barishal",
    address: {
        road: 10,
        area: "sadar road",
        shopNo: 504,

    },
    products: ['Desktop', 'Laptop', 'Keyboard', 'Mouse', 'printer']
}

console.log(shop)
const jsonShop = JSON.stringify(shop)
console.log(jsonShop);

const returnToShop = JSON.parse(jsonShop)

console.log(returnToShop);