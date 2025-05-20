import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getHelloPersonal(nombre: string): string;
    getHelloCompeto(nombre: string, edad: number): string;
}
