import { PriceDTO } from "./dto/price.dto";
import { PriceService } from "./price.service";
export declare class PriceController {
    private readonly priceService;
    constructor(priceService: PriceService);
    getAllPrices(): Promise<import("./entity/price.entity").PriceEntity[]>;
    getPriceById(id: number): Promise<import("./entity/price.entity").PriceEntity>;
    createPrice(id: number, priceDTO: PriceDTO): Promise<import("./entity/price.entity").PriceEntity>;
    updatePrice(id: number, priceDTO: PriceDTO): Promise<import("./entity/price.entity").PriceEntity>;
    deletePrice(id: number): Promise<import("./entity/price.entity").PriceEntity>;
}
