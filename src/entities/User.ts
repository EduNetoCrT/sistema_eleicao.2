import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id!: number; // Usando o operador de atribuição definitiva

  @Column()
  username!: string; // Atribuição definitiva

  @Column()
  password!: string; // Atribuição definitiva

  @Column()
  matricula!: string; // Atribuição definitiva
}
