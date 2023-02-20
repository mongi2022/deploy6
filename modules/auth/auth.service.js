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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async signUp(createUserDto) {
        const userExists = await this.usersService.findByEmail(createUserDto.email);
        if (userExists) {
            throw new common_1.BadRequestException('Utilisateur existe déja');
        }
        const hash = await this.hashData(createUserDto.password);
        const newUser = await this.usersService.createUser(Object.assign(Object.assign({}, createUserDto), { password: hash }));
        const tokens = await this.getTokens(newUser.id, newUser.email);
        await this.updateRefreshToken(newUser.id, tokens.refreshToken);
        return tokens;
    }
    async signIn(data) {
        const user = await this.usersService.findByEmail(data.email);
        if (!user)
            throw new common_1.BadRequestException('User does not exist');
        const passwordMatches = bcrypt.compare(user.password, data.password);
        if (!passwordMatches)
            throw new common_1.BadRequestException('Password is incorrect');
        const tokens = await this.getTokens(user.id, user.email);
        await this.updateRefreshToken(user.id, tokens.refreshToken);
        return { tokens: tokens, userId: user.id, userEmail: user.email, username: user.name };
    }
    async logout(userId) {
        this.usersService.updateUser(userId, { refreshToken: null });
    }
    async refreshTokens(userId, refreshToken) {
        const user = await this.usersService.findUserById(userId);
        if (!user || !user.refreshToken)
            throw new common_1.ForbiddenException('Access Denied');
        const refreshTokenMatches = await bcrypt.compare(user.refreshToken, refreshToken);
        if (!refreshTokenMatches)
            throw new common_1.ForbiddenException('Access Denied');
        const tokens = await this.getTokens(user.id, user.email);
        await this.updateRefreshToken(user.id, tokens.refreshToken);
        return tokens;
    }
    hashData(data) {
        const saltOrRounds = parseInt(process.env.SALT);
        return bcrypt.hash(data, saltOrRounds);
    }
    async updateRefreshToken(userId, refreshToken) {
        const hashedRefreshToken = await this.hashData(refreshToken);
        await this.usersService.updateUser(userId, {
            refreshToken: hashedRefreshToken,
        });
    }
    async getTokens(userId, email) {
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync({
                sub: userId,
                email,
            }, {
                secret: process.env.JWT_ACCESS_SECRET,
                expiresIn: '60m',
            }),
            this.jwtService.signAsync({
                sub: userId,
                email,
            }, {
                secret: process.env.JWT_REFRESH_SECRET,
                expiresIn: '7d',
            }),
        ]);
        return {
            accessToken,
            refreshToken,
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map