// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.


let arr = [1,2,3];
arr.push(4,5,6);
console.log(arr);



// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.


let arr1 = [1,2,3];
arr1.unshift(4, 5, 6);
console.log(arr1);



// Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент. 


let arr2 = ['js', 'css', 'jq'];
let res = arr2.shift();
console.log(res);



// Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.


let arr3 = ['js', 'css', 'jq'];
let res1 = arr3.pop();
console.log(res1);



// Дан массив [1, 2, 3, 4, 5]. 
//С помощью метода slice запишите в новый элементы [1, 2, 3]. 


let arr4 = [1,2,3,4,5];
console.log(arr4.slice(0, 3));



// Дан массив [1, 2, 3, 4, 5]. 
// С помощью метода slice запишите в новый элементы [4, 5].


let arr5 = [1,2,3,4,5];
console.log(arr5.slice(3));



// Дан массив [1, 2, 3, 4, 5]. 
// С помощью метода splice преобразуйте массив в [1, 4, 5].


let arr6 = [1,2,3,4,5];
arr6.splice(1,2);
console.log(arr6);



//Используйте метод reduce в комбинации с concat для свёртки массива 
//массивов в один массив, у которого есть все элементы входных массивов.
//var arrays = [[1, 2, 3], [4, 5], [6]]; 
// Ваш код
// → [1, 2, 3, 4, 5, 6]


let arrays = [[1, 2, 3], [4, 5], [6]];
let resArr = arrays.reduce((acc, val) => acc.concat(val), [])
console.log(resArr)
    


// Дан массив [3, 4, 1, 2, 7]. Отсортируйте его не используя метод sort. 
// Предпочтительный метод сортировки - пузырьком.



let bub = [3, 4, 1, 2, 7]

function bubble(arr){
    for(let j = 0; j < arr.length; j++){
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i] > arr[i+1]){
               let buff = arr[i];
               arr[i] = arr[i+1];
               arr[i+1] = buff; 
            }
        }
    }
    console.log(arr)
}

bubble(bub)