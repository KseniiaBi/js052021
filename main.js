// 1) пользователь может заливать файлы с расширениями только jpg png. 
// Если он залил правильный файл - вывести сообщение об успехе, 
// если нет - об ошибке



function checkPhoto (){
  let photo = prompt('Отправьте фотографию в jpg/png', 'png')
   if(photo.includes('png')){
    console.log('Успех')
  }else if(photo.includes('jpg')){
    console.log('Успех')
  }else{
    console.log('Ошибка')
    }
}

checkPhoto()



// 2) страница может быть размещена на хостинге и начинаться с http или https. 
// вне зависимости от этого ссылка в меню должна получать класс  active





// 3) функция принимает параметром две строки, сравнить сколько букв 
// в этих словах повторяются и в каком количестве. вывести как обьект


//regex?

// function letters(first, second){
//   let arr1 = first.split('');
//   let arr2 = second.split('');
//   let arrRes1 = [];
//   let arrRes2 = [];
//   let obj ={};

//     for(let i in arr1){
//         if(arrRes1[arr1[i]] != undefined){
//           obj.firstWordLetter = (arrRes1[arr1[i]] ++)
//         }else{
//           (arrRes1[arr1[i]] = 1)
//         }
//       } 
//   console.log(obj)


  
// }

// letters('hello', 'aabbccca')





// 4)Дана строка из 3-х цифр. Найдите сумму этих цифр. 
// То есть сложите как числа первый 
// символ строки, второй и третий.
 


let str = '123'
let sum=0;
for(let i = 0; i < str.length; i++){
    let num = str.charAt(i)
    sum += +num 
}
console.log(sum)





// 5)Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр 
// равняется сумме вторых трех цифр. Если это так - выведите 'да', 
// в противном случае выведите 
// 'нет'.



let str2 = '654456'
let sum2 = str2.slice(0, 3);
let sum3 = str2.slice(3, 6);
let res1 = 0;
let res2 = 0;



for(let i = 0; i < sum2.length; i++){
    let item = sum2[i];
    res1 += +item
}


for(let i = 0; i < sum3.length; i++){
    let item2 = sum3[i];
    res2 += +item2
}

if(res1 === res2){
    console.log('Yes')
}else{
    console.log('No')
}







// 6) в массиве есть обьекты с товарами, у них может быть свойство "акция". 
// вывести в консоль только те товары, у которых она есть


let arr = [
    {name:'shoes', price:'sale'},
    {name:'clothes', price:'sale'},
    {name:'access:', price:'noSale'}
];
arr.sort(function (a) {
    if (a.price == 'sale') {
        console.log(a.name)
    }
});
//не затрагивается 1-ый объект
