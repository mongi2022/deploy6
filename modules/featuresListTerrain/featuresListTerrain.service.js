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
exports.FeaturelistTerrainService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const featuresListTerrain_entity_1 = require("./entity/featuresListTerrain.entity");
let FeaturelistTerrainService = class FeaturelistTerrainService {
    constructor(featurelistTerrainRepository) {
        this.featurelistTerrainRepository = featurelistTerrainRepository;
    }
    getAllFeaturelistTerrain() {
        return this.featurelistTerrainRepository.find();
    }
    async getFeaturelistTerrainById(id) {
        return await this.featurelistTerrainRepository.findOne({ where: { id } });
    }
    async createFeaturelistTerrain(data) {
        const featurelistTerrain = await this.featurelistTerrainRepository.create(data);
        return this.featurelistTerrainRepository.save(featurelistTerrain);
    }
    async updateFeaturelistTerrain(id, data) {
        await this.featurelistTerrainRepository.update({ id }, data);
        const newFeaturelistTerrain = await this.featurelistTerrainRepository.findOne({ where: { id } });
        if (newFeaturelistTerrain == null)
            throw new common_1.NotFoundException(`FeaturelistTerrain n° ${id} n'existe pas`);
        return newFeaturelistTerrain;
    }
    async deleteFeaturelistTerrain(id) {
        const deleted = await this.featurelistTerrainRepository.findOne({ where: { id } });
        if (deleted == null)
            throw new common_1.NotFoundException(`FeaturelistTerrain n° ${id} n'existe pas`);
        await this.featurelistTerrainRepository.delete({ id });
        return deleted;
    }
};
FeaturelistTerrainService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(featuresListTerrain_entity_1.FeaturelistTerrainEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FeaturelistTerrainService);
exports.FeaturelistTerrainService = FeaturelistTerrainService;
//# sourceMappingURL=featuresListTerrain.service.js.map