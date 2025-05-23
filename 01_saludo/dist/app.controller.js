"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const ficha_1 = require("./Model/ficha");
let AppController = class AppController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    getHelloPersonal(nombre) {
        return this.appService.getHello() + ": " + nombre;
    }
    getHelloCompeto(nombre, edad) {
        return this.appService.getHello() + " te llamas: " + nombre + " y tienes " + edad + " años";
    }
    getFicha(nombre, edad) {
        return new ficha_1.Ficha(nombre, edad, "profe@gmail.com");
    }
    altaFicha(ficha) {
        console.log(ficha.nombre + "-" + ficha.edad + "-" + ficha.email);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)("general"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)("personal/:name"),
    __param(0, (0, common_1.Param)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], AppController.prototype, "getHelloPersonal", null);
__decorate([
    (0, common_1.Get)('completo'),
    __param(0, (0, common_1.Query)("name")),
    __param(1, (0, common_1.Query)("age")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", String)
], AppController.prototype, "getHelloCompeto", null);
__decorate([
    (0, common_1.Get)("ficha/:name/:age"),
    __param(0, (0, common_1.Param)("name")),
    __param(1, (0, common_1.Param)("age")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", ficha_1.Ficha)
], AppController.prototype, "getFicha", null);
__decorate([
    (0, common_1.Post)('alta'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ficha_1.Ficha]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "altaFicha", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)("Saludos"),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map