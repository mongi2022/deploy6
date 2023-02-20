"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeighborhoodModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ville_entity_1 = require("../Ville/entity/ville.entity");
const ville_service_1 = require("../Ville/ville.service");
const neighborhood_entity_1 = require("./entity/neighborhood.entity");
const neighborhood_controller_1 = require("./neighborhood.controller");
const neighborhood_service_1 = require("./neighborhood.service");
let NeighborhoodModule = class NeighborhoodModule {
};
NeighborhoodModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([neighborhood_entity_1.NeighborhoodEntity, ville_entity_1.VilleEntity])],
        controllers: [neighborhood_controller_1.NeighborhoodController],
        providers: [neighborhood_service_1.NeighborhoodService, ville_service_1.VilleService],
    })
], NeighborhoodModule);
exports.NeighborhoodModule = NeighborhoodModule;
//# sourceMappingURL=neighborhood.module.js.map