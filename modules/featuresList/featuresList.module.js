"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturelistModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const featuresList_controller_1 = require("./featuresList.controller");
const featuresList_service_1 = require("./featuresList.service");
const featuresList_entity_1 = require("./entity/featuresList.entity");
let FeaturelistModule = class FeaturelistModule {
};
FeaturelistModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([featuresList_entity_1.FeaturelistEntity])],
        controllers: [featuresList_controller_1.FeaturelistController],
        providers: [featuresList_service_1.FeaturelistService]
    })
], FeaturelistModule);
exports.FeaturelistModule = FeaturelistModule;
//# sourceMappingURL=featuresList.module.js.map