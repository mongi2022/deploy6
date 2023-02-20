import { SocialService } from "./social.service";
import { SocialDTO } from "./dto/social.dto";
import { SocialEntity } from "./entity/social.entity";
export declare class SocialController {
    private readonly socialService;
    constructor(socialService: SocialService);
    getAllCategories(): Promise<SocialEntity[]>;
    getTerrainById(id: number): Promise<SocialEntity>;
    createSocial(id: number, agentDTO: SocialDTO): Promise<SocialEntity>;
    updateSocial(id: number, catDTO: SocialDTO): Promise<SocialEntity>;
    deleteSocial(id: number): Promise<SocialEntity>;
}
