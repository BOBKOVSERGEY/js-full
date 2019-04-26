// touchstart - срабатывает при возникновении касания к элементу - аналог клика
// touchmove - возникает после тога, как пользователь прикоснулся к элементу и потянул его в другую точку
// touchend - возникает когда наш палец перестает соприкасаться с поверхностью
// touchenter - возникает, когда наш палец заходит на какойто элемент
// touchleave - срабатывает, когда наш палец покинул элемент
// touchcancel - срабатывает, когда точка соприкосновения больше не регистрируется на поверхности
window.addEventListener('DOMContentLoaded', function () {
  let box = document.querySelector('.box');
  let link = document.querySelector('.link');
  box.addEventListener('touchstart', function (e) {
    console.log('touchStart');
    console.log(e.target);
    console.log(e.touches);
    console.log(e.touches[0].target);
    console.log(e.changedTouches);
    console.log(e.targetTouches);
  });
  box.addEventListener('touchmove', function (e) {
    e.preventDefault();
    console.log('touchmove');
  });

  box.addEventListener('touchend', function (e) {
    e.preventDefault();
    console.log('touchend');
  });
  link.addEventListener('touchstart', function (e) {
    e.preventDefault();
    console.log('touch link');

  });

  // Regular expression
  // new RegExp('pattern', 'flags');
  // /pattern/

  //let ans = prompt('Введите ваше имя');
  //let reg = /n/ig;

  // внутри ans мы будем искать reg
  //console.log(ans.search(reg));


  //console.log(ans.match(reg));



  // i флаг мы хотим найти что то вне зависимости от регистра
  // g флаг главбальность, мы хотим что то найти вне зависимоти от глобальности
  // m флаг многострочности

  /**Классы символов**/

  // \d - найди все цифры digit \D не число
  // \w - найди все буквы words \W не букву
  // \s - найди все пробелы \S не пробел

 // let pass = prompt('Введите пароль');
  // ищем все меняем на *
  //console.log(pass.replace(/./g, '*'));
  // ищем все пробелы меняем на дефис
  console.log('8 495 123 45 67'.replace(/ /g, '-'));

});

