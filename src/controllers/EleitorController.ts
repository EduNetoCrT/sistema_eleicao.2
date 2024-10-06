import { Request, Response } from "express";
import { EleitorService } from "../services/EleitorService";

export class EleitorController {
    private eleitorService: EleitorService;

    constructor() {
        this.eleitorService = new EleitorService();
    }

    getAllEleitores = async (req: Request, res: Response): Promise<void> => {
        try {
            const eleitores = await this.eleitorService.getAllEleitores();
            res.json(eleitores);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar eleitores" });
        }
    }

    // getEleitorById = async (req: Request, res: Response): Promise<void> => {
    //     try {
    //         const eleitor = await this.eleitorService.getEleitorById(req.params.id);
    //         if (eleitor) {
    //             res.json(eleitor);
    //         } else {
    //             res.status(404).json({ message: "Eleitor não encontrado" });
    //         }
    //     } catch (error) {
    //         res.status(500).json({ message: "Erro ao buscar eleitor" });
    //     }
    // }

    createEleitor = async (req: Request, res: Response): Promise<void> => {
        try {
            const {matricula, nome, cpf, patente,status} = req.body;
            const newEleitor = await this.eleitorService.createEleitor(matricula, nome, cpf, patente,status);
            res.status(201).json(newEleitor);
        } catch (error) {
            res.status(500).json({ message: "Erro ao criar eleitor" });
        }
    }

    // updateEleitor = async (req: Request, res: Response): Promise<void> => {
    //     try {
    //         const { nome, titulo } = req.body;
    //         const updatedEleitor = await this.eleitorService.updateEleitor(req.params.id, nome, titulo);
    //         if (updatedEleitor) {
    //             res.json(updatedEleitor);
    //         } else {
    //             res.status(404).json({ message: "Eleitor não encontrado" });
    //         }
    //     } catch (error) {
    //         res.status(500).json({ message: "Erro ao atualizar eleitor" });
    //     }
    // }

    // deleteEleitor = async (req: Request, res: Response): Promise<void> => {
    //     try {
    //         await this.eleitorService.deleteEleitor(req.params.id);
    //         res.status(204).send();
    //     } catch (error) {
    //         res.status(500).json({ message: "Erro ao deletar eleitor" });
    //     }
    // }
}