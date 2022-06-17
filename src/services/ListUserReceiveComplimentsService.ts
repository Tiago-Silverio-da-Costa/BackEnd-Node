import { getCustomRepository } from 'typeorm';
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';




class ListUserReceiveComplimentsService{

    async execute(user_id: string){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimentsRepositories.find({
            where: {
                user_receiver: user_id
            },
            // relations: ["userSender", "userReceiver", "tag"] puxa todos as info de uma vez, cuidar quando tiver muitos dados, pode colocar no sendo tb
        })

        return compliments;
    }
}

export { ListUserReceiveComplimentsService }