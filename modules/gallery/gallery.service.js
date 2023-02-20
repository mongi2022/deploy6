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
exports.GalleryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const property_entity_1 = require("../property/entity/property.entity");
const gallery_entity_1 = require("./entity/gallery.entity");
let GalleryService = class GalleryService {
    constructor(galleryRepository) {
        this.galleryRepository = galleryRepository;
    }
    getAllGallery() {
        return this.galleryRepository.find();
    }
    getGalleryById(id) {
        const gallery = this.galleryRepository.findOne({ where: { id } });
        return gallery;
    }
    async createGallery(properyId, galleryDTO) {
        const property = await this.propertyRepository.findOne({ where: { id: properyId } });
        const savedGallery = await this.galleryRepository.create(Object.assign(Object.assign({}, galleryDTO), { property }));
        await this.galleryRepository.save(savedGallery);
        return savedGallery;
    }
    async updateGallery(id, data) {
        await this.galleryRepository.update(id, data);
        const updatedVideo = await this.galleryRepository.findOne({ where: { id } });
        if (updatedVideo == null)
            throw new common_1.NotFoundException(`Feature n° ${id} n'existe pas`);
        return updatedVideo;
    }
    async deleteGallery(id) {
        const deletedVideo = await this.galleryRepository.findOne({ where: { id } });
        if (deletedVideo == null)
            throw new common_1.NotFoundException(`Feature n° ${id} n'existe pas`);
        await this.galleryRepository.delete({ id });
        return deletedVideo;
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(property_entity_1.PropertyEntity),
    __metadata("design:type", typeorm_2.Repository)
], GalleryService.prototype, "propertyRepository", void 0);
GalleryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(gallery_entity_1.GalleryEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GalleryService);
exports.GalleryService = GalleryService;
//# sourceMappingURL=gallery.service.js.map