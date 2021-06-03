//Задание 1
for (let num = 0; num < 100; num++) {
    if (num % 2 == 0) {
        console.log(num);
    }
}

//Задание 2
let arr = [1, 2, 3, 4, 5];
let result = 0;
for (let i = 0; i < arr.length; i++) {
    result += arr [i];
}
console.log(result);

// Задание 3
let array = [2, 5, 9, 15, 0, 4];
for (let i = 0; i < array.length; i++) {
    if (array [i] > 3 && array [i] < 10)
    console.log(array [i]);
} 
 
//Задание 4
let arra = [5, 8, 10, -12, -100, 90];
let res = 0;
for (let i = 0; i < arra.length; i++) {
    if  (arra[i] >= 0) {
        res += arra[i]
    }
} console.log(res);

//Задание 5 
let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let str = '';
for (let i = 0; i < ar.length; i++) {
    str = str + '-' + ar[i];
}
console.log(str);

//Задание 6
let a = 5;
let b = 6;
if (a > 2, a < 11, b >=6, b < 14) {
    console.log('True')
}
else { 
    console.log('False')
}

