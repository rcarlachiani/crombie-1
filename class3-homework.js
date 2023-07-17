//Ejercicio 1: Crear una función que reciba un numero entero y devuelva un error en caso de que el argumento recibido no sea del tipo solicitado

let arrNum = [1.8, 1, 5, 20.1, 15, 17.88, 20];

const onlyIntegers = (numbers) => {
    console.log('<<< Ejercicio 1 >>>');
    numbers.map((number) => {
        if (!Number.isInteger(number)) {
            return console.log('Error, ' + number + ' ' + 'no es un número entero.');
        };
    });
};

onlyIntegers(arrNum);

//Ejercicio 2: Crear una función que reciba un array y genere una copia del mismo pero con todos los elementos multiplicados por 5. Se debe usar la Asignación de multiplicación: x*=y (PPT Clase 3)

const arr = [2, 5, 45, 6, 9];

const multiply5 = (array) => {
    console.log('<<< Ejercicio 2 >>>')
    const newArray = array.map((item) => {
        return (item*=5);
    });

    console.log(newArray);
};

multiply5(arr);

//Ejercicio 3: Crear una función que reciba un arreglo y devuelva el promedio de un rango especificado. Es decir, debe recibir (arreglo, inicio, fin) y deberá calcular el promedio de los valores que se encuentran en ese rango

const arrNumbers = [10, 12, 15, 18, 45, 66, 89];

const findAverage = (array, start, finish) => {
    console.log('<<< Ejercicio 3 >>>')

    let numbersToAverage = array.slice(start, finish + 1);
    let divide = numbersToAverage.length

    let sum = numbersToAverage.reduce((previous, current) => {
        return previous + current
    })
    
    let average = sum /= divide

    return console.log(average)
};

findAverage(arrNumbers, 3, 6);

//Ejerecicio 4: Definir una función que devuelva TRUE si el argumento recibido como texto es un palíndromo, osea que se lee de la misma forma de izquierda y derecha. Ejemplo de palíndromo "¿Acaso hubo búhos acá?"

const strings = ['¿Acaso hubo buhos aca?', 'Crombie', 'Somos o no somos', 'Luz azul', 'Hace mucho frío'];

const isPalindrome = (inputString) => {
    console.log('<<< Ejercicio 4 >>>');

    inputString.map((string) => {
        let noSpacesString = string.replace(/[^A-Z0-9]+/ig, '').toLowerCase();
        let splitString = noSpacesString.split("");
        let reversedArray = splitString.reverse();
        let joinedString = reversedArray.join("");
        
        if (joinedString === noSpacesString) {
            return console.log(string + ' is palindrome?: ' + true)
        } else {
            return console.log(string + ' is palindrome?: ' + false)
        };
    })
};

isPalindrome(strings);

//Ejercicio 5: 

const formValidator = (email, password, description) => {
    console.log('<<< Ejercicio 5 >>>')

    if (!email.includes("@") || !email.includes(".com")) {
      return console.log("Error: Email must contain '@' and '.com'");
    } else if (password.length < 8 || password.length > 16 || password === password.toLowerCase()) {
      return console.log("Error: Password must be between 8 and 16 characters and contain at least one uppercase letter");
    } else if (description.length > 400 || description.includes("-")) {
      return console.log("Error: Description cannot contain '-' and must be up to 400 characters");
    }
  
    console.log("You're succesfully registered");
}
  
formValidator("rcarlachiani@gmail.com", "contraseñA1", "Descprición de hasta 400 caracteres");