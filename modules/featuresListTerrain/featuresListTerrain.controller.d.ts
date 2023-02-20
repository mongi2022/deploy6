import { FeaturelistTerrainService } from "./featuresListTerrain.service";
import { FeaturelistTerrainDTO } from "./dto/featuresList.dto";
export declare class FeaturelistTerrainController {
    private featurelistTerrainService;
    constructor(featurelistTerrainService: FeaturelistTerrainService);
    getAllFeaturelistTerrain(): Promise<import("./entity/featuresListTerrain.entity").FeaturelistTerrainEntity[]>;
    getBienById(id: number): Promise<import("./entity/featuresListTerrain.entity").FeaturelistTerrainEntity>;
    createFeaturelistTerrain(featurelistTerrainDTO: FeaturelistTerrainDTO): Promise<import("./entity/featuresListTerrain.entity").FeaturelistTerrainEntity>;
    updateFeaturelistTerrain(id: number, featurelistTerrainDTO: FeaturelistTerrainDTO): Promise<import("./entity/featuresListTerrain.entity").FeaturelistTerrainEntity>;
    deleteFeaturelistTerrain(id: number): Promise<import("./entity/featuresListTerrain.entity").FeaturelistTerrainEntity>;
}
