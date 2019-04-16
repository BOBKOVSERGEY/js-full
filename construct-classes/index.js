/*function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;

  this.hello = function () {
    console.log('Hello ' + this.name);
  };
}

User.prototype.exit = function(name) {
  console.log('Пользователь ' + this.name + ' ушел');
};

let ivan = new User('Ivan', 25);
let alex = new User('Alex', 20);

//console.log(ivan.name);
//console.log(alex.name);
//alex.exit();
/*
// новый стандарт
*/
/*
class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
  }

  hello() {
    console.log(`Hello, ${this.name}`);
  }

  exit() {
    console.log(`Пользователь, ${this.name} ушел`);
  }
}

let sergey = new User('Sergey', 1),
    artem = new User('Artem', 2);

sergey.hello();
artem.exit();
*/

/*function showThis(a, b) {
  console.log(this);
  function sum() {
    console.log(this);
    return a + b;
  }
  console.log(sum());
}
showThis(4,5);
showThis(6,6);
*/
// 1) просто вызов функции - window/undefined

/*let obj = {
  a: 20,
  b: 15,
  sum: function () {
    console.log(this);
  }
};

obj.sum();
*/

// 2 метод объекта - this = object

// 3 конструктор (new) -this = новый созданный объект

let user = {
  name: 'John'
};


