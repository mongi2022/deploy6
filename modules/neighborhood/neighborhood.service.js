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
exports.NeighborhoodService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ville_entity_1 = require("../Ville/entity/ville.entity");
const neighborhood_entity_1 = require("./entity/neighborhood.entity");
let NeighborhoodService = class NeighborhoodService {
    constructor(neighborhoodRepository) {
        this.neighborhoodRepository = neighborhoodRepository;
    }
    getAllNeighborhood() {
        return this.neighborhoodRepository.find();
    }
    getNeighborhoodById(id) {
        const neighborhood = this.neighborhoodRepository.findOne({ where: { id } });
        return neighborhood;
    }
    getNeighborhoodByCity(cityId) {
        const regions = this.neighborhoodRepository.query(`SELECT * FROM neighborhood where cityId=${cityId}`);
        return regions;
    }
    async createNeighborhood(cityId, neighborhoodDTO) {
        const city = await this.villeRepository.findOne({ where: { id: cityId } });
        const savedNeighborhood = await this.neighborhoodRepository.create(Object.assign(Object.assign({}, neighborhoodDTO), { city }));
        await this.neighborhoodRepository.save(savedNeighborhood);
        return savedNeighborhood;
    }
    async updateNeighborhood(id, data) {
        await this.neighborhoodRepository.update(id, data);
        const updatedVideo = await this.neighborhoodRepository.findOne({ where: { id } });
        if (updatedVideo == null)
            throw new common_1.NotFoundException(`Feature n° ${id} n'existe pas`);
        return updatedVideo;
    }
    async deleteNeighborhood(id) {
        const deletedVideo = await this.neighborhoodRepository.findOne({ where: { id } });
        if (deletedVideo == null)
            throw new common_1.NotFoundException(`Feature n° ${id} n'existe pas`);
        await this.neighborhoodRepository.delete({ id });
        return deletedVideo;
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(ville_entity_1.VilleEntity),
    __metadata("design:type", typeorm_2.Repository)
], NeighborhoodService.prototype, "villeRepository", void 0);
NeighborhoodService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(neighborhood_entity_1.NeighborhoodEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NeighborhoodService);
exports.NeighborhoodService = NeighborhoodService;
//# sourceMappingURL=neighborhood.service.js.map