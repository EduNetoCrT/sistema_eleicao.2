import { Request,response,Response } from "express";
import {GetAllEleitoresService} from "../services/GetAllEleitoresServices"


export class GetAllEleitoresController {
    async handle(request: Request, respponse:Response){
        const getAllEleitoresService =  new GetAllEleitoresService();

        const eleitores = await getAllEleitoresService.execute();

        return response.json(eleitores);
    }
};