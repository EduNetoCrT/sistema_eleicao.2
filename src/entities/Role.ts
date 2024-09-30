import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import BaseEntity  from "./BaseEntitys";
import Permission from "./Permission";

@Entity("roles")
export class Role extends BaseEntity {
    @Column()
    name!: string;

    @Column()
    description!: string;

    @ManyToMany(() => Permission)
    @JoinTable({
        name: "permissions_roles",
        joinColumns: [{ name: "role_id" }],
        inverseJoinColumns: [{ name: "permission_id" }],
    })
    permission!: Permission[];
}
