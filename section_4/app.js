let nombre = ('Maria');
let apellido =('Cabre');
let nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);


let a = '10';
let b = '20';
console.log(a + b);

let activo = true;
let despedido = false;
console.log(activo + despedido);

//Crea un algoritmo que basado en la nota imprima si el alumno aprueba la materia, se aprueba con 60
let nota = 40;

if(nota >= 60){
    console.log('Felicidades, aprobaste!!')
} else {
    if (nota >=50 ){
        console.log('Buuuuhhh, no aprobaste!!')
    }
        console.log('Por favor estudia mas')  
}

console.log('Fin del programa')

// Crear un algoritmo que permita determinar la calificación en letras de un alumno

// si la nota está entre 100 a 90 = A
// si la nota está entre 80 a 89 = B
// si la nota está entre 70 a 79 = C
// si la nota está entre 60 a 69 = D
// si la nota es inferior a 60 = F

let notaNueva = 90;
let notaLetra;

if (notaNueva <= 100 && notaNueva >= 90){
    notaLetra = 'A';
} else if(notaNueva >=80){
    notaLetra = 'B';
}else if(notaNueva >= 70){
    notaLetra = 'C';
} else if(otaNueva >=60){
    notaLetra = 'D'
} else{
    notaLetra = 'F'
}

console.log(notaNueva + ' es igual a ' + notaLetra);

let dia = 0;
switch (dia) {
    case 0:
        console.log('Hoy es domingo!!');
        break;
    case 1:
        console.log('Hoy es lunes!!');
        break;
    case 2:
        console.log('Hoy es martes!!');
        break;
    case 3:
        console.log('Hoy es miercoles!!');
        break;
    case 4:
        console.log('Hoy es jueves!!');
        break;
    case 5:
        console.log('Hoy es viernes!!');
        break;
    case 6:
        console.log('Hoy es sabado!!');
        break;
        default: 
        console.log('No es valido!!')

}

let day = 10
if(day === 0 ){
    console.log('Hoy es domingo!!');
    } else if( day === 1){
        console.log('Hoy es lunes!!');
        } else if( day === 2){
            console.log('Hoy es martes!!');
        }    else if( day === 3){
                console.log('Hoy es miercoles!!');
            } else if( day === 4){
                console.log('Hoy es jueves!!');
                } else if(day === 5){
                    console.log('Hoy es viernes!!');
                    } else if (day === 6){
                        console.log('Hoy es sabado!!');
                        } else{
                            console.log('No es valido!!')
                            }


let gasolina = 10;
while( gasolina > 0 ){
    console.log('Gasolina restante ' + gasolina);
    //gasolina = gasolina -1;
    gasolina--;
}
console.log('Ya no tiene gasolina');




//imprimir cualquier tabla

let base = 10;
for( let i = 1; i<= 10; i++){
    let resultado = base * i;
    console.log( base + ' x ' + i + ' = ' + resultado );
}

// limite de la variable

let limite = 5;

for (let i = 1; i <= limite; i++){
    let resultado = base * i;
    console.log( base + ' * ' + i + ' = ' + resultado);
}