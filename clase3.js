//Array de alumnos, buscar los que tienen mayor nota y menor nota

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
        name: "Lucía",
        score: 5,
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

let highestScores = [];
let lowestScores = []

const high = studentsArray.reduce((previous, current) => {
    return current.score > previous.score ? current : previous;
});

const low = studentsArray.reduce((previous, current) => {
    return current.score < previous.score ? current : previous;
});

highestScores = studentsArray.filter((student) => student.score === high.score)

lowestScores = studentsArray.filter((student) => student.score === low.score)

highestScores.map((student) => {
    //console.log(student.name, student.score)
})

lowestScores.map((student) => {
    //console.log(student.name, student.score)
})

//Ordenar el siguiente array sin usar sort

let arr = [3, 23, 11, 15, 6, 19, 32, 9];
let arrCopy = [...arr];
let indexOfLowest = 0;
arr = [];

for (let i=0; arrCopy.length > 0; i++) {
    let lowestNumber = arrCopy.reduce((previous, current) => {
        return current < previous? current : previous;
    });
    arr.push(lowestNumber)
    indexOfLowest = arrCopy.indexOf(lowestNumber)
    arrCopy.splice(indexOfLowest, 1)
}

console.log(arr)
