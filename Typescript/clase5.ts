type Roles = "Admin" | "User";

type Person = {
    age: unknown,
    name: string,
    role: Roles,
    addAge: (age: number) => void; //Funcion que no retorna nada: void
};

const person: Person = {
    age: 25,
    name: 'Rodrigo',
    role: 'User',
    addAge: (age) => {
        console.log(age)
    },
};

const age = person.age as number;

type Auto = Record<string, number>

const auto: Auto = { marca: 1 }