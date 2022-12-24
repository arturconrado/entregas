import {prisma} from "../../../../database/prismaClient";


export class FindAllAvaliableUseCase {
    async execute() {
        return await prisma.deliveries.findMany({
            where: {
                end_at: null
            }
        });
    }
}