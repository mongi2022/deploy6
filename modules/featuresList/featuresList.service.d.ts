import { Repository } from "typeorm";
import { FeaturelistDTO } from "./dto/featuresList.dto";
import { FeaturelistEntity } from "./entity/featuresList.entity";
export declare class FeaturelistService {
    private readonly featurelistRepository;
    constructor(featurelistRepository: Repository<FeaturelistEntity>);
    getAllFeaturelist(): Promise<FeaturelistEntity[]>;
    getFeaturelistById(id: number): Promise<FeaturelistEntity>;
    createFeaturelist(data: FeaturelistDTO): Promise<FeaturelistEntity>;
    updateFeaturelist(id: number, data: Partial<FeaturelistDTO>): Promise<FeaturelistEntity>;
    deleteFeaturelist(id: number): Promise<FeaturelistEntity>;
}
