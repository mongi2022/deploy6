import { Repository } from "typeorm";
import { PropertyEntity } from "../property/entity/property.entity";
import { LocalisationDTO } from "./dto/localisation.dto";
import { LocalisationEntity } from "./entity/localisation.entity";
export declare class LocalisationService {
    private readonly localisationRepository;
    private propertyRepository;
    constructor(localisationRepository: Repository<LocalisationEntity>, propertyRepository: Repository<PropertyEntity>);
    getAllLocalisation(): Promise<LocalisationEntity[]>;
    getLocalisationById(id: number): Promise<LocalisationEntity>;
    createLocalisation(propertyId: number, localDTO: LocalisationDTO): Promise<LocalisationEntity>;
    updateLocalisation(id: number, data: Partial<LocalisationDTO>): Promise<LocalisationEntity>;
    deleteLocalisation(id: number): Promise<LocalisationEntity>;
}
