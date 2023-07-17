//Ejercicio 1: Crear una función que reciba un numero entero y devuelva un error en caso de que el argumento recibido no sea del tipo solicitado

let arrNum = [1.8, 1, 5, 20.1, 15, 17.88, 20];

const onlyIntegers = (numbers) => {
    numbers.map((number) => {
        if (!Number.isInteger(number)) {
            return console.log('Error, ' + number + ' ' + 'no es un número entero.')
        }
    })
}

onlyIntegers(arrNum)