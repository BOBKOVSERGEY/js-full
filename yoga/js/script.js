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
});