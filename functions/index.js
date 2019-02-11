// callback function

function learnJs(lang, callback) {
  console.log('Я учу '+ lang);
  callback();
}

function done() {
  console.log('Done');
}

learnJs('php', done);

/*learnJs('js', function() {
  console.log('вы выучили данный язык');
});*/