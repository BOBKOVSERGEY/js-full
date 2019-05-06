// когда полнустью загрузилась dom структура нашего документа
window.addEventListener('DOMContentLoaded', function() {
  // преведем наш код в строгий режим
  'use strict';
  let tab = document.querySelectorAll('.info-header-tab'),
      // родитель табов
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

      
  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  // запускаем функцию пропуская нулевой элемент
  hideTabContent(1);

  function showTabContent(b) {
    // проверяем, действительно ли этот элемен скрыт
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  // назначение обработчика событий при клике на табы
  info.addEventListener('click', function(event) {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for(let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          // остановим наш цикл
          break;
        }
      }
    }
  });

  //////////TIMER////////////

  let deadline = '2019-12-31 23:59:59';

  function getTimeRemaining(endTime) {
    // превращаем дату в кол-во ms
    // берем дату нашего дедлайна, берем текущую дату, вычисляем разницу
    let t = Date.parse(endTime) - Date.parse(new Date()),
        // получаем только целые числа
        seconds = Math.floor((t/1000) % 60),
        minuts = Math.floor((t/1000/60) % 60),
        //hours = Math.floor((t/(1000*60*60)));
        hours = Math.floor((t/1000/60/60) % 24),
        days = Math.floor((t/(1000*60*60*24)));

    return {
      'total' : t,
      'days' : days,
      'hours' : hours,
      'minutes' : minuts,
      'seconds' : seconds
    };
  }

  function setClock(id, endTime) {
    let timer = document.getElementById(id),
        days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);
    
    function updateClock() {
      let t = getTimeRemaining(endTime);

      days.textContent = t.days;

      if (t.hours < 10) {
        hours.textContent = '0' + t.hours;
      } else {
        hours.textContent = t.hours;
      }

      if (t.minutes < 1) {
        minutes.textContent = '6' + t.minutes;
      } else if(t.minutes < 10) {
        minutes.textContent = '0' + t.minutes;
      } else {
        minutes.textContent = t.minutes;
      }

      if (t.seconds < 1) {
        seconds.textContent = '6' + t.seconds;
      } else if (t.seconds < 10) {
        seconds.textContent = '0' + t.seconds;
      }else {
        seconds.textContent = t.seconds;
      }


      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
    
  }

  setClock('timer', deadline);

  //console.log(new Date());

  /***
   * MODAL
   */

  let more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close');

  more.addEventListener('click', function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  });

  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });

  /****
   * FORM
   */

  /**/ //JSON

  let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с Вами свяжемся!',
    failure: 'Что то пошло не так...'
  };

  let form = document.querySelector('.main-form'),
      input = form.getElementsByTagName('input'),
      statusMessage = document.createElement('div');

  statusMessage.classList.add('status');

  // вешаем событие на форму
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');

    // заголовок для отправки обычной формы
    //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // отправка данный в формате json
    /**/ request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    // записываем  все данные которые ввел пользователь
    let formData = new FormData(form);

    /**/ let obj = {};
    /**/ // превращаем объект formData в обычный читаемый объект
    /**/ formData.forEach(function (value, key) {
      // наполняем наш объект данными из formData
      obj[key] = value;
    });

    /**/ let json = JSON.stringify(obj);
    /**/ // теперь мы оправляем не formData а json
    /**/ request.send(json);


    // отправляем запрос на сервер с записанными данными
    //request.send(formData);

    // отслеживаем состояние запроса
    request.addEventListener('readystatechange', function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
        // если наш запрос полностью удался
      } else if (request.readyState === 4 && request.status == 200) {
        statusMessage.innerHTML = message.success;
      } else {
        statusMessage.innerHTML = message.failure;
      }
    });

    // очистим поля формы
    for (let i = 0; i < input.length; i++) {
      input[i].value = '';
    }

  });

  /**
   * SLIDER
   *
   */

  // параметр текущего слайда
  let slideIndex = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');

  showSlides(slideIndex);


  function showSlides(n) {

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }
    // скрывает все изображения
    slides.forEach((item) => item.style.display = 'none');

    // or
    /*for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }*/

    // удаляем класс dot-active со всех dot
    dots.forEach((item) => item.classList.remove('dot-active'));

    // показываем первую картинку
    slides[slideIndex - 1].style.display = 'block';

    // добавляем класс к dot
    dots[slideIndex - 1].classList.add('dot-active');
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', function () {
    plusSlides(-1);
  });

  next.addEventListener('click', function () {
    plusSlides(1);
  });

  dotsWrap.addEventListener('click', function (event) {
    for (let i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
        currentSlide(i);
      }
    }
  });

});

//