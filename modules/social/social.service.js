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
exports.SocialService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const social_entity_1 = require("./entity/social.entity");
let SocialService = class SocialService {
    constructor(socialRepository) {
        this.socialRepository = socialRepository;
    }
    getAllSocial() {
        return this.socialRepository.find();
    }
    getSocialById(id) {
        return this.socialRepository.findOne({ where: { id } });
    }
    async createSocial(agentId, socialDTO) {
        const agentSaved = await this.socialRepository.create(Object.assign({}, socialDTO));
        await this.socialRepository.save(agentSaved);
        return agentSaved;
    }
    async updateSocial(id, catDTO) {
        await this.socialRepository.update(id, catDTO);
        const updatedCat = await this.socialRepository.findOne({ where: { id } });
        if (updatedCat == null)
            throw new common_1.NotFoundException(`Social n° ${id} n'existe pas`);
        return updatedCat;
    }
    async deleteSocial(id) {
        const deletedCat = await this.socialRepository.findOne({ where: { id } });
        if (deletedCat == null)
            throw new common_1.NotFoundException(`Social n° ${id} n'existe pas`);
        this.socialRepository.delete(id);
        return deletedCat;
    }
};
SocialService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(social_entity_1.SocialEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SocialService);
exports.SocialService = SocialService;
//# sourceMappingURL=social.service.js.map