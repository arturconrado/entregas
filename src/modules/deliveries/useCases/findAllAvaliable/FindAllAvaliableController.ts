import {FindAllAvaliableUseCase} from "./FindAllAvaliableUseCase";
import {Request, Response} from "express";


export class FindAllAvaliableController {
    async handle(request: Request, response: Response) {
        const findAllWithoutEndDateUseCase = new FindAllAvaliableUseCase()

        const deliveries = await findAllWithoutEndDateUseCase.execute();

        return response.json(deliveries);
    }
}