
// grains посчитал стоимость в гривне за кг пшена


 function grains(){
     let res = 1;
     for(let i = 1; i <= 64; i++){
         res = (Math.pow(2,i))
     }
     return res
 }


console.log(grains())


 function money(){
     let res = 0;
     res = (grains() * 0.0000019)*5
     return res
 }
 console.log(money())






//color random


let colors = [ 'red', 'orange', 'yellow', 'green',  'blue', 'indigo', 'violet'];

function rainbow(){
    let res = 0;
    for(let i = 0; i < colors.length; i++){
        res = Math.floor(Math.random()*(7 - 0) + 0)
    }
    console.log(colors[res])
}
rainbow()



//book pages  
//В книге N страниц, пронумерованных как обычно от 1 до N. 
//Если сложить сумму цифр( 10 = 1+0б 11= 1+1), 
//содержащихся в каждом номере страницы, будет 1095. 
//Сколько страниц в книге?



