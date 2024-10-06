import { NextFunction, Request, Response } from "express";
import { PresencaService } from "../services/PresencaService";

export class PresencaController {
    private presencaService: PresencaService;

    constructor() {
        this.presencaService = new PresencaService();
    }

    getAllPresencas = async (req: Request, res: Response): Promise<void> => {
        try {
            const presencas = await this.presencaService.getAllPresencas();
            res.json(presencas);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar presenças" });
        }
    }

    // getPresencaById = async (req: Request, res: Response): Promise<void> => {
    //     try {
    //         const presenca = await this.presencaService.getPresencaById(req.params.id);
    //         if (presenca) {
    //             res.json(presenca);
    //         } else {
    //             res.status(404).json({ message: "Presença não encontrada" });
    //         }
    //     } catch (error) {
    //         res.status(500).json({ message: "Erro ao buscar presença" });
    //     }
    // }

    createPresenca = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { sessaoId, eleitorMatricula } = req.body;
            const newPresenca = await this.presencaService.createPresenca(sessaoId, eleitorMatricula);
            res.status(201).json(newPresenca);
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    // deletePresenca = async (req: Request, res: Response): Promise<void> => {
    //     try {
    //         await this.presencaService.deletePresenca(req.params.id);
    //         res.status(204).send();
    //     } catch (error) {
    //         res.status(500).json({ message: "Erro ao deletar presença" });
    //     }
    // }
}