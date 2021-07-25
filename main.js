const tabs = document.querySelectorAll('.tab-btn');
const tabContent = document.querySelectorAll('.tab')






for(let tab of tabs){//поиск каждого элемента кнопок
    tab.onclick = function(){//если нажимаем на кнопку выполняем функцию

        let tabID = tab.getAttribute("data-tab");//в новой переменной ищем дата атрибута по названию и запоминаем каждый id data-tab
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
}