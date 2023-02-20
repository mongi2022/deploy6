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
exports.VilleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ville_entity_1 = require("./entity/ville.entity");
let VilleService = class VilleService {
    constructor(villeRepository) {
        this.villeRepository = villeRepository;
    }
    getAllProperties() {
        return this.villeRepository.find();
    }
    getVilleById(id) {
        return this.villeRepository.findOne({ where: { id } });
    }
    async createVille(data) {
        const ville = await this.villeRepository.create(data);
        return this.villeRepository.save(ville);
    }
    async updateVille(id, data) {
        await this.villeRepository.update({ id }, data);
        const ville = await this.villeRepository.findOne({ where: { id } });
        if (ville == null)
            throw new common_1.NotFoundException(`ville N°: ${id} n'existe pas`);
        return ville;
    }
    async deleteVille(id) {
        const ville = await this.villeRepository.findOne({ where: { id } });
        if (ville == null)
            throw new common_1.NotFoundException(`ville N°: ${id} n'existe pas`);
        this.villeRepository.delete({ id });
        return ville;
    }
};
VilleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ville_entity_1.VilleEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], VilleService);
exports.VilleService = VilleService;
//# sourceMappingURL=ville.service.js.map