import { getCustomRepository } from 'typeorm';
import { TagsRespositories } from '../repositories/TagsRepositories';
import { classToPlain }  from "class-transformer"

class ListTagService{
    async execute(){
        const tagsRespositories = getCustomRepository(TagsRespositories);

        const tags = await tagsRespositories.findOne({});
        //yarn add class-transformer
        //coloca # na tag
        // tags.map((tag) => (
        //     {...tag, nameCustom: `#${tag.name}`}
        // ));

        return classToPlain(tags);
    }
    
}

export { ListTagService }