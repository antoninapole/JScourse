//задание №1

function getDigitsNumber(num) {
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        console.log('Значение должно быть целым числом в диапазоне от 0 до  999.');
        return {};
    }
    return {
        firstDigit: num % 10,
        secondDigit: Math.floor(num / 10) % 10,
        thirdDigit: Math.floor(num / 100),
    };
}
console.log(getDigitsNumber(123));


//задание №2

const basket = {
    goods: [
        {
            product: 'product1',
            id: 123,
            price: 2000,
            quantity: 1
        },
        {
            product: 'product2',
            id: 345,
            price: 4000,
            quantity: 2
        },
        {
            product: 'product3',
            id: 678,
            price: 5000,
            quantity: 3
        }
    ],
    countPrice() {
        return this.goods.reduce((totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity, 0);
    }
};
console.log(basket.countPrice());


