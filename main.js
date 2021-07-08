// 1) Напишите функцию, которая проверяет, 
// является ли элемент именно простым объектом, а не массивом, null и т.п.


let x = {
    user:'2',
    name:'3',
    paswowrd:'2'
}

// function itemCheck(a){
//     if(typeof a === 'object' && a !== null){
//         console.log('Object')
//     }else{
//         console.log('Not an Object')
//     }

// }

let res = (a) => (typeof a === 'object' && a !== null) ? 'Obj' : 'Not an Obj';

console.log(res(x))



//2)Напишите функцию, которая возвращает новый объект без указанных значений.
//* Ожидаемый результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }



function findDel(a, b){
    delete a[b];
    return a
}
console.log(findDel({a:1, b:2}, 'b'))



//3)Описание задачи: Напишите функцию, которая делает поверхностную проверку 
// объекта на пустоту.
//   * Ожидаемый результат: ({}) => true,
//       ({ a: undefined }) => true,
//       ({ a: 1 }) => false
//   * Пустые значения: '', null, NaN, undefined


function findEmpt(obj){
    for(let key in obj){
        if(obj[key] === '' || null){
            return 'true'
        }else if(obj[key] === NaN || undefined){
            return 'true'
        }else{
            return 'false'
        }
        return obj
    }   
}
   

console.log(findEmpt({a:NaN}))

//dont work



//4)Напишите функцию, которая поверхностно сравнивает два объекта.
//* Ожидаемый результат: True если объекты идентичны, 
//false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true



let obj2 = {
    a: '1',
    b: '2'
}
let obj3 = {
    a: '1',
    b: '2'
}
function comparison(a, b) {
    for(let key in a) {
        if(!(key in b) || a[key] !== b[key]) {
            return false;
        }
    }
    for(let key in b) {
        if(!(key in a) || a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}
console.log(comparison(obj2, obj3))






// 5 Напишите функцию, которая вызывает метод массива на 
//заданный путь объекта.
// /**
//   * Описание задачи: Напишите функцию, которая вызывает 
//метод массива на заданный путь объекта.
//   * Ожидаемый результат: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]
// Пример использования: const data = { a: { b: [1, 2, 3] } }
// console.log(invoke(data, 'a.b', 'splice', [1, 2])); // [2, 3]



// Напишите функцию, которая очищает массив от нежелательных значений, 
// таких как false, undefined, пустые строки, ноль, null.




let filtered = [12, 5, 0, 130, 44, undefined, NaN, 1, '', , false, 2]

let func = filtered.filter(function(c){
    if(c !== false || undefined){
        return c
    }else if(c !== '' || 0){
        return c
    }else if(c !== null){
        return c
    }else{
        true
    }
})

console.log(func);





// 7) Напишите функцию, которая убирает повторяющиеся значения.
//   * Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]


let arr5 = [1,2,3,1,2]

let deleteElement = arr5.filter(function(item, pos) {
    return arr5.indexOf(item) == pos;
})

console.log(deleteElement)



//8)Напишите функцию, которая разделяет массив на части заданного размера.
//* Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]



