import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepositories';
import { classToPlain }  from "class-transformer"


class ListUserService {

    async execute(){
        const usersRepositories = getCustomRepository(UsersRepository);

        const users = await usersRepositories.find({});

        return classToPlain(users);

    }
}

export { ListUserService }