import { Repository } from "typeorm";
import { PropertyEntity } from "../property/entity/property.entity";
import { AreaDTO } from "./dto/area.dto";
import { AreaEntity } from "./entity/area.entity";
export declare class AreaService {
    private readonly areaRepository;
    private readonly propertyRepository;
    constructor(areaRepository: Repository<AreaEntity>, propertyRepository: Repository<PropertyEntity>);
    getAllArea(): Promise<AreaEntity[]>;
    getAreaById(id: number): Promise<AreaEntity>;
    createArea(propertyId: number, areaDTO: AreaDTO): Promise<AreaEntity>;
    updateArea(id: number, data: Partial<AreaDTO>): Promise<AreaEntity>;
    deleteArea(id: number): Promise<AreaEntity>;
}
