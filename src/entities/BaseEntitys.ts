import {PrimaryColumn, CreateDateColumn} from "typeorm";


class BaseEntity {

    @PrimaryColumn()
    id!: string;

    @CreateDateColumn()
    create_at!: Date;

    constructor() {
        
    }

    
}


export default BaseEntity