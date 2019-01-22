'use strict';

// переменные let создаются в момент использования
// let видна только в блоке ограниченном фигурными скобками
let second = 2;

// типы данных 
var number = 5; // число 
var string = 'Hello'; // строка 
var sym = Symbol(); // символ
var boolean = true; // логическое значение
null; // null - это ссылка на не существующий объект 
undefined; // undefined
var obj = {}; // объект - коллекция данных

// проверка на тип данных
console.log(typeof(obj));


let person = {
  name: 'John',
  age: 25,
  isMarried: false
};

console.log(`${person.name} hello`);
