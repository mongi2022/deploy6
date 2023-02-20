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
exports.PropertyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/entity/user.entity");
const property_entity_1 = require("./entity/property.entity");
let PropertyService = class PropertyService {
    constructor(propertyRepository, userRepository) {
        this.propertyRepository = propertyRepository;
        this.userRepository = userRepository;
    }
    getAllProperties() {
        return this.propertyRepository.find();
    }
    async getAllPropertiesByUser(userId) {
        const user = await this.userRepository.findOne({ where: { id: userId } });
        return user.property;
    }
    getPropertyById(id) {
        return this.propertyRepository.findOne({ where: { id } });
    }
    async createProperty(userId, data) {
        const user = await this.userRepository.findOne({ where: { id: userId } });
        const savedProperty = await this.propertyRepository.create(Object.assign(Object.assign({}, data), { user }));
        return this.propertyRepository.save(savedProperty);
    }
    async updateProperty(id, data) {
        await this.propertyRepository.update({ id }, data);
        const property = await this.propertyRepository.findOne({ where: { id } });
        if (property == null)
            throw new common_1.NotFoundException(`property N°: ${id} n'existe pas`);
        return property;
    }
    async deleteProperty(id) {
        const property = await this.propertyRepository.findOne({ where: { id } });
        if (property == null)
            throw new common_1.NotFoundException(`property N°: ${id} n'existe pas`);
        this.propertyRepository.delete({ id });
        return property;
    }
};
PropertyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(property_entity_1.PropertyEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PropertyService);
exports.PropertyService = PropertyService;
//# sourceMappingURL=property.service.js.map