import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    // receber o token
    const authToken = request.headers.authorization;

    // validar se token está preenchido
    if(!authToken) {
        return response.status(401).end();
    }
            //dentro de um arrays escolher qual parte da variável é só colocar um vírgula antes da var
    const [, token] = authToken.split("")
    console.log(token);

    // validar se token é válido
    try{
        const { sub } = verify(authToken, "ea5c1d6e9b8aaef1dd8db58d1667720a") as IPayload;
        //Recuperar informações do usuário
        request.user_id = sub;
        
        
        return next();
    }   catch(err) {
        return response.status(401).end();
    }
    

    


}
