//Ejercicio 1

const products = [
    {
        price: 50000,
        brand: 'Chung Lee',
        name: 'Monopatín' 
    },
    {
        price: 4000,
        brand: 'Adidas',
        name: 'Pelota' 
    },
    {
        price: 60000,
        brand: 'Walmart',
        name: 'Bicicleta' 
    },
    {
        price: 2500,
        brand: 'Walmart',
        name: 'Pata pata' 
    },
];

//Ejercicio 1.1: Funcion que devuelve productos de la misma marca

const sameBrand = (brand) => {
    console.log('<<< Ejercicio 1.1 >>>');

    let newProducts = [];
    products.forEach((product) => {
        if (product.brand === brand) {
            newProducts.push(product);
        }
    })
    console.log(newProducts);
}

sameBrand('Walmart');

//Ejercicio 1.2: Funcion que devuelve productos de mayor precio que lo recibido por parametro

const moreExpensive = (price) => {
    console.log('<<< Ejercicio 1.2 >>>')
    
    let moreExpensiveProducts = [];
    products.forEach((product) => {
        if (product.price > price) {
            moreExpensiveProducts.push(product);
        }
    })
    console.log(moreExpensiveProducts);
}

moreExpensive(20000);

//Ejercicio 1.3: Funcion que cambie los productos de marca Walmart por ChangoMas

const changeBrand = (newBrand) => {
    console.log('<<< Ejercicio 1.3 >>>');
    
    products.forEach((product) => {
        if (product.brand === 'Walmart' ) {
            product.brand = newBrand;
        }
    })
    console.log(products);
}

changeBrand('ChangoMas');

//Ejercicio 1.4: Función que devuelva la suma de todos los precios, el promedio, el máximo y el mínimo

const sumMinMaxAverage = (products) => {
    console.log('<<< Ejercicio 1.4 >>>')

    //All prices
    const prices = [];

    //Total prices
    let totalPrices = 0;

    products.forEach((product) => {
        totalPrices = totalPrices+=product.price;
        prices.push(product.price)
    })

    //Average of all product prices
    const average = totalPrices / products.length;

    //Min and max price
    const highest = prices.reduce((previous, current) => {
        return current > previous ? current : previous;
    });
    
    const lowest = prices.reduce((previous, current) => {
        return current < previous ? current : previous;
    });

    console.log('La suma total de los precios de los productos es:', totalPrices)
    console.log('El promedio de los precios de los productos es:', average)
    console.log('El precio mínimo es:', lowest, 'y el máximo es:', highest)
}

sumMinMaxAverage(products);