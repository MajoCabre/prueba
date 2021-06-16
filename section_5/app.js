function sumar(a, b){
    return a + b;
}

let total = sumar( 10 , 20);
console.log('Total: ' + total);



function imprimirTabla( base, limite ){

    for (let i = 1; i <= limite; i++){
        let resultado = base * i;
        console.log( base + ' x ' + i + ' = ' + resultado);
    }
}
imprimirTabla(10 , 5);
imprimirTabla(3 , 5);



//Crear una funcion que me permita determinar la calificación de 3 alumnos, uno con nota de 100, otro con nota de 80 y otro con nota de 59


function calcularNota(notaNueva){
    let notaLetra;

    if (notaNueva <= 100 && notaNueva >= 90){
        notaLetra = 'A';
    } else if(notaNueva >=80){
        notaLetra = 'B';
    }else if(notaNueva >= 70){
        notaLetra = 'C';
    } else if(notaNueva >=60){
        notaLetra = 'D'
    } else{
        notaLetra = 'F'
    }
    console.log(notaNueva + ' es igual a ' + notaLetra);
}

calcularNota(100);
calcularNota(80);
calcularNota(59);


//Arrays

let flores = ['Rosa', 'Girasol', 'Lirio'];

console.log(flores[0]);


let personas = ['Fernando', 'Melisa', 'Maria'];
let salarios = [1000, 12000, 3000];
for(i = 0; i < personas.length; i++){
    console.log(personas[i] + ' tiene un salario de:' + salarios[i]);
}

