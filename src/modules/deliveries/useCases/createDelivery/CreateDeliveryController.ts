import {CreateDeliveryUseCase} from "./CreateDeliveryUseCase";
import {Request, Response} from "express";

interface IClientRequest {
    client_id: string;
}

export class CreateDeliveryController {
    async handle(request: Request, response: Response) {
        const {item_name} = request.body;
        const {client_id} = request as IClientRequest;
        const createDeliveryUseCase = new CreateDeliveryUseCase();
        const delivery = await createDeliveryUseCase.execute({
            client_id,
            item_name
        });

        return response.json(delivery);
    }
}