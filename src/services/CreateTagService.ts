import { getCustomRepository } from "typeorm"
import { TagsRespositories } from "../repositories/TagsRepositories"


class CreateTagService {

    async execute(name: string){
        const tagsRepositories = getCustomRepository(TagsRespositories);

        if (!name){
            throw new Error("Incorrect name!")
        }
        //select * from tags where name = 'name'
        const tagAlreadyExists = await tagsRepositories.findOne({
            name,
        });

        if(tagAlreadyExists) {
            throw new Error("tag already exists!");
        }

        const tag = tagsRepositories.create({
            name,
        });

        await tagsRepositories.save(tag);
    }
}

export { CreateTagService }