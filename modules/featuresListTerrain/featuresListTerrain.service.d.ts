import { Repository } from "typeorm";
import { FeaturelistTerrainDTO } from "./dto/featuresList.dto";
import { FeaturelistTerrainEntity } from "./entity/featuresListTerrain.entity";
export declare class FeaturelistTerrainService {
    private readonly featurelistTerrainRepository;
    constructor(featurelistTerrainRepository: Repository<FeaturelistTerrainEntity>);
    getAllFeaturelistTerrain(): Promise<FeaturelistTerrainEntity[]>;
    getFeaturelistTerrainById(id: number): Promise<FeaturelistTerrainEntity>;
    createFeaturelistTerrain(data: FeaturelistTerrainDTO): Promise<FeaturelistTerrainEntity>;
    updateFeaturelistTerrain(id: number, data: Partial<FeaturelistTerrainDTO>): Promise<FeaturelistTerrainEntity>;
    deleteFeaturelistTerrain(id: number): Promise<FeaturelistTerrainEntity>;
}
