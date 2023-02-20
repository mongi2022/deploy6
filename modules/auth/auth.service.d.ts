import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';
import { UsersService } from 'src/modules/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/auth.dto';
export declare class AuthService {
    private readonly usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signUp(createUserDto: CreateUserDto): Promise<any>;
    signIn(data: AuthDto): Promise<{
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
        userId: number;
        userEmail: string;
        username: string;
    }>;
    logout(userId: number): Promise<void>;
    refreshTokens(userId: number, refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    hashData(data: string): Promise<string>;
    updateRefreshToken(userId: number, refreshToken: string): Promise<void>;
    getTokens(userId: number, email: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
