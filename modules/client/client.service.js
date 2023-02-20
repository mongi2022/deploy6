"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const client_entity_1 = require("./entity/client.entity");
let ClientService = class ClientService {
    constructor(clientRepository) {
        this.clientRepository = clientRepository;
    }
    getAllClient() {
        return this.clientRepository.find();
    }
    async getClientById(id) {
        return await this.clientRepository.findOne({ where: { id } });
    }
    async createClient(data) {
        const client = await this.clientRepository.create(data);
        return this.clientRepository.save(client);
    }
    async updateClient(id, data) {
        await this.clientRepository.update({ id }, data);
        const newClient = await this.clientRepository.findOne({ where: { id } });
        if (newClient == null)
            throw new common_1.NotFoundException(`Client n° ${id} n'existe pas`);
        return newClient;
    }
    async deleteClient(id) {
        const deleted = await this.clientRepository.findOne({ where: { id } });
        if (deleted == null)
            throw new common_1.NotFoundException(`Client n° ${id} n'existe pas`);
        await this.clientRepository.delete({ id });
        return deleted;
    }
};
ClientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(client_entity_1.ClientEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ClientService);
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map