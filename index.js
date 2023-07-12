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

//Calcular area de un circulo pasando el radio
function circleArea(ratio){
    return Math.PI * Math.pow(ratio, 2)
}

//Funcion que devuelva el segundo y el ultimo profesor de un listado
const profesors = ["Lautaro", "Juani", "Giuls", "Fran"]

function secondAndLast(profesorsList){
    const lastProfesor = profesorsList.length - 1
    const profesorsToLog = profesorsList[1] + ', ' + profesorsList[lastProfesor]
    return profesorsToLog
}

//Funcion que recibe objeto alumno y loguee el nombre y el parametro que pasemos
const student = {
    name: "Sam",
    surname: "Smith",
    age: 31,
    programmingLang: "Phyton"
}

function logStudent(student, studentParam){
    const studentSearch = student + ' is ' + studentParam + ' years old.'
    return studentSearch
}


//Clase 2

//Array de alumnos, buscar el que tiene mayor nota

const studentsArray = [
    {
        name: "Juan",
        score: 5,
    },
    {
        name: "Pedro",
        score: 8,
    },
    {
        name: "Ramón",
        score: 10,
    },
    {
        name: "Juana",
        score: 9,
    },
    {
        name: "Amelia",
        score: 10,
    },
];

let highScore = 0;
let nameHighScore = '';
let filteredNames = [];

for (i = 0; i < studentsArray.length; i++) {
    if (studentsArray[i].score > highScore) {
        highScore = studentsArray[i].score
    }
    filteredNames = studentsArray.filter((score) => score > highScore)
};



console.log(filteredNames);




