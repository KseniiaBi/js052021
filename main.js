//multiplication table


 function tabMulti(){
     res = 0;
     str = '';
     for( let i = 1; i <= 10; i++){

            for( let j = 1; j <= 10; j++){
             res = i * j;
             str = i + '*' + j + '=' + res; 
             console.log(str);
         }
         // console.log(res);
     }
 }
 
 tabMulti()





//dayOfWeek

 function dayOfWeek(a){
    
     if(a >= 1 && a <=7){
         a -= 1;
         let arr = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
         for( let i = 0; i < arr.length; i++){
             if(i === a){
                 return(arr[i]);
             }
         }
     }
     else{
         return('Enter a number from 1 to 7');
     }
 }

 console.log(dayOfWeek (1));






// number 1 2 5 dont work


 let arr1 = [10, 20, 30, 50, 235, 3000];

 function number (){
 
     arr2 = [];
     for(let i = 0; i <= arr1; i++){
         arr1 = arr1.toString();
         if(arr1 === '1'){
             arr2 += arr1[i]
            console.log (arr2);
         }
     }
 }

 number()








// /3 dont work


 let arr2 = [21, 2, 5, 10, 15]
 function multOfThree(){
     for(let i = 0; i < arr2.length; i++){
         if(arr2[i]%3 == 0){
             console.log(arr2[i])
         }
     }
 }

function newArr(){
     let arr = [];
     for(let i = 0; i < arr2.length; i++){
         if(multOfThree()){
             arr += [arr2]

         }
        
     }console.log(arr)
    
 }

 newArr()











// a+b c+d

 let arr3 = ['a','b','c','d']

 function sumWord(){
     for(let i = 0; i < arr3.length; i++){
         str = ''
         str += `'${arr3[0]}+${arr3[1]}, ${arr3[2]}+${arr3[3]}'`;
         console.log(str)
     }
 }

 sumWord()






//* +

let arr4 = [2,5,3,9]

 function multSum(){
     let result = 0;
     result = (arr4[0]*arr4[1])+(arr4[2]+arr4[3])
     console.log(result)
    
 } 
 multSum()








//prompt




 function equ() {
     let a = +prompt('Enter number A',)
     let b = +prompt('Enter number B',)
     let c = +prompt('Enter number C',)
     let D = 0;
     let x1 = 0;
     let x2 = 0;
     D = (Math.pow(b,2))-(4*a*c)
     if(D < 0){
         return false
     }else if(D == 0){
         x = ((-b)+(Math.sqrt(D)))/(2*a)
         return x
     }else if(D > 0){
         for(let i = 1; i <= 2; i++){
             x1 = ((-b)+(Math.sqrt(D)))/(2*a)
             x2 = ((-b)-(Math.sqrt(D)))/(2*a)
             return [`x1 = ${x1}`, `x2 = ${x2}`]
         }
     }
    
    
 }
 console.log(equ());







//fibo 


 function fibo(n){
     let result = [];
     let f1 = 1;
     let f2 = 1;
     let x = 0;
     for(let i = 0; i < n; i++){
         x = f1 + f2;
         f1 = f2;
         f2 = x; 
         result += `${x},`
        
     }
     return result
 }

 console.log(fibo(10))








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






//reverse

 let arr5 = [2,3,1,4,8,6,7,5,9]
 function rev(){
     let arr = []
     for(let i = arr5.length-1; i > -1; i--){debugger
         arr += `${arr5[i]} `
     }
     return arr
 }

 console.log(rev())






//recursion dont work





 function rec(arr1){
    let i = 0;
    console.log(arr1[i])
     i++
     if(){

         rec(arr1)
     }
}
rec([1,2,3])





// 1000/2 не выводит количество итераций 

 let n = 1000;
 function devision(){
    let num = 0;
     let res = 0;
     for(let i = 0; i < 10; i++){debugger
         n = n/2;
       num = num +1
       console.log(n)
        if(n <= 50){
            return false   
        }
    }
    console.log(num) 
 }
 devision()









// if a end b



 function check(a,b){
    let res = 0;
    if(a <= 1 && b >=3){
        res = a + b;
    }else{
        res = a - b;
     }
     console.log(res)
 }
 check(3,5)




//book


