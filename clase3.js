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
    console.log(student.name, student.score)
})

lowestScores.map((student) => {
    console.log(student.name, student.score)
})