import { GalleryDTO } from "./dto/gallery.dto";
import { GalleryService } from "./gallery.service";
export declare class GalleryController {
    private readonly galleryService;
    constructor(galleryService: GalleryService);
    sizes: number[][];
    getAllGallery(): Promise<import("./entity/gallery.entity").GalleryEntity[]>;
    getGalleryById(id: number): Promise<import("./entity/gallery.entity").GalleryEntity>;
    uploadFile(files: any, id: number): any[];
    private saveOneImage;
    createGallery(id: number, galleryDTO: GalleryDTO): Promise<import("./entity/gallery.entity").GalleryEntity>;
    updateGallery(id: number, galleryDTO: GalleryDTO): Promise<import("./entity/gallery.entity").GalleryEntity>;
    deleteGallery(id: number): Promise<import("./entity/gallery.entity").GalleryEntity>;
}
