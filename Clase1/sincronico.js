const genusu = require('./lib/genusuario')
const _ = require('underscore')

function fn1(entero, str, fn) {
    console.log(fn({nombre:str, edad:entero}))
}

console.log('paso1')
fn1(3, 'lesli', arr =>{ return arr })
console.log('paso3')