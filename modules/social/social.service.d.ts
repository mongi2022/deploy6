import { Repository } from "typeorm";
import { SocialDTO } from "./dto/social.dto";
import { SocialEntity } from "./entity/social.entity";
export declare class SocialService {
    private readonly socialRepository;
    constructor(socialRepository: Repository<SocialEntity>);
    getAllSocial(): Promise<SocialEntity[]>;
    getSocialById(id: number): Promise<SocialEntity>;
    createSocial(agentId: number, socialDTO: SocialDTO): Promise<SocialEntity>;
    updateSocial(id: number, catDTO: Partial<SocialDTO>): Promise<SocialEntity>;
    deleteSocial(id: number): Promise<SocialEntity>;
}
