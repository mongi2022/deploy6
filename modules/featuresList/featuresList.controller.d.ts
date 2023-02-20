import { FeaturelistService } from "./featuresList.service";
import { FeaturelistDTO } from "./dto/featuresList.dto";
export declare class FeaturelistController {
    private featurelistService;
    constructor(featurelistService: FeaturelistService);
    getAllFeaturelist(): Promise<import("./entity/featuresList.entity").FeaturelistEntity[]>;
    getBienById(id: number): Promise<import("./entity/featuresList.entity").FeaturelistEntity>;
    createFeaturelist(featurelistDTO: FeaturelistDTO): Promise<import("./entity/featuresList.entity").FeaturelistEntity>;
    updateFeaturelist(id: number, featurelistDTO: FeaturelistDTO): Promise<import("./entity/featuresList.entity").FeaturelistEntity>;
    deleteFeaturelist(id: number): Promise<import("./entity/featuresList.entity").FeaturelistEntity>;
}
