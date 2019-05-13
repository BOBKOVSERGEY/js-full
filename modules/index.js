(function () {
  let number = 2;
}());

// результат работы функции помесится в переменную
let user = (function () {
  let privat = function () {
    console.log('i\'m private');
  };
  let sayHello = function () {
    console.log('hello');
  };

  return {
    sayHello: sayHello()
  };
}());

console.log(user);
console.log(user.sayHello);