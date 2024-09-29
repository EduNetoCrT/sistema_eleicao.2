import { Router, Request, Response } from 'express';

const routes = Router();

// Rota de teste
routes.get('/test', (req: Request, res: Response) => {
  res.json({ message: 'Test route is working!' });
});

export { routes };
