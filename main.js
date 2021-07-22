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
const btn = document.querySelector('button');
// const span = document.querySelector('span');

let arrNumb = [];

//убрать обновление страницы при нажатии на кнопку





one.onclick = clickOne;
function clickOne(){
    input.value += one.innerHTML;
}


two.onclick = clickTwo;
function clickTwo(){
    input.value += two.innerHTML;
}


three.onclick = clickThree;
function clickThree(){
    input.value += three.innerHTML;
}


four.onclick = clickFour;
function clickFour(){
    input.value += four.innerHTML;
}


five.onclick = clickFive;
function clickFive(){
    input.value += five.innerHTML;
}


six.onclick = clicSix;
function clicSix(){
    input.value += six.innerHTML;
}


seven.onclick = clickSeven;
function clickSeven(){
    input.value += seven.innerHTML;
}


eight.onclick = clickEight;
function clickEight(){
    input.value += eight.innerHTML;
}


nine.onclick = clickNine;
function clickNine(){
    input.value += nine.innerHTML;
}


zero.onclick = clickZero;
function clickZero(){
    input.value += zero.innerHTML;
}


c.onclick = () => {
    input.value = "";
};


point.onclick = clickPoint;
function clickPoint() {
    input.value += point.innerHTML;
}


plus.onclick=()=>{
    input.value = arrNumb.push(input.value);
    
}


