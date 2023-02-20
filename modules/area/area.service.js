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
exports.AreaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const property_entity_1 = require("../property/entity/property.entity");
const area_entity_1 = require("./entity/area.entity");
let AreaService = class AreaService {
    constructor(areaRepository, propertyRepository) {
        this.areaRepository = areaRepository;
        this.propertyRepository = propertyRepository;
    }
    getAllArea() {
        return this.areaRepository.find();
    }
    getAreaById(id) {
        const area = this.areaRepository.findOne({ where: { id } });
        return area;
    }
    async createArea(propertyId, areaDTO) {
        const property = await this.propertyRepository.findOne({ where: { id: propertyId } });
        const areaSaved = await this.areaRepository.create(Object.assign(Object.assign({}, areaDTO), { property }));
        await this.areaRepository.save(areaSaved);
        return areaSaved;
    }
    async updateArea(id, data) {
        await this.areaRepository.update(id, data);
        const updatedVideo = await this.areaRepository.findOne({ where: { id } });
        if (updatedVideo == null)
            throw new common_1.NotFoundException(`Area n° ${id} n'existe pas`);
        return updatedVideo;
    }
    async deleteArea(id) {
        const deletedVideo = await this.areaRepository.findOne({ where: { id } });
        if (deletedVideo == null)
            throw new common_1.NotFoundException(`Area n° ${id} n'existe pas`);
        await this.areaRepository.delete({ id });
        return deletedVideo;
    }
};
AreaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(area_entity_1.AreaEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(property_entity_1.PropertyEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AreaService);
exports.AreaService = AreaService;
//# sourceMappingURL=area.service.js.map