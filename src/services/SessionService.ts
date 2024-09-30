import { UserRepository } from "../repositories"; 
import { compare } from "bcryptjs"; 
import { sign } from "jsonwebtoken"; 
import { User } from "../entities/User"; 

type UserRequest = {
  usernome: string; 
  password: string;
};

export class SessionService {
  async execute({ usernome, password }: UserRequest) {
    const repo = UserRepository();

    const user = await repo.findOne({ where: { usernome } });

    if (!user) {
      throw new Error("User does not exist!"); 
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("User or Password incorrect");
    }

    const token = sign({}, process.env.SECRET_JWT as string, {
      subject: user.id,
      expiresIn: "1d", 
    });

    return { token };
  }
}
