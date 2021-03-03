// задача №1
let n = 100;
next: for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) continue next;
    }
    console.log(i);
}

// задача №2
const basket = [
    ['product1', 2000, 1],
    ['product2', 4000, 2],
    ['product3', 5000, 3],
];
function countPrice(basket) {
    return basket.reduce((totalPrice, cartItem) => totalPrice + cartItem[1] * cartItem[2], 0);
}
console.log(countPrice(basket));

// задача №3
for (let i = 0; i <= 9; console.log(i++)) { }


// задача №4
let str = '';
for (let i = 0; i < 20; i++) {
    str += 'x';
    console.log(str);
}




