import { HouseDTO } from "./dto/house.dto";
import { HouseEntity } from "./entity/house.entity";
import { HouseService } from "./house.service";
export declare class HouseController {
    private readonly houseService;
    constructor(houseService: HouseService);
    getAllHouse(): Promise<HouseEntity[]>;
    gethouseById(id: number): Promise<HouseEntity>;
    createHouse(houseDTO: HouseDTO): Promise<HouseEntity>;
    updateHouse(id: number, houseDTO: HouseDTO): Promise<HouseEntity>;
    deleteHouse(id: number): Promise<HouseEntity>;
}
