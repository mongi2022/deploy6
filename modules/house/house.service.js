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
exports.HouseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const house_entity_1 = require("./entity/house.entity");
let HouseService = class HouseService {
    constructor(houseRepository) {
        this.houseRepository = houseRepository;
    }
    getAllHouse() {
        return this.houseRepository.find();
    }
    getHouseById(id) {
        return this.houseRepository.findOne({ where: { id } });
    }
    async createHouse(houseDTO) {
        const house = new house_entity_1.HouseEntity();
        house.caution = houseDTO.caution;
        house.nb_chambre = houseDTO.nb_chambre;
        house.commission = houseDTO.commission;
        house.couvert = houseDTO.couvert;
        house.loyer = houseDTO.loyer;
        house.nb_etage = houseDTO.nb_etage;
        house.price = houseDTO.price;
        house.sal_bain = houseDTO.sal_bain;
        house.surface_terrain = houseDTO.surface_terrain;
        house.titre_bleu = houseDTO.titre_bleu;
        const houseRes = this.houseRepository.create(house);
        await this.houseRepository.save(houseRes);
        return houseRes;
    }
    async updateHouse(id, houseDTO) {
        await this.houseRepository.update(id, houseDTO);
        const houseUppdated = await this.houseRepository.findOne({ where: { id } });
        if (houseUppdated == null)
            throw new common_1.NotFoundException(`House n° ${id} n'existe pas`);
        return houseUppdated;
    }
    async deleteHouse(id) {
        const deletedHouse = await this.houseRepository.findOne({ where: { id } });
        if (deletedHouse == null)
            throw new common_1.NotFoundException(`House n° ${id} n'existe pas`);
        await this.houseRepository.delete({ id });
        return deletedHouse;
    }
};
HouseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(house_entity_1.HouseEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HouseService);
exports.HouseService = HouseService;
//# sourceMappingURL=house.service.js.map