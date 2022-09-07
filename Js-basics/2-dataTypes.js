/*
Типі данных:

Простые или примитивные:
-числа
-текст
-логический или булиновый
-null
-undefined
-Symbol
-BigInt

Объекты:
-массивы
-функции
-объект даты
-регулярные выражения
-ошибки
-объект
*/

// int - числа до 2^53

let number = 3;
let floatNumber = 5.5;
//получим бесконечность
console.log(4/0);
console.log(-4/0);
// получим не число
console.log('a'* 5);
//текст в ковычках
let text = '4';
//булиновые
let booleanType = true; //false
//null
let a = null;
//undefined
let b;

//object
let.person = {
    age: 20,
    name: 'Dmytro',
    isMarried: true
};

console.log('возвраст'+ person.age);
//операция конкатенации с помощью знака $ нужно заключать в косые ковычки
console.log(`'Имя' ${person.name}`);
console.log(`'Семейный статус' ${isMarried}`);
//перечисление
console.log(`'Имя' ${person.name} ${isMarried}`);

let endpoint = 'help';
console.log (`https://someurl/${endpoint}`);
//массив наполненный текстом, цифрой, объектом, массивом в массиве
let arr = ['text', 6, {a:1, b:2, c:3}, [1,2,3]];
//обращаемся к 4 елементу внутри массива то есть к массиву
console.log(arr[3]);

let numArr = [1,2,3];
let numObj = {a:1, b:2, c:3};
//Обращение к цифрам через [] обращение к текстовым елементам через .
console.log (numArr[0]);
console.log (numObj.a);


let salary = {
    'Anna': 1000,
    'Vlada': 1200
};
let salaryArr = ['Anna', 1000, 'Vlada', 1200];

let someArr = [1, 2, 3];
let objArr = {
    0: 1,
    1: 2,
    2: 3
};
console.log(someArr[0]);
console.log(objArr[0]);

let objArr1 = {
    a: 1,
    b: 2,
    c: 3
};
console.log(objArr1['a']);

let num = 1;
console.log(num);
num = 2;
console.log(num);

const objArr2 = {
    a: 1,
    b: 2,
    c: 3
};

console.log(objArr2.a);

objArr2.a = 5;

