//Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6
let arr1 = [1, 2, 3];
arr1.push (4, 5, 6);
console.log(arr1);

//Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6
let arr2 = [1, 2, 3];
arr2.unshift (4, 5, 6);
console.log(arr2);

// Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент. 
let arr3 = ['js', 'css', 'jq'];
console.log(arr3[0]); 
// или
console.log(arr3.shift(0));



//Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент. 
let arr4 = ['js', 'css', 'jq'];
console.log(arr4[2]);
// или
console.log(arr4.pop(2));


//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3]. 
let arr5 = [1, 2, 3, 4, 5];
let newArr5 = arr5.slice(0, 3)
console.log(newArr5);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5]. 
let arr6 = [1, 2, 3, 4, 5];
let newArr6 = arr6.slice(3, 5)
console.log(newArr6);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
let arr7 = [1, 2, 3, 4, 5];
let newArr7 = arr7.splice(1, 2);
console.log(newArr7);
console.log(arr7);

// Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого есть все элементы входных массивов.

var arrays = [[1, 2, 3], [4, 5], [6]]; 
var newArrays = arrays.reduce(function (x, y) {
    return x.concat(y)
})
console.log(newArrays);

/*Дан массив [3, 4, 1, 2, 7]. Отсортируйте его не используя метод sort. Предпочтительный метод сортировки - пузырьком.*/ 
let arr8 = [3, 4, 1, 2, 7];
function bubbleSort (arr8) {
    let swapped;
    do {
        swapped = false;
        for (let i=0; i < arr8.length-1; i++) {
            if (arr8[i] > arr8[i+1]) {
                let x = arr8[i];
                arr8[i] = arr8[i+1];
                arr8[i+1] = x;
                swapped = true;
            }
        }
    } while (swapped)
}
bubbleSort(arr8);
console.log(arr8);
   


let arr9 =  [3, 4, 1, 2, 7];
let arr10 = arr9.sort();
console.log(arr10);