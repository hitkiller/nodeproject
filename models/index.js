let user = require('./model/user')
let product = require('./model/product')

let vasya = new user('Vasya');
vasya.describe();

let saw = new product('saw');
saw.describe();
