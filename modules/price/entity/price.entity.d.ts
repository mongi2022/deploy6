import { PropertyEntity } from "src/modules/property/entity/property.entity";
export declare class PriceEntity {
    id: number;
    sale: number;
    rent: number;
    property: PropertyEntity;
}
