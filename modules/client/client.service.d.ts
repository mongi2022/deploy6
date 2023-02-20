import { Repository } from "typeorm";
import { ClientDTO } from "./dto/client.dto";
import { ClientEntity } from "./entity/client.entity";
export declare class ClientService {
    private readonly clientRepository;
    constructor(clientRepository: Repository<ClientEntity>);
    getAllClient(): Promise<ClientEntity[]>;
    getClientById(id: number): Promise<ClientEntity>;
    createClient(data: ClientDTO): Promise<ClientEntity>;
    updateClient(id: number, data: Partial<ClientDTO>): Promise<ClientEntity>;
    deleteClient(id: number): Promise<ClientEntity>;
}
