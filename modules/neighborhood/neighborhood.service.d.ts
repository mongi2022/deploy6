import { Repository } from "typeorm";
import { NeighborhoodDTO } from "./dto/neighborhood.dto";
import { NeighborhoodEntity } from "./entity/neighborhood.entity";
export declare class NeighborhoodService {
    private readonly neighborhoodRepository;
    constructor(neighborhoodRepository: Repository<NeighborhoodEntity>);
    private readonly villeRepository;
    getAllNeighborhood(): Promise<NeighborhoodEntity[]>;
    getNeighborhoodById(id: number): Promise<NeighborhoodEntity>;
    getNeighborhoodByCity(cityId: number): Promise<any>;
    createNeighborhood(cityId: number, neighborhoodDTO: NeighborhoodDTO): Promise<NeighborhoodEntity>;
    updateNeighborhood(id: number, data: Partial<NeighborhoodDTO>): Promise<NeighborhoodEntity>;
    deleteNeighborhood(id: number): Promise<NeighborhoodEntity>;
}
