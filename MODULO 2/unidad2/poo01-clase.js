class cuentaBancaria {
    _saldo;
    constructor(saldoInicial) {
        this._saldo = saldoInicial;
    }
    depositar(cantidad) {
        this._saldo += cantidad;
    }
    retirar(cantidad) {
        if (cantidad <= this._saldo) {
            this._saldo -= cantidad;
        } else {
            console.log("Fondos insuficientes ");
        }
    }
    getSaldo() {
        return this._saldo;
    }
}
const cuenta = new cuentaBancaria(1000);
console.log(cuenta.getSaldo());
cuenta.depositar(500);
console.log(cuenta.getSaldo());
cuenta.retirar(2000);
cuenta.retirar(100);
console.log(cuenta.getSaldo());



//TRABAJO 
class TiendaNba {
    _productosDisponibles;

    constructor(cantidadInicial) {
        this._productosDisponibles = cantidadInicial;
    }

    agregarProductos(cantidad) {
        this._productosDisponibles += cantidad;
    }

    venderProductos(cantidad) {
        if (cantidad <= this._productosDisponibles) {
            this._productosDisponibles -= cantidad;
        } else {
            console.log("Productos insuficientes");
        }
    }

    getProductosDisponibles() {
        return this._productosDisponibles;
    }
}

const tienda = new TiendaNba(1000);
console.log(tienda.getProductosDisponibles());
tienda.agregarProductos(500);
console.log(tienda.getProductosDisponibles());
tienda.venderProductos(2000);
tienda.venderProductos(100);
console.log(tienda.getProductosDisponibles());