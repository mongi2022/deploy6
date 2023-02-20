import { PropertyStatus } from "../enum/property.status.enum";
export declare class PropertyDTO {
    title: string;
    desc: string;
    propertyType: string;
    propertyStatus: PropertyStatus;
    city: string;
    zipCode: string;
    neighborhood: string;
    street: string;
    formattedAddress: string;
    featured: boolean;
    bedrooms: number;
    bathrooms: number;
    garages: number;
    yearBuilt: number;
    ratingsCount: number;
    ratingsValue: number;
    views: number;
}
