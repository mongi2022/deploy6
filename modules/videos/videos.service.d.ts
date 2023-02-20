import { Repository } from "typeorm";
import { PropertyEntity } from "../property/entity/property.entity";
import { VideosDTO } from "./dto/videos.dto";
import { VideosEntity } from "./entity/videos.entity";
export declare class VideosService {
    private readonly videosRepository;
    private readonly propertyRepository;
    constructor(videosRepository: Repository<VideosEntity>, propertyRepository: Repository<PropertyEntity>);
    getAllVideos(): Promise<VideosEntity[]>;
    getVideosById(id: number): Promise<VideosEntity>;
    createVideos(propertyId: number, videoDTO: VideosDTO): Promise<VideosEntity>;
    updateVideos(id: number, data: Partial<VideosDTO>): Promise<VideosEntity>;
    deleteVideos(id: number): Promise<VideosEntity>;
}
