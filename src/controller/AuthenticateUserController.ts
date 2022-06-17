import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService"


class AuthenticateUserController {
    static handle(arg0: string, handle: any) {
        throw new Error("Method not implemented.");
    }

    async handle(request: Request, response: Response) {
        const { email, password } = request.body

        const authenticateUserService = new AuthenticateUserService();

        const token = await authenticateUserService.execute({
            email,
            password
        });

        return response.json(token);
    }
}

export { AuthenticateUserController}