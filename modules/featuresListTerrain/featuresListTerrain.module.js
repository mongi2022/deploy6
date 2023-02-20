"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturelistTerrainModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const featuresListTerrain_controller_1 = require("./featuresListTerrain.controller");
const featuresListTerrain_service_1 = require("./featuresListTerrain.service");
const featuresListTerrain_entity_1 = require("./entity/featuresListTerrain.entity");
let FeaturelistTerrainModule = class FeaturelistTerrainModule {
};
FeaturelistTerrainModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([featuresListTerrain_entity_1.FeaturelistTerrainEntity])],
        controllers: [featuresListTerrain_controller_1.FeaturelistTerrainController],
        providers: [featuresListTerrain_service_1.FeaturelistTerrainService]
    })
], FeaturelistTerrainModule);
exports.FeaturelistTerrainModule = FeaturelistTerrainModule;
//# sourceMappingURL=featuresListTerrain.module.js.map