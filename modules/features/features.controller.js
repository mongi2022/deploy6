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
exports.FeaturesController = void 0;
const common_1 = require("@nestjs/common");
const features_dto_1 = require("./dto/features.dto");
const features_service_1 = require("./features.service");
let FeaturesController = class FeaturesController {
    constructor(featureService) {
        this.featureService = featureService;
    }
    getAllFeatures() {
        return this.featureService.getAllFeatures();
    }
    getFeaturesById(id) {
        return this.featureService.getFeaturesById(id);
    }
    createFeatures(id, featureDTO) {
        return this.featureService.createFeatures(id, featureDTO);
    }
    updateFeatures(id, featureDTO) {
        return this.featureService.updateFeatures(id, featureDTO);
    }
    deleteFeatures(id) {
        return this.featureService.deleteFeatures(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FeaturesController.prototype, "getAllFeatures", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FeaturesController.prototype, "getFeaturesById", null);
__decorate([
    (0, common_1.Post)('property/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, features_dto_1.FeaturesDTO]),
    __metadata("design:returntype", void 0)
], FeaturesController.prototype, "createFeatures", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, features_dto_1.FeaturesDTO]),
    __metadata("design:returntype", void 0)
], FeaturesController.prototype, "updateFeatures", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FeaturesController.prototype, "deleteFeatures", null);
FeaturesController = __decorate([
    (0, common_1.Controller)('features'),
    __metadata("design:paramtypes", [features_service_1.FeaturesService])
], FeaturesController);
exports.FeaturesController = FeaturesController;
//# sourceMappingURL=features.controller.js.map