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

const esMayor = Persona.esMayorDeEdad(persona1.edad);
console.log(`Es mayor de edad? ${esMayor}`);


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