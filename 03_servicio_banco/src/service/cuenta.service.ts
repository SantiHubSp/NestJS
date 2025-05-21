import { Injectable } from '@nestjs/common';
import { Cuentas } from 'src/model/Cuentas';
@Injectable()
export class CuentaService {
  cuentas:Cuentas[]=[
    new Cuentas("ES2100123456789012345678", "15230.75", "Carlos Méndez", "Cuenta Corriente"),
    new Cuentas("ES3200765432109876543210", "840.50", "Laura Sánchez", "Cuenta de Ahorro"),
    new Cuentas("ES4100987654321098765432", "5000.00", "Miguel Torres", "Cuenta Corriente"),
    new Cuentas("ES5100234567890123456789", "120.90", "Andrea López", "Cuenta Nómina"),
    new Cuentas("ES6100345678901234567890", "9800.00", "Luis Rodríguez", "Cuenta Empresa"),
    new Cuentas("ES7200456789012345678901", "320.75", "María González", "Cuenta Ahorro"),
    new Cuentas("ES8300567890123456789012", "7200.00", "Javier Morales", "Cuenta Corriente"),
    new Cuentas("ES9400678901234567890123", "210.00", "Patricia Ruiz", "Cuenta Nómina"),
    new Cuentas("ES0500789012345678901234", "14500.25", "Fernando Gil", "Cuenta Empresa"),
    new Cuentas("ES1600890123456789012345", "75.10", "Elena Navarro", "Cuenta Ahorro"),
];
  save(cuenta:Cuentas):boolean{
      if(this.cuentas.some(cuentas=>cuentas.numeroCuenta===cuentas.numeroCuenta)){
        this.cuentas.push(cuenta);
        return true;
      }
  }
  findByNumeroCuenta(numeroCuenta:string):Cuentas[]{
    return this.cuentas.filter(cuenta=>cuenta.numeroCuenta===numeroCuenta);
  }
  FindByTipo(tipo:string):Cuentas[]{
    return this.cuentas.filter(cuenta=>cuenta.tipo===tipo);

  }
  FindBySaldoMin(saldoMin:string):Cuentas[]{

  }
  deleteByNumeroCuenta(numeroCuenta:string):void[]{

  }
}
