import { Repository } from "typeorm";
import { HouseDTO } from "./dto/house.dto";
import { HouseEntity } from "./entity/house.entity";
export declare class HouseService {
    private readonly houseRepository;
    constructor(houseRepository: Repository<HouseEntity>);
    getAllHouse(): Promise<HouseEntity[]>;
    getHouseById(id: number): Promise<HouseEntity>;
    createHouse(houseDTO: HouseDTO): Promise<HouseEntity>;
    updateHouse(id: number, houseDTO: Partial<HouseDTO>): Promise<HouseEntity>;
    deleteHouse(id: number): Promise<HouseEntity>;
}
