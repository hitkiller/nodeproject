let config = require('./config')
let models = require('./models')

let vasya = new models.user('Vasya');
vasya.describe();

let saw = new models.product('saw');
saw.describe();

console.log(config.name)
