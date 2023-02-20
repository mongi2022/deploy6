import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
type JwtPayload = {
    sub: string;
    email: string;
};
declare const AccessTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class AccessTokenStrategy extends AccessTokenStrategy_base {
    constructor(config: ConfigService);
    validate(payload: JwtPayload): JwtPayload;
}
export {};
