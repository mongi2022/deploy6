import { Repository } from "typeorm";
import { VilleService } from "./ville.service";
import { VilleDTO } from "./dto/ville.dto";
import { VilleEntity } from "./entity/ville.entity";
export declare class VilleController {
    private readonly villeRepository;
    private readonly villeService;
    constructor(villeRepository: Repository<VilleEntity>, villeService: VilleService);
    getAllville(): Promise<VilleEntity[]>;
    getvilleById(id: number): Promise<VilleEntity>;
    createville(villeDTO: VilleDTO): Promise<VilleEntity>;
    updateville(id: number, ville: VilleEntity): Promise<VilleEntity>;
    deleteville(id: number): Promise<VilleEntity>;
}
