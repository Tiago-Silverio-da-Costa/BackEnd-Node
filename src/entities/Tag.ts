import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuid} from "uuid"
import { Expose } from "class-transformer"

@Entity("tags")
class Tag {
    map(arg0: (tag: any) => any) {
        throw new Error('Method not implemented.');
    }
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;

    //quando formos expor nossa entidade quero que ele crie(name_custom) um string a mais
    @Expose({name: "name_custom"})
    nameCustom(): string{
        return `#${this.name}`;
    }

    constructor(){
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Tag };