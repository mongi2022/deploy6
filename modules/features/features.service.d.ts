import { Repository } from "typeorm";
import { PropertyEntity } from "../property/entity/property.entity";
import { FeaturesDTO } from "./dto/features.dto";
import { FeaturesEntity } from "./entity/features.entity";
export declare class FeaturesService {
    private readonly featuresRepository;
    private readonly propertyRepository;
    constructor(featuresRepository: Repository<FeaturesEntity>, propertyRepository: Repository<PropertyEntity>);
    getAllFeatures(): Promise<FeaturesEntity[]>;
    getFeaturesById(id: number): Promise<FeaturesEntity>;
    createFeatures(propertyId: number, featureDTO: FeaturesDTO): Promise<FeaturesEntity>;
    updateFeatures(id: number, data: Partial<FeaturesDTO>): Promise<FeaturesEntity>;
    deleteFeatures(id: number): Promise<FeaturesEntity>;
}
