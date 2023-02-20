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
exports.NeighborhoodEntity = void 0;
const ville_entity_1 = require("../../Ville/entity/ville.entity");
const typeorm_1 = require("typeorm");
let NeighborhoodEntity = class NeighborhoodEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], NeighborhoodEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], NeighborhoodEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ville_entity_1.VilleEntity, (ville) => ville.neighborhood, { cascade: true, eager: true }),
    __metadata("design:type", ville_entity_1.VilleEntity)
], NeighborhoodEntity.prototype, "city", void 0);
NeighborhoodEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'neighborhood' })
], NeighborhoodEntity);
exports.NeighborhoodEntity = NeighborhoodEntity;
//# sourceMappingURL=neighborhood.entity.js.map