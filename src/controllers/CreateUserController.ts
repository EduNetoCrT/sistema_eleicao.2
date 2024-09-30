import {Request, Response} from "express";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController {
    async (request: Request, response:Response) {
        const {usernome, password} = request.body;

        const createEleitorService = new CreateUserService();
        const result = createEleitorService.execute({usernome, password });

        if (result instanceof Error){
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }
}