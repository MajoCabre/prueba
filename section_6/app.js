function describirPersona( p ){
    console.log(persona.nombre + ' tiene una edad de ' + persona.edad + ' y mide ' + persona.estatura);
    
    //otro tipo de concatenacion
    console.log(`${p.nombre} tiene una edad de ${p.edad} y tiene una altura de ${p.estatura}`);
};
let persona = {
    nombre: 'Fernando',
    edad: 32,
    estatura: 1.79
};

describirPersona(persona);



//Arreglo de objetos

let persona1 = {
    nombre: 'fernando',
    edad: 32
};
let persona2 = {
    nombre: 'Melissa',
    edad: 27
};
let persona3 = {
    nombre: 'Maria',
    edad: 24
};

let personas = [persona1, persona2, persona3]

console.log(personas);

for ( let i = 0; i < personas.length; i++){
    console.log(personas[i].nombre + ' -- ' + personas[i].edad);
    // let persona = personas[i];
    // console.log(persona.nombre + ' -- ' + persona.edad);

};



//CLASES

 class Carro {
     constructor (marca1, tipo1, puertas){
        this.marca = marca1;
        this.tipo = tipo1;
        this.puertas = puertas;

        this.creadoEn = 'hoy';
        this.encendido = false;
        this.gasolina = 100;
     }

     encenderCarro(){
         if (this.encendido){
             console.error('El carro está encendido, se va a dañar el motor');
         } else {
            this.encendido = true;
            console.log('El carro está encendido');   
         }
        }
    realizarViaje (consumo) {

        if(!this.encendido) return console.log ('El carro está apagado');
        
        if(consumo > this.gasolina) return console.error('El carro no tiene gasolina ' + this.gasolina);

                this.gasolina = this.gasolina - consumo;
                
                return 'A tu carro le queda ' + this.gasolina + ' de gasolina';

    }

 }



let carro = new Carro ('Mazda', 'Sedan', 4);

 console.log(carro);