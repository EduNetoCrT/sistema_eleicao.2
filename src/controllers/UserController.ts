import { Request, Response } from "express";
import { UserService } from "../services/UserService";


export default class UserController {

    private userService : UserService

    constructor(){ 
        this.userService = new UserService()
    }

    createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const { username, password } = req.body
            const newUser = await this.userService.createUser({password,username})
            res.status(201).json(newUser)
        } catch (error) {
            res.status(500).json({ message: "Error creating user" })
        }
    }

    getAllUsers = async (req: Request, res: Response): Promise<void> => {
        try {
            const users = await this.userService.getAllUsers()
            res.status(201).json(users)
        } catch (error) {
            res.status(500).json({ message: "Error getAllUsers" })
        }
    }
}