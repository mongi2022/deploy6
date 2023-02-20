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
exports.LocalisationController = void 0;
const common_1 = require("@nestjs/common");
const localisation_dto_1 = require("./dto/localisation.dto");
const localisation_service_1 = require("./localisation.service");
let LocalisationController = class LocalisationController {
    constructor(localService) {
        this.localService = localService;
    }
    getAllLocalisations() {
        return this.localService.getAllLocalisation();
    }
    getLocalisationById(id) {
        return this.localService.getLocalisationById(id);
    }
    createLocalisation(id, localDTO) {
        return this.localService.createLocalisation(id, localDTO);
    }
    updateLocalisation(id, localDTO) {
        return this.localService.updateLocalisation(id, localDTO);
    }
    deleteLocalisation(id) {
        return this.localService.deleteLocalisation(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocalisationController.prototype, "getAllLocalisations", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LocalisationController.prototype, "getLocalisationById", null);
__decorate([
    (0, common_1.Post)('property/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, localisation_dto_1.LocalisationDTO]),
    __metadata("design:returntype", void 0)
], LocalisationController.prototype, "createLocalisation", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, localisation_dto_1.LocalisationDTO]),
    __metadata("design:returntype", void 0)
], LocalisationController.prototype, "updateLocalisation", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LocalisationController.prototype, "deleteLocalisation", null);
LocalisationController = __decorate([
    (0, common_1.Controller)('localisation'),
    __metadata("design:paramtypes", [localisation_service_1.LocalisationService])
], LocalisationController);
exports.LocalisationController = LocalisationController;
//# sourceMappingURL=localisation.controller.js.map