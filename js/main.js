// Ejercicio #1
class Persona {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    saludar() {
        console.log(`Hola ${this.nombre}`);
    }
    
    static esMayorDeEdad(edad){
        if (edad >= 18 ) {
            return true
        }else {
            return false
        }
    }
}

const persona1 = new Persona("Camilo", 19, "Femenino")
persona1.saludar();

// Ejercicio #3
const esMayor = Persona.esMayorDeEdad(persona1.edad);
console.log(`Es mayor de edad? ${esMayor}`);



// Ejercicio #2
class Estudiante extends Persona{
    constructor(nombre, edad, sexo, carrera) {
        super(nombre, edad, sexo);
        this.carrera = carrera;
    }
    estudiar(){
        console.log(`La carrera que esta estudiando es: ${this.carrera}`);
    }
}
const estudiante1 = new Estudiante("Carlos", 20, "Masculino", "Ingeniería en Sistemas")
estudiante1.saludar();
estudiante1.estudiar();


// Ejercicio #4
class Animal{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    hacerSonido(){
        console.log("El animal ha emitido un sonido");
    }
}
class Perro extends Animal{
    constructor(nombre, edad, raza){
        super(nombre, edad);
        this.raza = raza;
    }
    moverCola(){
        console.log("El perro esta moviendo la cola");
    }
}
const perro1 = new Perro ("lukas", 6, "meztisos")
perro1.hacerSonido();
perro1.moverCola();


// Ejercicio #5

class Figura{
    constructor(color, area){
        this.color = color;
        this.area = area;
    }
    calcularArea(){
        console.log(`El area de la figura es: ${this.area}`);
    }
}

const figura1 = new Figura ("blue", 3 )
figura1.calcularArea();
let message= document.querySelector("#message")
message.innerHTML = `La figura tiene el color ${figura1.color} y un area de ${figura1.area} unidades cuadradas`;
