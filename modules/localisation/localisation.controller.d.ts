import { LocalisationDTO } from "./dto/localisation.dto";
import { LocalisationService } from "./localisation.service";
export declare class LocalisationController {
    private readonly localService;
    constructor(localService: LocalisationService);
    getAllLocalisations(): Promise<import("./entity/localisation.entity").LocalisationEntity[]>;
    getLocalisationById(id: number): Promise<import("./entity/localisation.entity").LocalisationEntity>;
    createLocalisation(id: number, localDTO: LocalisationDTO): Promise<import("./entity/localisation.entity").LocalisationEntity>;
    updateLocalisation(id: number, localDTO: LocalisationDTO): Promise<import("./entity/localisation.entity").LocalisationEntity>;
    deleteLocalisation(id: number): Promise<import("./entity/localisation.entity").LocalisationEntity>;
}
