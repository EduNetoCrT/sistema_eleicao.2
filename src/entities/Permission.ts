import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('permissions')
 class Permission {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome!: string;

    @Column('text')
    descricao!: string;
}

export default Permission
