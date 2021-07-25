const tabs = document.querySelectorAll('.tab-btn');
const tabContent = document.querySelectorAll('.tab');



const tabSecond = document.getElementById('tab-2');
const tabBtnSec = document.querySelector('.tab-btn2');


const tabThird = document.getElementById('tab-3');
const tabBtnThird = document.querySelector('.tab-btn3')

const links = document.querySelectorAll('.link');


for(let link of links){
    link.onclick = function(){
        
        let tab2 = document.getElementById('tab-2');
    }
}







for(let tab of tabs){//поиск каждого элемента кнопок
    tab.onclick = function(){//если нажимаем на кнопку выполняем функцию

        let tabID = tab.getAttribute('data-tab');//в новой переменной ищем дата атрибута по названию и запоминаем каждый id data-tab
        let currentTab = document.querySelector(tabID);//ищем такой же айдишник как и в дата атрибуте



        for(let item of tabs){//проходимся по каждому табу и удаляем у них класс active
            item.classList.remove('active');
        }

        for(let content of tabContent){//проходимся по каждому элементу и удаляем класс active
            content.classList.remove('active')
        }

        tab.classList.add('active');//добавляем табу класс
        currentTab.classList.add('active');//добавляем контенту класс
    }
    if(location.hash == '#tab-2'){
        
        for(let item of tabs){
            item.classList.remove('active');
        }
        for(let content of tabContent){
            content.classList.remove('active')
        }
        tabSecond.classList.add('active')
        tabBtnSec.classList.add('active')
    }

    if(location.hash == '#tab-3'){
        
        for(let item of tabs){
            item.classList.remove('active');
        }
        for(let content of tabContent){
            content.classList.remove('active')
        }
        tabThird.classList.add('active')
        tabBtnThird.classList.add('active')
    }
}