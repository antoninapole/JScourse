'use strict';

// задача №1

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 - возвращает новое значение 1+1=2
d = b++; alert(d);           // 1 - возвращает старое значение
c = (2 + ++a); alert(c);     // 5 - сначала выполняется ++а, потом сложение  2+(1+2)=5
d = (2 + b++); alert(d);     // 4 - прибавляется уже новое значение b++ -  2+2=4
alert(a);                    // 3 - с учетом всех действий к а присвоелось новое значение 3
alert(b);                    // 3 - с учетом всех действий к b присвоелось новое значение 3

// задача №2

var a = 2;
var x = 1 + (a *= 2);
console.log(x);  // x=5 => a = 2 * 2=4 + 1 = 5

// задача №3

let a = 11;
let b = 10;

if (a >= 0 && b >= 0) {
    console.log(a - b); //если a и b положительные, вывести их разность;
} else if (a < 0 && b < 0) {
    console.log(a * b); //если а и b отрицательные, вывести их произведение;
} else if (a >= 0 && b < 0 || a < 0 && b >= 0) {
    console.log(a + b); //если а и b разных знаков, вывести их сумму;
}


// задача №4

let a = +prompt('Введите число от 1 до 15');
switch (a) {
    case 1:
        console.log(a++);
    case 2:
        console.log(a++);
    case 3:
        console.log(a++);
    case 4:
        console.log(a++);
    case 5:
        console.log(a++);
    case 6:
        console.log(a++);
    case 7:
        console.log(a++);
    case 8:
        console.log(a++);
    case 9:
        console.log(a++);
    case 10:
        console.log(a++);
    case 11:
        console.log(a++);
    case 12:
        console.log(a++);
    case 13:
        console.log(a++);
    case 14:
        console.log(a++);
    case 15:
        console.log(a++);
    default: null;
}

//задача №5

function sum(a, b) {
    return a + b;
}

function difference(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

// задача №6

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return sum(arg1, arg2);
        case "-":
            return difference(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        case "/":
            return division(arg1, arg2);
    }
}

const result = mathOperation(2, 3, '+');
console.log(result);

// задача №8

function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1));
}
console.log(pow(2, 3));