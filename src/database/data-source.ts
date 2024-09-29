// src/data-source.ts
import { DataSource } from 'typeorm';
import { User } from '../entities/User'; // ajuste o caminho conforme necessário

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admineleicao',
    password: 'Senha@edu9125',
    database: 'eleicao_teste',
    synchronize: false,
    logging: true,
    entities: ['src/entity/**/*.ts'],
    migrations: ['src/database/migration/**/*.ts'],
});
