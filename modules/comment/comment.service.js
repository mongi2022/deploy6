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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const comment_entity_1 = require("./entity/comment.entity");
let CommentService = class CommentService {
    constructor(commentRepository) {
        this.commentRepository = commentRepository;
    }
    getAllComment() {
        return this.commentRepository.find();
    }
    async createComment(data) {
        const comment = await this.commentRepository.create(data);
        return this.commentRepository.save(comment);
    }
    getCommentById(id) {
        return this.commentRepository.findOne({ where: { id } });
    }
    async updateComment(id, commentDto) {
        await this.commentRepository.update({ id }, commentDto);
        const comment = await this.commentRepository.findOne({ where: { id } });
        if (comment == null)
            throw new common_1.NotFoundException(`Appartement n° ${id} n'existe pas`);
        return comment;
    }
    async deleteComment(id) {
        const deletedApp = await this.commentRepository.findOne({ where: { id } });
        if (deletedApp == null)
            throw new common_1.NotFoundException(`Appartement n° ${id} n'existe pas`);
        this.commentRepository.delete(id);
        return deletedApp;
    }
};
CommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comment_entity_1.CommentEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map