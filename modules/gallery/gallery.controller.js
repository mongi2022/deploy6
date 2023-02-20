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
exports.GalleryController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const accessToken_guard_1 = require("../../common/guards/accessToken.guard");
const gallery_dto_1 = require("./dto/gallery.dto");
const gallery_service_1 = require("./gallery.service");
const editFileName_1 = require("./utils/editFileName");
const imageFileFilter_1 = require("./utils/imageFileFilter");
const fs_1 = require("fs");
const util_1 = require("util");
const readFileAsyc = (0, util_1.promisify)(fs_1.readFile);
const sharp = require("sharp");
const fs = require("fs");
let GalleryController = class GalleryController {
    constructor(galleryService) {
        this.galleryService = galleryService;
        this.sizes = [[1366, 905], [640, 424], [240, 159]];
    }
    getAllGallery() {
        return this.galleryService.getAllGallery();
    }
    getGalleryById(id) {
        return this.galleryService.getGalleryById(id);
    }
    uploadFile(files, id) {
        const response = [];
        files.forEach(file => {
            const [, ext] = file.mimetype.split('/');
            this.saveOneImage(ext, file, id);
            response.push(file);
        });
        return response;
    }
    async saveOneImage(ext, file, id) {
        if (['jpeg', 'jpg', 'png', 'gif', 'webp'].includes(ext)) {
            this.sizes.forEach((s) => {
                const width = s[0];
                const height = s[1];
                var filename = '';
                var url = '/home/tpc/Bureau/PROJET_TEST/NODEJS/real-estate-front/real-estate-front/src/assets/images';
                if (s[0] == 1366) {
                    var dir = `${url}/${id}`;
                    if (!fs.existsSync(dir)) {
                        fs.mkdirSync(dir, { recursive: true });
                    }
                    let originalname = (file.originalname);
                    filename = `${url}/${id}/big-${s[0]}-${originalname}`;
                }
                if (s[0] == 640) {
                    var dir = `${url}/${id}`;
                    if (!fs.existsSync(dir)) {
                        fs.mkdirSync(dir, { recursive: true });
                    }
                    let originalname = (file.originalname);
                    filename = `${url}/${id}/medium-${s[0]}-${originalname}`;
                }
                if (s[0] == 240) {
                    var dir = `${url}/${id}`;
                    if (!fs.existsSync(dir)) {
                        fs.mkdirSync(dir, { recursive: true });
                    }
                    let originalname = (file.originalname);
                    filename = `${url}/${id}/small-${s[0]}-${originalname}`;
                }
                readFileAsyc(file.path)
                    .then((b) => {
                    return sharp(b)
                        .resize({
                        width: width,
                        height: height
                    })
                        .toFile(filename);
                })
                    .then()
                    .catch(console.error);
            });
        }
    }
    createGallery(id, galleryDTO) {
        return this.galleryService.createGallery(id, galleryDTO);
    }
    updateGallery(id, galleryDTO) {
        return this.galleryService.updateGallery(id, galleryDTO);
    }
    deleteGallery(id) {
        return this.galleryService.deleteGallery(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GalleryController.prototype, "getAllGallery", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GalleryController.prototype, "getGalleryById", null);
__decorate([
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, common_1.Post)('upload/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('file[]', 8, {
        storage: (0, multer_1.diskStorage)({
            filename: editFileName_1.editFileName,
        }),
        fileFilter: imageFileFilter_1.imageFileFilter,
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], GalleryController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Post)('property/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, gallery_dto_1.GalleryDTO]),
    __metadata("design:returntype", void 0)
], GalleryController.prototype, "createGallery", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, gallery_dto_1.GalleryDTO]),
    __metadata("design:returntype", void 0)
], GalleryController.prototype, "updateGallery", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GalleryController.prototype, "deleteGallery", null);
GalleryController = __decorate([
    (0, common_1.Controller)('gallery'),
    __metadata("design:paramtypes", [gallery_service_1.GalleryService])
], GalleryController);
exports.GalleryController = GalleryController;
//# sourceMappingURL=gallery.controller.js.map