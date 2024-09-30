import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('eleitors')
export class Eleitor {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    matricula!: string;

    @Column()
    nome!: string;

    @Column()
    patente!: string;

    @Column({ unique: true })
    cpf!: string;
}
