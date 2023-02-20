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
exports.LocalisationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const property_entity_1 = require("../property/entity/property.entity");
const localisation_entity_1 = require("./entity/localisation.entity");
let LocalisationService = class LocalisationService {
    constructor(localisationRepository, propertyRepository) {
        this.localisationRepository = localisationRepository;
        this.propertyRepository = propertyRepository;
    }
    getAllLocalisation() {
        return this.localisationRepository.find();
    }
    getLocalisationById(id) {
        const localisation = this.localisationRepository.findOne({ where: { id } });
        return localisation;
    }
    async createLocalisation(propertyId, localDTO) {
        const property = await this.propertyRepository.findOne({ where: { id: propertyId } });
        const localSaved = await this.localisationRepository.create(Object.assign(Object.assign({}, localDTO), { property }));
        console.log(property.location);
        console.log(propertyId);
        await this.localisationRepository.save(localSaved);
        return localSaved;
    }
    async updateLocalisation(id, data) {
        await this.localisationRepository.update(id, data);
        const updatedLocal = await this.localisationRepository.findOne({ where: { id } });
        if (updatedLocal == null)
            throw new common_1.NotFoundException(`Localisation n° ${id} n'existe pas`);
        return updatedLocal;
    }
    async deleteLocalisation(id) {
        const deletedLocal = await this.localisationRepository.findOne({ where: { id } });
        if (deletedLocal == null)
            throw new common_1.NotFoundException(`Localisation n° ${id} n'existe pas`);
        await this.localisationRepository.delete({ id });
        return deletedLocal;
    }
};
LocalisationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(localisation_entity_1.LocalisationEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(property_entity_1.PropertyEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], LocalisationService);
exports.LocalisationService = LocalisationService;
//# sourceMappingURL=localisation.service.js.map