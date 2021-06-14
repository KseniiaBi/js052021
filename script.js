let x = 1;
for (let x = 1; x < 10; x++) {
    console.log('Таблица умножения на ' + x)
    for(let y = 1; y < 10; y++) {
        console.log(`${x}*${y} = ${x * y}`);
    } 
}

let day = function (dayweek) {
    switch (dayweek) {
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';
        case 7: return 'Sunday';
    }
    
}
console.log(day(1));

let arr = [10, 20, 30, 50, 235, 3000];
let n = arr.length;
for (let i = 0; i < arr.length; i++) {
    str = arr[i] + '';
    if (str[0] === '1' || str[0] === '2' || str[0] === '5') {
        console.log(arr[i] + ', ');
    }
    
}

let ar = [3, 6, 9, 13, 15, 23, 30, 31, 33];
 for (let i = 0; i < ar.length; i++) {
    if (i[0] % 3 == 0) {
        console.log(i[0]);
    }
 }
