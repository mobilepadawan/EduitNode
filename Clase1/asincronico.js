const _ = require('underscore')

/*
Deja que se vacie el callstack y luego ejecuta la funcion
*/

console.log('paso1')
_.defer(()=>{
    console.log('paso2')
})
_.delay(()=>{
    console.log('paso3')
}, 5000)
console.log('paso4')

