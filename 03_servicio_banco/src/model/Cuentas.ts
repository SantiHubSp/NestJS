export class Cuentas{
    numeroCuenta:string;
    saldo:string;
    titular:string;
    tipo:string;

    constructor(numeroCuenta:string, saldo:string, titular:string, tipo:string){
        this.numeroCuenta=numeroCuenta;
        this.saldo=saldo;
        this.titular=titular;
        this.tipo=tipo;
    }
}