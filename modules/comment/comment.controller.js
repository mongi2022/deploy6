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
exports.CommentController = void 0;
const common_1 = require("@nestjs/common");
const comment_dto_1 = require("./dto/comment.dto");
const comment_service_1 = require("./comment.service");
const swagger_1 = require("@nestjs/swagger");
let CommentController = class CommentController {
    constructor(commentService) {
        this.commentService = commentService;
    }
    async getAllCommentController() {
        return await this.commentService.getAllComment();
    }
    async addCommentController(appDTO) {
        return await this.commentService.createComment(appDTO);
    }
    async getCommentByIdController(id) {
        return await this.commentService.getCommentById(id);
    }
    async updateCommentController(id, commentDto) {
        return await this.commentService.updateComment(id, commentDto);
    }
    deleteComment(id) {
        return this.commentService.deleteComment(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The record list returns.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not Found.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "getAllCommentController", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The record has been successfully created.',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comment_dto_1.CommentDTO]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "addCommentController", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "getCommentByIdController", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, comment_dto_1.CommentDTO]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "updateCommentController", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CommentController.prototype, "deleteComment", null);
CommentController = __decorate([
    (0, common_1.Controller)('comment'),
    __metadata("design:paramtypes", [comment_service_1.CommentService])
], CommentController);
exports.CommentController = CommentController;
//# sourceMappingURL=comment.controller.js.map