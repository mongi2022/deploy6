import { Repository } from "typeorm";
import { VilleDTO } from "./dto/ville.dto";
import { VilleEntity } from "./entity/ville.entity";
export declare class VilleService {
    private readonly villeRepository;
    constructor(villeRepository: Repository<VilleEntity>);
    getAllProperties(): Promise<VilleEntity[]>;
    getVilleById(id: number): Promise<VilleEntity>;
    createVille(data: VilleDTO): Promise<VilleEntity>;
    updateVille(id: number, data: Partial<VilleEntity>): Promise<VilleEntity>;
    deleteVille(id: number): Promise<VilleEntity>;
}
