"use strict";
// кокатенация
console.log("arr" + " - object");
console.log(4 + " - object");
console.log(4 + +"5");
//икримент и дикремент
let inkr = 10,
    decr = 10;
// до оператора префиксная, после оператора - постфиксная
//inkr++; //++inkr; 
//decr--; //--decr;

//console.log(inkr);
//console.log(decr);
//постфиксная форма вначале возвращает старое значение, а потом увеличивает или уменьшает
console.log(inkr++);
console.log(decr--);

//префиксная запись дает верные значения
console.log(++inkr);
console.log(--decr);

//остаток от деления двух чисел
console.log(5%2);

//оператор сравнения
console.log(2*4 == 8);

console.log(2*4 == "8");


//строгое равенство
console.log(2*4 === "8");

//оператор И && ИЛИ ||

const isCheked = true,
    isClose = false;

console.log(isCheked && isClose);
console.log(isCheked || isClose);

//оператор отрицание, переводит в обратное
console.log(isCheked || !isClose);



