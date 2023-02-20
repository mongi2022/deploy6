import { Repository } from "typeorm";
import { PropertyEntity } from "../property/entity/property.entity";
import { PriceDTO } from "./dto/price.dto";
import { PriceEntity } from "./entity/price.entity";
export declare class PriceService {
    private readonly priceRepository;
    private readonly propertyRepository;
    constructor(priceRepository: Repository<PriceEntity>, propertyRepository: Repository<PropertyEntity>);
    getAllPrice(): Promise<PriceEntity[]>;
    getPriceById(id: number): Promise<PriceEntity>;
    createPrice(propertyId: number, priceDTO: PriceDTO): Promise<PriceEntity>;
    updatePrice(id: number, data: Partial<PriceDTO>): Promise<PriceEntity>;
    deletePrice(id: number): Promise<PriceEntity>;
}
