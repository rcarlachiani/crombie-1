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
let lowScore = 0;
let nameHighScore = '';
let highScoresNames = [];

for (i = 0; i < studentsArray.length; i++) {
    if (studentsArray[i].score > highScore) {
        highScore = studentsArray[i].score
    }
    highScoresNames = studentsArray.filter((student) => student.score === highScore)
};

highScoresNames.map((student) => {
    console.log(student.name, student.score)
})