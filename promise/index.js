/*let drink = 1;

function shoot(arrow, headshot, fail) {
    console.log('Вы сделали выстрел...');

    setTimeout(function () {
      Math.random() > .5 ? headshot({}) : fail("Вы промахнулись");
    }, 3000);
 }

 function win() {
  console.log('Вы победели!');
  // если drink равен единице, то мы вызываем
   (drink == 1) ? buyBeer() : giveMoney();
 }

function giveMoney() {
  console.log('Вам заплатили!');
}
 
 function buyBeer() {
   console.log('Вам купили пиво!');
 }

 function loose(){
   console.log('Вы проиграли!');
 }

 shoot({}, function (mark) {
   console.log('Вы попали в цель');
   win(mark, buyBeer, giveMoney);
 }, function (miss) {
   console.error(miss);
   loose();
 });*/

/***
 PROMISE
 */

let drink = 1;

function shoot(arrow) {

  console.log('Вы сделали выстрел...');

  // создается новое обещание new Promise
  // resolve - это когда наше обещание выполнилось
  // reject - это когда наше обещание не выполнилось
  let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      Math.random() > .5 ? resolve({}) : reject("Вы промахнулись");
    }, 3000);
  });

  // возвращаем наш промис
  return promise;

}

function win() {
  console.log('Вы победели!');
  // если drink равен единице, то мы вызываем
  (drink == 1) ? buyBeer() : giveMoney();
}

function giveMoney() {
  console.log('Вам заплатили!');
}

function buyBeer() {
  console.log('Вам купили пиво!');
}

function loose(){
  console.log('Вы проиграли!');
}

shoot({})
  .then(mark => console.log('Вы попали в цель'))
  .then(win)
  .catch(loose);
