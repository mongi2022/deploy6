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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceEntity = void 0;
const property_entity_1 = require("../../property/entity/property.entity");
const typeorm_1 = require("typeorm");
let PriceEntity = class PriceEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PriceEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], PriceEntity.prototype, "sale", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], PriceEntity.prototype, "rent", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => property_entity_1.PropertyEntity, property => property.priceDollar, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: 'propertyId' }),
    __metadata("design:type", property_entity_1.PropertyEntity)
], PriceEntity.prototype, "property", void 0);
PriceEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'price' })
], PriceEntity);
exports.PriceEntity = PriceEntity;
//# sourceMappingURL=price.entity.js.map