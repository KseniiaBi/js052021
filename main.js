const equally = document.getElementById('equally');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const multiplic = document.getElementById('multiplic');
const devision = document.getElementById('devision');
const point = document.getElementById('point');
const three = document.getElementById('three');
const six = document.getElementById('six');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const two = document.getElementById('two');
const five = document.getElementById('five');
const eight = document.getElementById('eight');
const c = document.getElementById('c');
const one = document.getElementById('one');
const four = document.getElementById('four');
const seven = document.getElementById('seven');
const input = document.getElementById('input');
const symbol = document.getElementsByClassName('symbol');
// const btn = document.querySelector('button');
// const span = document.querySelector('span');

let arrNumb = [];


//как обратиться ко всем span or className

// seven.onclick=()=>{
//     console.log(input.value);
// }

function insert(num){
    input.value = input.value + num;
}

function clearn(){
    input.value = '';
}

function equal(){
    let res = input.value;
    if(res){
        input.value = eval(res);
    }
}