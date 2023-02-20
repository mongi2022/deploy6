import { NeighborhoodDTO } from "./dto/neighborhood.dto";
import { NeighborhoodService } from "./neighborhood.service";
export declare class NeighborhoodController {
    private readonly neighborhoodService;
    constructor(neighborhoodService: NeighborhoodService);
    getAllNeighborhood(): Promise<import("./entity/neighborhood.entity").NeighborhoodEntity[]>;
    getNeighborhoodById(id: number): Promise<import("./entity/neighborhood.entity").NeighborhoodEntity>;
    getNeighborhoodByCity(cityId: number): Promise<any>;
    createFeatures(id: number, neighborhoodDTO: NeighborhoodDTO): Promise<import("./entity/neighborhood.entity").NeighborhoodEntity>;
    updateNeighborhood(id: number, neighborhoodDTO: NeighborhoodDTO): Promise<import("./entity/neighborhood.entity").NeighborhoodEntity>;
    deleteNeighborhood(id: number): Promise<import("./entity/neighborhood.entity").NeighborhoodEntity>;
}
