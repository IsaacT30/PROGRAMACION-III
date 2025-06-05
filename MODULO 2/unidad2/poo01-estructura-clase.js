var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.saludar = function () {
        console.log("Hola, soy ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os."));
    };
    return Persona;
}());
var Isaac = new Persona("Isaac", 30);
ana.saludar();


//trabajo 
var Usuario = /** @class */ (function () {
    function Usuario(nombre, id) {
        this.nombre = nombre;
        this.id = id;
    }
    Usuario.prototype.saludar = function () {
        console.log("Hola, soy ".concat(this.nombre, " y mi id es ").concat(this.id, " ."));
    };
    return Usuario;
}());
var maria = new Usuario("Isaac", 12545450);
maria.saludar();