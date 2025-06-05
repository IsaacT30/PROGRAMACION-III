class PersonaEjemplo {
    nombre: string;
    edad: number;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(): void {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

const isaacPersona = new PersonaEjemplo("Isaac", 30);
isaacPersona.saludar();


//trabajo 
class UsuarioSistema {
    nombre: string;
    id: number;
    constructor(nombre: string, id: number) {
        this.nombre = nombre;
        this.id = id;
    }
    saludar(): void {
        console.log(`Hola, soy ${this.nombre} y mi id es ${this.id} .`);
    }
}

const isaacUsuario = new UsuarioSistema("Isaac", 12545450);
isaacUsuario.saludar();