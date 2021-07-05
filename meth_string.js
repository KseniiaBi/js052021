//Task 1 Пользователь может заливать файлы с расширениями только jpg png. Если он залил правильный файл - вывести сообщение об успехе, если нет - об ошибке
let string;
function checkExtension ()  {
    if(string.includes('jpg')) {
    return ('The value is true');
    }
    else if(string.includes('png')) {
        return ('The value is right');
    }
else {
    return ('The value is false');
}
}
string = 'pnlight_ocean_underwater_deep_sea.png';
console.log(checkExtension (string));
string = 'Peony_Flower_Wallpaper.jpg';
console.log(checkExtension (string));
string = 'pnlight_ocean_underwater_deep_sea.pdf';
console.log(checkExtension (string));

// Task 2 Страница может быть размещена на хостинге и начинаться с http или https. Вне зависимости от этого ссылка в меню должна получать класс active
let string1;
function checkLink () {
    if(string1.startsWith('http' || 'https')) {
        return ('The value is true - Active');
        }
    else {
        return ('The link is active');
    }
    }

string1 = 'www.w3schools.com/jsref/jsref_startswith.asp';
console.log(checkLink(string1));
string1 = 'https://www.w3schools.com/jsref/jsref_startswith.asp';
console.log(checkLink(string1));

// Task 3  Функция принимает параметром две строки, сравнить сколько букв в этих словах повторяются и в каком количестве. Вывести как обьект

let str1 = 'носить';
let str2 = 'косить';
let counter = 0;
let min = Math.min(str1.length, str2.length);
for(let i = 0; i < min; i++)
{
   if(str1.charAt(i) === str2.charAt(i))
      counter++; 
}
console.log(+counter); // не совсем правально

// Task 4 Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.
let str5 = '789';
let str6 = Number(str5[0]) + Number(str5[1]) + Number(str5[2]);
console.log(str6);

// Task 5 Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
let str7 = "585858";
let str8 = Number(str7[0]) + Number(str7[1]) + Number(str7[2]);
let str9 = Number(str7[3]) + Number(str7[4]) + Number(str7[5]);
if (str8 ==  str9) {
    console.log('Да');
}
else {
    console.log('Нет');
}
// Task 6  В массиве есть обьекты с товарами, у них может быть свойство "акция". вывести в консоль только те товары, у которых она есть
let arrGoods = [
    {'apple': '20', 
'lemon': '35', 
'mango': "Discount", 
'pear': '55', 
'apricot': "Discount"}
];

  
