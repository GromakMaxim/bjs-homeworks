 /*
       	Кратко о работе с функциями:
       	1) Значения в скобках - это аргументы, которые мы получаем в момент вызова функции. Их и надо присваивать требуемым в заданиях переменным.
       	2) После ключевого слова return вместо комментария необходимо написать переменную либо выражение с ответом.
       	3) console.log() прописывать не обязательно, т.к. команда return уже означает вывод результата работы функции.
        */

 function averageMark(a, g, p) {

     // реализуйте здесь задание №1
     let algebra = a;
     let geography = g;
     let physics = p;

     return (algebra + geography + physics) / 3;
 }

 function sayHello(userName) {

     // реализуйте здесь задание №2
     let myName = userName;

     return `Привет, мир! Меня зовут ${myName}`
 }

 function calculateFormula() {
     // реализуйте здесь задание №3
     let x;
     let y;
     let z;

     x = 2;
     y = 22;
     z = 0;
     console.log(x * y + 5 * z + x - 1);
     return x * y + 5 * z + x - 1
 }