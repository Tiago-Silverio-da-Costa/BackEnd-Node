import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { v4 as uuid} from "uuid"
import { Exclude } from "class-transformer"

@Entity("users")
class User {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    //exclude tira da visão do usuário a senha
    @Exclude()
    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;
    
    constructor(){
        if(!this.id) { // toda vez que for criado um novo usuário será criado um novo uuid
            this.id = uuid();
        }
    }
}

export { User };


