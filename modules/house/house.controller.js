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
exports.HouseController = void 0;
const common_1 = require("@nestjs/common");
const accessToken_guard_1 = require("../../common/guards/accessToken.guard");
const house_dto_1 = require("./dto/house.dto");
const house_service_1 = require("./house.service");
let HouseController = class HouseController {
    constructor(houseService) {
        this.houseService = houseService;
    }
    getAllHouse() {
        return this.houseService.getAllHouse();
    }
    gethouseById(id) {
        return this.houseService.getHouseById(id);
    }
    createHouse(houseDTO) {
        return this.houseService.createHouse(houseDTO);
    }
    updateHouse(id, houseDTO) {
        return this.houseService.updateHouse(id, houseDTO);
    }
    deleteHouse(id) {
        return this.houseService.deleteHouse(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HouseController.prototype, "getAllHouse", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HouseController.prototype, "gethouseById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [house_dto_1.HouseDTO]),
    __metadata("design:returntype", void 0)
], HouseController.prototype, "createHouse", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, house_dto_1.HouseDTO]),
    __metadata("design:returntype", void 0)
], HouseController.prototype, "updateHouse", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HouseController.prototype, "deleteHouse", null);
HouseController = __decorate([
    (0, common_1.Controller)('house'),
    __metadata("design:paramtypes", [house_service_1.HouseService])
], HouseController);
exports.HouseController = HouseController;
//# sourceMappingURL=house.controller.js.map