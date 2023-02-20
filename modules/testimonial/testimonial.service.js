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
exports.TestimonialService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const testimonial_entity_1 = require("./entity/testimonial.entity");
let TestimonialService = class TestimonialService {
    constructor(testimonialRepository) {
        this.testimonialRepository = testimonialRepository;
    }
    getAllTestimonial() {
        return this.testimonialRepository.find();
    }
    getTestimonialById(id) {
        return this.testimonialRepository.findOne({ where: { id } });
    }
    async createTestimonial(data) {
        const testimonial = await this.testimonialRepository.create(data);
        return this.testimonialRepository.save(testimonial);
    }
    async updateTestimonial(id, data) {
        await this.testimonialRepository.update(id, data);
        const updatedTestimonial = await this.testimonialRepository.findOne({ where: { id } });
        if (updatedTestimonial == null)
            throw new common_1.NotFoundException(`Testimonial n° ${id} n'existe pas`);
        return updatedTestimonial;
    }
    async deleteTestimonial(id) {
        const deletedTestimonial = await this.testimonialRepository.findOne({ where: { id } });
        if (deletedTestimonial == null)
            throw new common_1.NotFoundException(`Testimonial n° ${id} n'existe pas`);
        await this.testimonialRepository.delete(id);
        return deletedTestimonial;
    }
};
TestimonialService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(testimonial_entity_1.TestimonialEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TestimonialService);
exports.TestimonialService = TestimonialService;
//# sourceMappingURL=testimonial.service.js.map