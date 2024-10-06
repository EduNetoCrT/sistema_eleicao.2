import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Presenca } from "./Presenca";

export enum StatusEnum{
    APTO = 'apto',
    INAPTO = 'inapto'
}

@Entity()
export class Eleitor {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  nome!: string;

  @Column()
  matricula!: string;

  @Column()
  cpf!: string;

  @Column()
  patente!: string;

  @Column({
    type: "enum",
    enum: StatusEnum,
    default: StatusEnum.APTO
  })
  status!: StatusEnum;

  @OneToMany(() => Presenca, presenca => presenca.eleitor)
  presencas!: Presenca[];
}