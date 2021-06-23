//1) напишите функцию pluck, которая берет массив объектов и возвращает массив значений определенного поля:
  var characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }

  ];
  function pluck(input, field) {
    var output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
        return output;
}
  console.log(pluck(characters, "name"));

 // 2) Напиши функцию, считающую число свойств в объекте:
var a = { a: 1, b: 2 };
console.log(Object.keys(a).length);
var b = function () {};
console.log(Object.keys(b).length);
var c = [1, 2, 3];
console.log(Object.keys(c).length);
var d = [];
d[100] = 1;
console.log(Object.keys(d).length);
var e = [];
function count() {
    var f = e.length;
    return f++;
}
console.log(count(e));// не совсем правильно

var a = { a: 1, b: 2 };
function count(a) {
    return Object.keys(a).length;
}
console.log(count(a)); 
var b = function () {}
console.log(count(b)); 
var c = [1, 2, 3];
console.log(count(c)); 
var d = [];
d[100] = 1;
console.log(count(d));


//3) Напишите скрипт, который присваивает переменной d значение 7, а затем выводит на экран обьект со следующими свойствами: в первой строке - это значение, во второй строке - квадрат этого значения, в третьей строке - куб этого значения.
var d1;
d1 = {
    value1: 7,
    value2: 7**2,
    value3: 7**3,
}
console.log(d1.value1);
console.log(d1.value2);
console.log(d1.value3);


