import { Repository } from "typeorm";
import { RoleEnum, User } from "../entities/User";
import { hash } from "bcrypt";
import { AppDataSource } from "../database/data-source";


type UserRequest = {
    username: string;
    password: string;
};

export class UserService {
    private userRepository: Repository<User>
    constructor() {
        this.userRepository = AppDataSource.getRepository(User)
    }

    async createUser({ username, password }: UserRequest): Promise<Error | User> {

        const existUser = await this.userRepository.findOne({ where: { username } });

        if (existUser) {
            return new Error("Usuário já existe");
        }

        const passwordHash = await hash(password, 8);

        const user = this.userRepository.create({
            username,
            password: passwordHash,
            role: RoleEnum.MESARIO
        });
     
        await this.userRepository.save(user);

        return user;
    }

    async getAllUsers(): Promise<User[]> {
        return this.userRepository.find()
    }

    async getUserById(id: string): Promise<User | null> {
        return this.userRepository.findOne({
            where:{ id }
        })
    }

    // async updateUser(id: string, name: string, email: string): Promise<User | undefined> {
    //     await this.userRepository.update(id, { name, email })
    //     return this.getUserById(id)
    // }

    async deleteUser(id: string): Promise<void> {
        await this.userRepository.delete(id)
    }

}
