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
exports.FeaturelistController = void 0;
const common_1 = require("@nestjs/common");
const featuresList_service_1 = require("./featuresList.service");
const featuresList_dto_1 = require("./dto/featuresList.dto");
let FeaturelistController = class FeaturelistController {
    constructor(featurelistService) {
        this.featurelistService = featurelistService;
    }
    getAllFeaturelist() {
        return this.featurelistService.getAllFeaturelist();
    }
    getBienById(id) {
        return this.featurelistService.getFeaturelistById(id);
    }
    createFeaturelist(featurelistDTO) {
        return this.featurelistService.createFeaturelist(featurelistDTO);
    }
    updateFeaturelist(id, featurelistDTO) {
        return this.featurelistService.updateFeaturelist(id, featurelistDTO);
    }
    deleteFeaturelist(id) {
        return this.featurelistService.deleteFeaturelist(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FeaturelistController.prototype, "getAllFeaturelist", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FeaturelistController.prototype, "getBienById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [featuresList_dto_1.FeaturelistDTO]),
    __metadata("design:returntype", void 0)
], FeaturelistController.prototype, "createFeaturelist", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, featuresList_dto_1.FeaturelistDTO]),
    __metadata("design:returntype", void 0)
], FeaturelistController.prototype, "updateFeaturelist", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FeaturelistController.prototype, "deleteFeaturelist", null);
FeaturelistController = __decorate([
    (0, common_1.Controller)('featurelist'),
    __metadata("design:paramtypes", [featuresList_service_1.FeaturelistService])
], FeaturelistController);
exports.FeaturelistController = FeaturelistController;
//# sourceMappingURL=featuresList.controller.js.map