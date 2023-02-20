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
exports.TestimonialController = void 0;
const common_1 = require("@nestjs/common");
const accessToken_guard_1 = require("../../common/guards/accessToken.guard");
const testimonial_dto_1 = require("./dto/testimonial.dto");
const testimonial_service_1 = require("./testimonial.service");
let TestimonialController = class TestimonialController {
    constructor(testimonialService) {
        this.testimonialService = testimonialService;
    }
    getAllTestimonial() {
        return this.testimonialService.getAllTestimonial();
    }
    getTestimonialById(id) {
        return this.testimonialService.getTestimonialById(id);
    }
    createTestimonial(testimonialDTO) {
        return this.testimonialService.createTestimonial(testimonialDTO);
    }
    updateTestimonial(id, testimonialDTO) {
        return this.testimonialService.updateTestimonial(id, testimonialDTO);
    }
    deleteTestimonial(id) {
        return this.testimonialService.deleteTestimonial(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestimonialController.prototype, "getAllTestimonial", null);
__decorate([
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TestimonialController.prototype, "getTestimonialById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [testimonial_dto_1.TestimonialDTO]),
    __metadata("design:returntype", void 0)
], TestimonialController.prototype, "createTestimonial", null);
__decorate([
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, testimonial_dto_1.TestimonialDTO]),
    __metadata("design:returntype", void 0)
], TestimonialController.prototype, "updateTestimonial", null);
__decorate([
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TestimonialController.prototype, "deleteTestimonial", null);
TestimonialController = __decorate([
    (0, common_1.Controller)('testimonial'),
    __metadata("design:paramtypes", [testimonial_service_1.TestimonialService])
], TestimonialController);
exports.TestimonialController = TestimonialController;
//# sourceMappingURL=testimonial.controller.js.map