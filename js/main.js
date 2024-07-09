class Persona {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    saludar() {
        console.log(`Hola ${this.nombre}`);
    }
    
}
const persona1 = new Persona("Camilo", 19, "Femenino")
persona1.saludar();


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