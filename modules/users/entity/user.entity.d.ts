import { PropertyEntity } from 'src/modules/property/entity/property.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    refreshToken: string;
    photo: string;
    tel: string;
    property: PropertyEntity[];
}
