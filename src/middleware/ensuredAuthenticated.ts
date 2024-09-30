import { NextFunction, Request, Response } from "express";
import { decode, verify } from "jsonwebtoken";

export const ensuredAuthenticated = () => {
  return async (request: Request, response: Response, next: NextFunction) => {
    const authHeaders = request.headers.authorization;

    // Verifica se o cabeçalho de autorização está presente
    if (!authHeaders) {
      return response.status(401).json({ error: "Token is missing" });
    }

    // Divide o cabeçalho para obter o token (assumindo o formato "Bearer <token>")
    const [, token] = authHeaders.split(" ");

    try {
      // Verifica se o token é válido
      verify(token, process.env.SECRET_JWT as string);

      // Decodifica o token para obter o "sub" (ID do usuário)
      const { sub } = decode(token) as { sub: string };

      // Adiciona o ID do usuário à requisição para uso posterior
      //request.userId = sub.toString();

      // Chama o próximo middleware
      return next();
    } catch (err) {
      // Se o token for inválido ou ocorrer um erro, retorna status 401
      return response.status(401).end();
    }
  };
};
