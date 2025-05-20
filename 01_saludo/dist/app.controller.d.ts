import { AppService } from './app.service';
import { Ficha } from './Model/ficha';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getHelloPersonal(nombre: string): string;
    getHelloCompeto(nombre: string, edad: number): string;
    getFicha(nombre: string, edad: number): Ficha;
    altaFicha(ficha: Ficha): void;
}
