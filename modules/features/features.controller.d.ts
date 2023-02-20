import { FeaturesDTO } from "./dto/features.dto";
import { FeaturesService } from "./features.service";
export declare class FeaturesController {
    private readonly featureService;
    constructor(featureService: FeaturesService);
    getAllFeatures(): Promise<import("./entity/features.entity").FeaturesEntity[]>;
    getFeaturesById(id: number): Promise<import("./entity/features.entity").FeaturesEntity>;
    createFeatures(id: number, featureDTO: FeaturesDTO): Promise<import("./entity/features.entity").FeaturesEntity>;
    updateFeatures(id: number, featureDTO: FeaturesDTO): Promise<import("./entity/features.entity").FeaturesEntity>;
    deleteFeatures(id: number): Promise<import("./entity/features.entity").FeaturesEntity>;
}
