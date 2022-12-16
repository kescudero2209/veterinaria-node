const { read, register } = require('./operacion.js')
const argumentos = process.argv.slice(2)
const operacion = argumentos[0]
const [,nombre, edad, animal, color, enfermedad]= argumentos;



if(operacion === "register"){
    register(nombre, edad, animal, color, enfermedad);
    }

if(operacion === "read"){
    read()
    }