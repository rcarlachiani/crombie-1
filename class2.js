//Tipos de variables
var name = "Rodrigo";
let animal = "Mono";
const age = "29";

//Objetos
const car = {
    doors: 4,
    color: "negro",
    airConditioned: true
}

//Arrays
const students = ["Jorge", "Micaela", "Lautaro", 55, 43, 27]

//Ejercicio 1: Calcular area de un circulo pasando el radio
function circleArea(ratio){
    console.log('<<< Ejercicio 1 >>>');
    return console.log(Math.PI * Math.pow(ratio, 2))
}

circleArea(17)

//Ejercicio 2: Funcion que devuelva el segundo y el ultimo profesor de un listado
const profesors = ["Lautaro", "Juani", "Giuls", "Fran"]

function secondAndLast(profesorsList){
    console.log('<<< Ejercicio 2 >>>');
    const lastProfesor = profesorsList.length - 1
    const profesorsToLog = profesorsList[1] + ', ' + profesorsList[lastProfesor]
    return console.log(profesorsToLog)
}

secondAndLast(profesors)

//Ejercicio 3: Funcion que recibe objeto alumno y loguee el nombre y el parametro que pasemos
const student = {
    name: "Sam",
    surname: "Smith",
    age: 31,
    programmingLang: "Phyton"
}

function logStudent(studentObject){
    console.log('<<< Ejercicio 3 >>>');
    const studentSearch = studentObject.name + ' is ' + studentObject.age + ' years old.'
    return console.log(studentSearch)
}

logStudent(student)