import { getCustomRepository } from 'typeorm';

//verificar se a senha tá correta
import { compare } from "bcryptjs"

//gerar o token
import { sign } from "jsonwebtoken"

import { UsersRepository } from "../repositories/UsersRepositories"


interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {

    async execute({email, password}: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepository);
        
        // Verificar se email existe
        const user = await usersRepositories.findOne({
            email,
        });

        if(!user){
            // colocar emial/password para não deixar fácil para o hacker o que está errado
            throw new Error("Email/Password incorrect")
        }

        // Verificar se senha está correta
        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) {
            throw new Error("Email/Password incorrect")
        }

        // Gerar o token
        const token = sign({
            email: user.email
        }, "ea5c1d6e9b8aaef1dd8db58d1667720a", {
            subject: user.id,
            expiresIn: "1d"//1 dia
            //expiração de token, um token de expiração menor de 15min ou um refresh token que muitas aplicações usariam, que o token demora para expirar e quando esse token expira ao invés desse usuário precisar inserir novamente o email e a senha a aplicação, por xexmplo um cliente vai armazenar esse refresh token e a cada x tempo que o token expirar vai ser feito um novo token baseado no refresh token 
        })
    }
}

export { AuthenticateUserService }