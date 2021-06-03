
//even numbers


 let j = +prompt('Enter number for 0 to 100', 0);
 let k = 0;
 for(let i = 0; i <= j ; i++){
 	if(i%2==0){
 		console.log(i)
 		k++
 	}
 }
console.log(k);




//array sum


 let array = [1, 2, 3, 4, 5];
 let result = 0;
 for( let i = 0; i < array.length; i++){
 	result += array[i];
 	}
 console.log(result);


//>3 but <10


 let array1 = [2, 5, 9, 15, 0, 4]
 for(let i = 0; i < array1.length; i++){
 	if(array1[i]>3 && array1[i]<10){
 		console.log(array1[i])
 	}
 }





//sum of positiv elements



 let array2 = [-1, -2, 0, 2, 1, 3];
 let sum = 0;

 for(let i = 0; i < array2.length; i++){
if(array2[i]>=0){
 		sum += array2[i]
 	}
 }
 console.log(sum)




//put '-' 


let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let str='';

for(let i = 0; i < array3.length; i++){
 	str=array3[i] + '-';
console.log(str);
}
 




//true/false



let a = +prompt('enter first number', 0);
let b = +prompt('enter second number', 0);

if((a>2 && a<11) || (b>=6 && b<=14)){
console.log('True')
}else{
 	console.log('False')
}

















