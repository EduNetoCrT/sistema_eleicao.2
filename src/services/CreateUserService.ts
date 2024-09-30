import { User } from "../entities/User";
import { UserRepository } from "../repositories"; // Certifique-se de importar o repositório corretamente
import { hash } from "bcryptjs"; // Certifique-se de importar a função de hash


type UserRequest = {
    usernome: string; // Corrigido de usernome para username
    password: string;
};

export class CreateUserService {
    async execute({ usernome, password }: UserRequest): Promise<Error | User> { // Corrigido o tipo de retorno e a sintaxe

        const existUser = await UserRepository().findOne({ where: { usernome } }); // Corrigido o método para findOne e o uso de where
        
        if (existUser) {
            return new Error("Usuário já existe"); // Corrigido "Usuario" para "Usuário"
        }

        const passwordHash = await hash(password, 8);

        const user = UserRepository().create({ usernome, password: passwordHash }); // Corrigido 'passoword' para 'password' e 'usernome' para 'username'

        await UserRepository().save(user);

        return user;
    }
}
