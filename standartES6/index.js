let firstName = 'Ivan',
    age = 30,
    mail = 'ex@mail.ru';

//document.write(`Пользователю ${firstName} ${age}. Его почтовый адрес ${mail}`);


class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.calcArea());

// spread оператор разворота

let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    intetnet = [...video, ...blogs, 'vk', 'facebook'];

console.log(intetnet);
