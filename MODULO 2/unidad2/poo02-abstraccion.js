class Television {
    _marca
    _encendido
    constructor(marca){
        this._marca = marca;
        this._encendido = false;
    }
    encender(){
        this._encendido = true;
        console.log("televisión encendida");
    }
    apagar(){
        this._encendido = false;
        console.log("televisión apagada");
    }
}

const miTV = new Television("Samsung");
miTV.encender();
miTV.apagar();


//TRABAJO 
class NbaTienda {
    _nombre
    _abierto
    constructor(nombre){
        this._nombre = nombre;
        this._abierto = false;
    }
    abrir(){
        this._abierto = true;
        console.log("tienda NBA abierta");
    }
    cerrar(){
        this._abierto = false;
        console.log("tienda NBA cerrada");
    }
}

const miNbaTienda = new NbaTienda("Central");
miNbaTienda.abrir();
miNbaTienda.cerrar();