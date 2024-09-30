import { Request,Response } from "express";
import { CreateEleitorService } from "../services/CreateProductsService";


export class CreateEleitorController {
    async handle(request: Request, response: Response){
        const {nome, matricula, patente, cpf} = request.body;

        const createEleitorService = new CreateEleitorService();

        const eleitor = await createEleitorService.execute({nome, matricula,patente,cpf});

        return response.json(eleitor);
    }
}