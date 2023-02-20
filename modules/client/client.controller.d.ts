import { ClientService } from "./client.service";
import { ClientDTO } from "./dto/client.dto";
export declare class ClientController {
    private clientService;
    constructor(clientService: ClientService);
    getAllClient(): Promise<import("./entity/client.entity").ClientEntity[]>;
    getBienById(id: number): Promise<import("./entity/client.entity").ClientEntity>;
    createClient(clientDTO: ClientDTO): Promise<import("./entity/client.entity").ClientEntity>;
    updateClient(id: number, clientDTO: ClientDTO): Promise<import("./entity/client.entity").ClientEntity>;
    deleteClient(id: number): Promise<import("./entity/client.entity").ClientEntity>;
}
