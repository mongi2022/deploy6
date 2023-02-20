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
exports.PropertyController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const property_service_1 = require("./property.service");
const property_dto_1 = require("./dto/property.dto");
const property_entity_1 = require("./entity/property.entity");
let PropertyController = class PropertyController {
    constructor(propertyRepository, propertyService) {
        this.propertyRepository = propertyRepository;
        this.propertyService = propertyService;
    }
    getAllproperty() {
        return this.propertyService.getAllProperties();
    }
    getpropertyById(id) {
        return this.propertyService.getPropertyById(id);
    }
    getAllPropertiesByUser(userId) {
        return this.propertyService.getAllPropertiesByUser(userId);
    }
    createproperty(userId, propertyDTO) {
        return this.propertyService.createProperty(userId, propertyDTO);
    }
    updateproperty(id, property) {
        return this.propertyService.updateProperty(id, property);
    }
    deleteproperty(id) {
        return this.propertyService.deleteProperty(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "getAllproperty", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "getpropertyById", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "getAllPropertiesByUser", null);
__decorate([
    (0, common_1.Post)('user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, property_dto_1.PropertyDTO]),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "createproperty", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, property_entity_1.PropertyEntity]),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "updateproperty", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PropertyController.prototype, "deleteproperty", null);
PropertyController = __decorate([
    (0, common_1.Controller)('property'),
    __param(0, (0, typeorm_1.InjectRepository)(property_entity_1.PropertyEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository, property_service_1.PropertyService])
], PropertyController);
exports.PropertyController = PropertyController;
//# sourceMappingURL=property.controller.js.map