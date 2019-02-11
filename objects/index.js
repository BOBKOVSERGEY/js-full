// создаем объект
// любой объект содержит ключ => значение
let options = {
  with: 1024,
  height: 1024,
  name: 'test'
};

console.log(options.name);

// удалить свойство объекта 
delete options.name;

for (let key in options) {
  console.log('Свойсво ' + key + ' имеет значение ' + options[key]);
}

