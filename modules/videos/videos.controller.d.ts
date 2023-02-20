import { VideosDTO } from "./dto/videos.dto";
import { VideosService } from "./videos.service";
export declare class VideosController {
    private readonly videoService;
    constructor(videoService: VideosService);
    getAllVideoss(): Promise<import("./entity/videos.entity").VideosEntity[]>;
    getVideosById(id: number): Promise<import("./entity/videos.entity").VideosEntity>;
    createVideos(id: number, videoDTO: VideosDTO): Promise<import("./entity/videos.entity").VideosEntity>;
    updateVideos(id: number, videoDTO: VideosDTO): Promise<import("./entity/videos.entity").VideosEntity>;
    deleteVideos(id: number): Promise<import("./entity/videos.entity").VideosEntity>;
}
