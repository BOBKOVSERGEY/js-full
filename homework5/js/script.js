    // элементы меню
let menuItem = document.querySelectorAll('.menu-item'),
    column = document.querySelectorAll('.column'),
    // обертка меню
    menu = document.querySelector('.menu'),
    // создаем новый элемент
    newElementMenu = document.createElement('li'),
    title = document.querySelector('.title'),
    ads = document.querySelector('.adv'),
    answer = document.getElementById('prompt');

    // добавляем класс к созданному элементу
    newElementMenu.classList.add('menu-item');
    // заполняем текстом новый элемент
    newElementMenu.textContent = 'Пятый пункт';

    // добавляю новый элемент в меню
    menu.appendChild(newElementMenu);

    //первым параметром принимает вставляемый элемент, вторым элемент, перед которым нужно вставить
    menu.insertBefore(menuItem[2], menuItem[1]);

    // меняю картинку bg
document.body.style.background = 'url(img/apple_true.jpg)';

// меняю текст в заголовке
title.textContent = 'Мы продаем только подлинную технику Apple';

// удаляю рекламный блок
ads.remove();

// задаю вопрос, записываю результат
let question = prompt('Как вы относитесь к техние Apple', '');

// вывожу результат
answer.innerText = question;


