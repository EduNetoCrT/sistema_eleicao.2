import { Repository } from "typeorm";
import { Eleitor, StatusEnum } from "../entities/Eleitor";
import { AppDataSource } from "../database/data-source";

export class EleitorService {
    private eleitorRepository: Repository<Eleitor>;

    constructor() {
        this.eleitorRepository = AppDataSource.getRepository(Eleitor);
    }

    async getAllEleitores(): Promise<Eleitor[]> {
        return this.eleitorRepository.find();
    }

    // async getEleitorById(id: string): Promise<Eleitor | null> {
    //     return this.eleitorRepository.findOne({ where: { id } });
    // }

    async createEleitor(matricula: string, nome: string, cpf: string, patente: string, status:StatusEnum): Promise<Eleitor>  {
        const eleitor = this.eleitorRepository.create({ matricula, nome, cpf, patente,status });
        return this.eleitorRepository.save(eleitor);
    }

    // async updateEleitor(id: string, nome: string, titulo: string): Promise<Eleitor | null> {
    //     await this.eleitorRepository.update(id, { nome, titulo });
    //     return this.getEleitorById(id);
    // }

    // async deleteEleitor(id: string): Promise<void> {
    //     await this.eleitorRepository.delete(id);
    // }
}