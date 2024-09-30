import { getCustomRepository } from "typeorm"; // Certifique-se de importar corretamente
import { EleitorRepository } from "../repositories/"; // Corrigido o caminho do repositório
import { Eleitor } from "../entities/Eleitor"; // Certifique-se de que o caminho esteja correto

type EleitorRequest = {
    matricula: string;
    nome: string;
    patente: string;
    cpf: string;
};

export class CreateEleitorService {
    async execute({ nome, matricula, patente, cpf }: EleitorRequest): Promise<Eleitor> { // Corrigido o tipo de retorno e a sintaxe
        const eleitor = EleitorRepository().create({
            nome,
            matricula,
            patente,
            cpf,
        });
        
        await EleitorRepository().save(eleitor);
        
        return eleitor;
    }
}
