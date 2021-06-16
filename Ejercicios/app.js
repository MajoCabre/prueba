//Convertir de libras a kilogramos

//Como lo hizo el profersor

// let libras = 160;
// let kg = libras / 2.205;
// kg *= 100;
// kg = Math.round (kg);
// kg /= 100;

// console.log (libras + ' Libras son ' + kg + ' kg');

// let libras = 160;
// let kg = 2.2046;
// let resultado = libras / kg;
// resultado = resultado.toFixed(2);


// console.log (libras + ' Libras son ' + resultado + ' kg');



//Convertir de kilómetros a millas, sabiendo que: 1 kilómetro es igual a 0.62 millas


// let km = 20;
// let millas =  km * 0.62;

// console.log (km + ' Km son ' + millas + ' Millas');



//Calcule el área de un triángulo rectangulo que tenga Base 10 y altura 5
 
// let base = 10;
// let altura = 5;

// let area = (base * altura) / 2;

// console.log('El área de el triángulo rectangulo es: ' + area);


//Dado el siguiente arreglo :
// let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5];
//Utilizando un vivlo for, determine ¿ Cuál es el número mayor?

// let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5];

// let numeroMayor = 0;

// for(let i = 0; i <= numeros.length; i++){

//     if(numeros[i] >= numeroMayor){
//         numeroMayor = numeros[i]
//     }
// }
// console.log('El número mayor es: ' + numeroMayor);


//Dado el siguiente arreglo: 
//Haga una impresión en consola así.
// 1 es un número impar y 6 es un número par
//Debe realizar un for 

// let numeroDos = [1, 6, 8, 4, 2, 7, 10, 3, 5];

// for(let i = 0; i < numeroDos.length; i++){

//     let numero = numeroDos[i];

//     if( (numero % 2) === 0){
//         console.log(numero + ' es par');
//     } else{
//         console.log(numero + ' es impar');
//     }
// }


//Realice un algoritmo que permita la impresion en consola de la siguiente tabla
// 1  2  3  4  5
// 2  4  6  8  10
// 3  6  9  12  15
// 4  8  12  16  20
// 5  10  15  20  25
//El resultado esperado es algo así:
// 1  2  3  4  5
// 2  4  6  8  10
// 3  6  9  12  15
// 4  8  12  16  20
// 5  10  15  20  25

for(let i = 1; i <= 5; i++){

    let multiUno = i * 1;
    let multiDos = i * 2;
    let multiTres = i * 3;
    let multiCuatro = i * 4;
    let multiCinco = i * 5;

    for (let i =1; i <= 5; i++){

    }

    console.log(multiUno + '  ' + multiDos + '  ' + multiTres + '  ' + multiCuatro + '  ' + multiCinco);

}

//Como lo hizo el profesor

// for (let i = 1; i <= 5; i++){
//     let reglon = '';
    
//     for (let j = 1; j <= 5; j++){
//         reglon +=  j * i + '  ' ;
    
//     }

//     console.log(reglon);
// }

//Crear una funcion que reciba 3 argumentos numéricos (a, b, c), la funcion se debe llamar max y debe determinar cuál es el mayor de los 3 y retornarlo. debe trabajar asi:

function max (a, b, c){

    let mayor;

    if (a > b){
        if (a > c){
            mayor = a;
        } else {
            mayor = c;
        }
    } else {
        if (b > c){
            mayor = b;
        }else{
            mayor = c;
        }
    }

    return mayor;

}

let mayor = max (7, 8, 6);


console.log (mayor);


//crea una funcion que reciba como argumento un arreglo, la funcion debe retornar el nombre que tenga mas letras del arreglo y debe trabajar así:

function masLargo(heroes){

    let nombreLargo = '';

    for (let i = 0; i < heroes.length; i++){

        let nombre = heroes[i];

        if(nombre.length > nombreLargo.length){

            nombreLargo = nombre;
        }
    }

    return nombreLargo;
}

let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];

let heroeLargo = masLargo(heroes);

console.log (heroeLargo);


//Crear una funciona que reciba un arreglo como argumento, la funcion debe retornar OTRO arreglo pero filtrando todos los nombres que empiezan con una determinada letra. EJEMPLO:

let avengers = ['Doom', 'Dr Stranger', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];

let avengersCon = filtrarPorLetra (avengers, 'S');

console.log (avengersCon);