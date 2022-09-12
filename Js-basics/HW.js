
/*
Домашка:

1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)


2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.

3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.

4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.

5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.

6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.

7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.

8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закнченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.

    Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")
    https://www.kyivdictionary.com/uk/words/conjugation/?word=%D0%BC%D0%B5%D1%82%D1%80&lang=uk
*/

//1
const hamburger = 4
const fries = 1
if(hamburger >= 4 && fries){console.log('Ми поїли')}
else{console.log('Ми йдемо в інше кафе')};

//2
const price = 1000
if(price>=1000&&price<=1900){console.log('price is between 1000 and 1900')}
else{console.log('not between 1000 and 1900')};

//3
const price1 = 1000
if(price1>=!1000&&price1<=!1900){console.log('not between 1000 and 1900')}
else{console.log('price is between 1000 and 1900')};

4//
const num=1
if(num==1){console.log('spring')}
else if(num==2){console.log('summer')}
else if(num==3){console.log('autumn')}
else{console.log('winter')};

//5
var a=1
var b=2
var c=3
if(a < b && c > b){console.log('b is medium')}
else{console.log('b is not medium')};

//6
let weekday = 5;
switch(weekday){
    case 1:
        console.log('monday')
        break;
    case 2:
        console.log('tuesday')
        break;
    case 3:
        console.log('wednesday')
        break;
    case 4:
        console.log('thursday')
        break;
    case 5:
        console.log('friday')
            break;
     case 6:
        console.log('saturday')
                break;
     case 7:
        console.log('friday')
                    break;
};

//7
let par1 = 2;
let par2 = 4;
switch(3){
    case 1:
        console.log(par1 + par2)
        break; 
    case 2:
            console.log(par2 - par1)
        break; 
    case 3:
            console.log(par2 * par1)
        break;
    case 4:
            console.log(par2 / par1)
};

//8
let someText = 'Hello'
//набор символов
console.log(someText.replace(/[eo]/ig,''));
//или или
console.log(someText.replace(/[e|o]/ig,''));
//и
console.log(someText.replace(/[e&o]/ig,''));
