let options = {
  width: 1366,
  height: 768,
  background: 'red',
  font: {
    size: '16px',
    color: '#fff'
  }
};

// преобразум объект в json формат
console.log(JSON.stringify(options));

// расшифровываем формат json превращая в обычный объект
console.log(JSON.parse(JSON.stringify(options)));