// Задача 1 Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п.
function object (item) {
    return (typeof item === "object" && !Array.isArray(item) && item !== null);
}
console.log(object({}));
console.log(object(null));
console.log(object([]));
console.log(object(125));
console.log(object({a: '1', b: '3'}))

// Задача 2 Напишите функцию, которая возвращает новый объект без указанных значений.
//* Ожидаемый результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }
let obj1 = { a: 1, b: 2 };
delete obj1.b;
console.log(obj1); 
// или
let obj2 = { a: 1, b: 2 };
const {b,...newObject2} = obj2; // Деструктурирование
console.log(newObject2);
console.log(obj2);
// или 
let obj3 = { a: 1, b: 2 };
obj3 = Object.keys(obj3).reduce(function(obj, key) {
  if (key !== "b") {
    obj[key] = obj3[key];
  }
  return obj;
}, {});
console.log(obj3);

// Задача 3
    let obj;
    function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }
  console.log(isEmpty({}));
  console.log(isEmpty({a: undefined}));
  console.log(isEmpty({ a: 1 }));
  console.log(isEmpty({}));

  // Задача 4 Напишите функцию, которая поверхностно сравнивает два объекта. Ожидаемый результат: True если объекты идентичны, false если объекты разные 
  function equalObject(a, b) {
  for (let key in a) {
    if(!(key in b) || a[key] !== b[key]) {
      return false;
    }
  }
  for (let key in b) {
    if(!(key in a) || a[key] !== b[key]) {
      return false;
    }
  }
      return true;
}
let object1 = { a: 1, b: 1 };
let object2 = { a: 1, b: 1 };
console.log(equalObject(object1, object2));
let object3 = { a: 2, b: 1 };
let object4 = { a: 1, b: 2 };
console.log(equalObject(object3, object4));

// Задача 6 Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
let array = [0, 1, false, 2, undefined, '', 3, null];
array = array.filter(function(i) {return i});
console.log(array);

// Задача 7 Напишите функцию, которая убирает повторяющиеся значения.
let array2 = [1, 2, 3, 1, 2];
let newArray2 = array2.filter(function (item, position){
return array2.indexOf(item) == position;});
console.log(newArray2);

// Задача 8 Напишите функцию, которая разделяет массив на части заданного размера.
let array3 = [1, 2, 3, 4, 5];
function devideArr () {
  let newArray3 = [], size = 2;
  while (array3.length > 0){
    newArray3.push(array3.splice(0, size));
  }
  return newArray3;
}
console.log(devideArr(array3));
