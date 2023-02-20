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
exports.VilleController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ville_service_1 = require("./ville.service");
const ville_dto_1 = require("./dto/ville.dto");
const ville_entity_1 = require("./entity/ville.entity");
let VilleController = class VilleController {
    constructor(villeRepository, villeService) {
        this.villeRepository = villeRepository;
        this.villeService = villeService;
    }
    getAllville() {
        return this.villeService.getAllProperties();
    }
    getvilleById(id) {
        return this.villeService.getVilleById(id);
    }
    createville(villeDTO) {
        return this.villeService.createVille(villeDTO);
    }
    updateville(id, ville) {
        return this.villeService.updateVille(id, ville);
    }
    deleteville(id) {
        return this.villeService.deleteVille(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VilleController.prototype, "getAllville", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VilleController.prototype, "getvilleById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ville_dto_1.VilleDTO]),
    __metadata("design:returntype", void 0)
], VilleController.prototype, "createville", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, ville_entity_1.VilleEntity]),
    __metadata("design:returntype", void 0)
], VilleController.prototype, "updateville", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VilleController.prototype, "deleteville", null);
VilleController = __decorate([
    (0, common_1.Controller)('ville'),
    __param(0, (0, typeorm_1.InjectRepository)(ville_entity_1.VilleEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository, ville_service_1.VilleService])
], VilleController);
exports.VilleController = VilleController;
//# sourceMappingURL=ville.controller.js.map