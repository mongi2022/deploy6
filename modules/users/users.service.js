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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entity/user.entity");
let UsersService = class UsersService {
    constructor(userRepository, connection) {
        this.userRepository = userRepository;
        this.connection = connection;
    }
    async createUser(createUserDto) {
        const createdUser = this.userRepository.create(createUserDto);
        return this.userRepository.save(createUserDto);
    }
    async findAllUsers() {
        return this.userRepository.find();
    }
    async findUserById(id) {
        return this.userRepository.findOne({ where: { id } });
    }
    async findByEmail(email) {
        const user = this.userRepository.findOne({ where: { email } });
        return user;
    }
    async findByEmail2(createUserDto) {
        const userExists = await this.findByEmail(createUserDto.email);
    }
    async updateUser(id, updateUserDto) {
        return this.userRepository.update(id, updateUserDto);
    }
    async removeUser(id) {
        return this.userRepository.delete(id);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectConnection)()),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Connection])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map