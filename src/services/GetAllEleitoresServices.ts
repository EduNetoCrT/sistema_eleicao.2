import { Eleitor } from "../entities/Eleitor"; 
import { EleitorRepository } from "../repositories"; // Corrigido o caminho para o repositório

export class GetAllEleitoresService {
    async execute(): Promise<Eleitor[]> {
        const eleitores = await EleitorRepository().find(); // Renomeado para 'eleitores' para melhor clareza
        return eleitores;
    }
}
