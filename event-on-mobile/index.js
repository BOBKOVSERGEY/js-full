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
});

