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

let num = 125457;
let stNum = String(num);
let pr = stNum = prompt("число");
if (stNum == 0 || stNum == 2 ||stNum == 4 ||stNum == 6 || stnNum == 8 ){
    console.log('Четное');
} else {
    console.log('Нечетное')
}