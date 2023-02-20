import { Repository } from "typeorm";
import { User } from "../users/entity/user.entity";
import { PropertyDTO } from "./dto/property.dto";
import { PropertyEntity } from "./entity/property.entity";
export declare class PropertyService {
    private readonly propertyRepository;
    private readonly userRepository;
    constructor(propertyRepository: Repository<PropertyEntity>, userRepository: Repository<User>);
    getAllProperties(): Promise<PropertyEntity[]>;
    getAllPropertiesByUser(userId: number): Promise<PropertyEntity[]>;
    getPropertyById(id: number): Promise<PropertyEntity>;
    createProperty(userId: number, data: PropertyDTO): Promise<PropertyEntity>;
    updateProperty(id: number, data: Partial<PropertyEntity>): Promise<PropertyEntity>;
    deleteProperty(id: number): Promise<PropertyEntity>;
}
