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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const accessToken_guard_1 = require("../../common/guards/accessToken.guard");
const config_1 = require("@nestjs/config");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const editFileName_1 = require("../gallery/utils/editFileName");
const fs_1 = require("fs");
const util_1 = require("util");
const readFileAsyc = (0, util_1.promisify)(fs_1.readFile);
const sharp = require("sharp");
const fs = require("fs");
let UsersController = class UsersController {
    constructor(usersService, configService) {
        this.usersService = usersService;
        this.configService = configService;
    }
    create(createUserDto) {
        return this.usersService.createUser(createUserDto);
    }
    findAll() {
        const allUsers = this.usersService.findAllUsers();
        return allUsers;
    }
    async findById(id) {
        const user = await this.usersService.findUserById(id);
        const { password } = user, result = __rest(user, ["password"]);
        return result;
    }
    async findByEmail2(createUserDto) {
        const user = this.usersService.findByEmail(createUserDto.email);
        if (await (await user).email != createUserDto.email)
            throw new common_1.NotFoundException('not found');
        return user;
    }
    async update(id, updateUserDto) {
        await this.usersService.updateUser(id, updateUserDto);
        const user = await this.usersService.findUserById(id);
        const { password } = user, result = __rest(user, ["password"]);
        return result;
    }
    remove(id) {
        return this.usersService.removeUser(id);
    }
    uploadFile(id, file) {
        const response = [];
        const [, ext] = file.mimetype.split('/');
        this.saveOneImage(ext, file, id);
        response.push(file);
        return response;
    }
    async saveOneImage(ext, file, id) {
        if (['jpeg', 'jpg', 'png', 'gif', 'webp'].includes(ext)) {
            var filename = '';
            var url = '/home/tpc/Bureau/PROJET_TEST/NODEJS/real-estate-front/real-estate-front/src/assets/images/profiles';
            var dir = `${url}/${id}`;
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
            let originalname = Buffer.from(file.originalname, 'latin1').toString('utf8');
            filename = `${url}/${id}/${originalname}`;
            readFileAsyc(file.path)
                .then((b) => {
                return sharp(b)
                    .toFile(filename);
            })
                .then()
                .catch(console.error);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)('email'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findByEmail2", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('upload/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({
            filename: editFileName_1.editFileName,
        })
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "uploadFile", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService, config_1.ConfigService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map