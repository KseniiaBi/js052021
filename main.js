// 1) напишите функцию pluck, которая берет массив объектов и возвращает массив значений определенного поля:

// var characters = [
//   { 'name': 'barney', 'age': 36 },
//   { 'name': 'fred', 'age': 40 }
// ];



//add comma to obj
var characters = [
   { 'name': 'barney', 'age': 36 },
   { 'name': 'fred', 'age': 40 }
];

function pluck(array, feature){
    let array1 = [];
    for(let res of array){
        array1 += res[feature];

    }
    return array1;
}

console.log(pluck(characters, 'age'))



// 2) Напиши функцию, считающую число свойств в объекте:
var a = { a: 1, b: 2 };
    
    function count(x){
        let res = 0;
        for(let item in x){
            res++
        }
        return res;
    }

console.log(count(a)); // 2


var b = function (x) {

};
console.log(count(b)); // 0



//question on the last two
// var c = [1, 2, 3];
// console.log(count(c)); // 3

// var d = [];
// d[100] = 1;
// console.log(count(d)); // 1




//3) Напишите скрипт, который присваивает переменной d значение 7, 
// а затем выводит на экран обьект со следующими свойствами: 
// в первой строке - это значение, во второй строке - квадрат этого значения, 
// в третьей строке - куб этого значения.






let d = 7;
let obj = {
};

function multi(){
    let res1 = d*d;
    let res2 = d*d*d;

    obj.x2=res1;
    obj.x3=res2;

    console.log(obj);
}
multi()
