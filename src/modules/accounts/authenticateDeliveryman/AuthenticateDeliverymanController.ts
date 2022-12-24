import {Request, Response} from "express";
import {AuthenticationDeliverymanUseCase} from "./AuthenticateDeliverymanUseCase";


export class AuthenticateDeliverymanController {
    async handle(request: Request, response: Response){
        const { username, password } = request.body;

        const authenticationDeliverymanUseCase = new AuthenticationDeliverymanUseCase();
        const result = await authenticationDeliverymanUseCase.execute({username, password});

        return response.json(result);

    }
}