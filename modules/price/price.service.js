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
exports.PriceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const property_entity_1 = require("../property/entity/property.entity");
const price_entity_1 = require("./entity/price.entity");
let PriceService = class PriceService {
    constructor(priceRepository, propertyRepository) {
        this.priceRepository = priceRepository;
        this.propertyRepository = propertyRepository;
    }
    getAllPrice() {
        return this.priceRepository.find();
    }
    getPriceById(id) {
        const price = this.priceRepository.findOne({ where: { id } });
        return price;
    }
    async createPrice(propertyId, priceDTO) {
        const property = await this.propertyRepository.findOne({ where: { id: propertyId } });
        const price = await this.priceRepository.findOne({ where: { id: propertyId } });
        console.log(price);
        if (price != null) {
            throw new common_1.NotFoundException(`Appartement n° ${propertyId} n'existe pas`);
        }
        else if (price == null) {
            const priceSaved = await this.priceRepository.create(Object.assign(Object.assign({}, priceDTO), { property }));
            await this.priceRepository.save(priceSaved);
            return priceSaved;
        }
    }
    async updatePrice(id, data) {
        await this.priceRepository.update(id, data);
        const updatedVideo = await this.priceRepository.findOne({ where: { id } });
        if (updatedVideo == null)
            throw new common_1.NotFoundException(`Price n° ${id} n'existe pas`);
        return updatedVideo;
    }
    async deletePrice(id) {
        const deletedVideo = await this.priceRepository.findOne({ where: { id } });
        if (deletedVideo == null)
            throw new common_1.NotFoundException(`Price n° ${id} n'existe pas`);
        await this.priceRepository.delete({ id });
        return deletedVideo;
    }
};
PriceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(price_entity_1.PriceEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(property_entity_1.PropertyEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PriceService);
exports.PriceService = PriceService;
//# sourceMappingURL=price.service.js.map