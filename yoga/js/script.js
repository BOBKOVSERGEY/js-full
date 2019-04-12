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

  let deadline = '2019-04-23 23:59:59';

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

      if (t.minutes < 10) {
        minutes.textContent = '0' + t.minutes;
      } else {
        minutes.textContent = t.minutes;
      }

      if (t.seconds < 10) {
        seconds.textContent = '0' + t.seconds;
      } else {
        seconds.textContent = t.seconds;
      }


      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
    
  }

  setClock('timer', deadline);

  //console.log(new Date());
});