/*--TACK#1--Если переменная test равна true, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.--*/

const task_two = prompt("Add for Number")
let test = true;
let i = false;

if (task_two >= i){
    console.log(alert("true"))
} else {
    console.log(test <= task_two + alert("false"));
}


/*--TACK#2--
Найдите количество секунд в сутках--*/

let min = 60;
let sec = 60;
let hour = 24;
const result = min * sec * hour; 
console.log(result);


/*--TACK#3--
В переменной month лежит какое-то число из интервала от 1 до 12. 
Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).--*/

var month = 6;
if (month == 12 || month <= 2) {
var result = 'Зима';
}
if (month >= 3 && month <= 5) {
result = 'Весна';
}
if (month >= 6 && month <= 8) {
result = 'Лето';
}
if (month >= 9 && month <= 11) {
result = 'Осень';
}
alert(result);
var month = 10;
if (month == 12 || month <= 2) {
var result = 'Зима';
}
if (month >= 3 && month <= 5) {
result = 'Весна';
}
if (month >= 6 && month <= 8) {
result = 'Лето';
}
if (month >= 9 && month <= 11) {
result = 'Осень';
}
alert(result);
var month = 3;
if (month == 12 || month <= 2) {
var result = 'Зима';
}
if (month >= 3 && month <= 5) {
result = 'Весна';
}
if (month >= 6 && month <= 8) {
result = 'Лето';
}
if (month >= 9 && month <= 11) {
result = 'Осень';
}
alert(result);


/*-TACK#4-
Пусть дана переменная r с радиусом круга. По соответствующей формуле найдите площадь круга и запишите ее в переменную s. 
Выведите содержимое этой переменной на экран.--*/

var L=6.28, S;
const R=L/(2*3.14);
S=R*R*3.14
console.log("R = "+R+", S = "+S)


/*-TASK#5 -
Пусть в переменной num хранится число. Определите, четное число или нет. 
Число будет четным, если последний символ равен 0, 2, 4, 6 или 8, и нечетным в противном случае.
(Здесь нужен математический оператор % - остаток от деления)--*/


// Работа с if-else
// TASK#7
//  Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. 
//  Проверьте работу скрипта при a, равном 1, 0, -3. 

let a = 0;

if(a == 1 ) {
    console.log('верно')
}else {
    console.log('неверно');
}


// TASK#8
// Если переменная  a  меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. 
// Проверьте работу скрипта при a, равном 1, 0, -3. 

let a = false;

if ( a > 1) {
    console.log("верно");
} else {
    console.log ("неверно")
}


// Работа с && (и) и || (или)
// TASK#
//   Если переменная a  больше нуля и меньше 5-ти, то выведите 'Верно', 
//   иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2. 

let a = 0;
if (a == 4 || ) {
    console.log('верно');
} else {
    console.log('неверно')
}


// Выведите столбец четных чисел в промежутке от 0 до 100

for (let i = 2; i<100; i++)
console.log(i++);

// Дан массив с элементами [1, 2, 3, 4, 5]. 
// С помощью цикла for найдите сумму элементов этого массива. 
// Запишите ее в переменную result

let array = [1, 2, 3, 4, 5];
let result = 0;
for (let i = 0; i < array.length; i++) {
  result += array[i];
}
console.log(result);

// Дан массив с элементами 2, 5, 9, 15, 0, 4. 
// С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, 
// которые больше  3-х, но меньше  10

let arr = [2, 5, 9, 15, 0, 4];
for (let i = 0; i < arr.length; i++) {
if (arr[i] > 3 && arr[i] < 10) {
alert(arr[i]);
}
}


// Дан массив с элементами  1, 2, 3, 4, 5, 6, 7, 8, 9. 
// С помощью цикла  for  создайте строку '-1-2-3-4-5-6-7-8-9-'

let array = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i < array.length; i++);
console.log(String(array));

// Дан массив с числами. Числа могут быть положительными и отрицательными (на свое усмотрение заполните). 
// Найдите сумму положительных элементов массива.



// Выведите на экран таблицу умножения (как в школьной тетради).



// Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. 
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.


// Создайте массив arr с элементами 2, 5, 3, 9. 
// Умножьте первый элемент массива на второй, а третий элемент на четвертый. 
// Результаты сложите, присвойте переменной  result. Выведите на экран значение этой переменной.

let arr = [2, 5, 3, 9];
let a = arr[0] * arr[1];
let b = arr[2] * arr[3];
let result = a + b;
alert(result);

// Создайте массив arr = ['a', 'b', 'c', 'd'] 
// и с его помощью выведите на экран строку 'a+b, c+d'.

// Дан массив с числами. [2,3,1,4,8,6,7,5,9] 
// Не используя метода reverse переверните его элементы в обратном порядке. 