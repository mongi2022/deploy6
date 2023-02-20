import { Repository } from "typeorm";
import { GalleryDTO } from "./dto/gallery.dto";
import { GalleryEntity } from "./entity/gallery.entity";
export declare class GalleryService {
    private readonly galleryRepository;
    constructor(galleryRepository: Repository<GalleryEntity>);
    private readonly propertyRepository;
    getAllGallery(): Promise<GalleryEntity[]>;
    getGalleryById(id: number): Promise<GalleryEntity>;
    createGallery(properyId: number, galleryDTO: GalleryDTO): Promise<GalleryEntity>;
    updateGallery(id: number, data: Partial<GalleryDTO>): Promise<GalleryEntity>;
    deleteGallery(id: number): Promise<GalleryEntity>;
}
