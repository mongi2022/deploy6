import { AreaDTO } from "./dto/area.dto";
import { AreaService } from "./area.service";
export declare class AreaController {
    private readonly areaService;
    constructor(areaService: AreaService);
    getAllAreas(): Promise<import("./entity/area.entity").AreaEntity[]>;
    getAreaById(id: number): Promise<import("./entity/area.entity").AreaEntity>;
    createArea(id: number, areaDTO: AreaDTO): Promise<import("./entity/area.entity").AreaEntity>;
    updateArea(id: number, areaDTO: AreaDTO): Promise<import("./entity/area.entity").AreaEntity>;
    deleteArea(id: number): Promise<import("./entity/area.entity").AreaEntity>;
}
