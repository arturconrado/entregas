import {hash} from "bcrypt";
import {prisma} from "../../../database/prismaClient";


interface ICreateDeliveryman {
    username: string;
    password: string;
}

export class CreateDeliverymanUseCase {

    async execute({username, password}: ICreateDeliveryman){
        const delivereymanExist = prisma.deliveryman.findFirst({
            where: {
                username: {
                    mode: "insensitive",
                }
            }
        });

        if (await delivereymanExist){
            throw new Error("Deliveryman already exists");
        }

        const passwordHash = await hash(password, 8);

        return await prisma.deliveryman.create({
            data: {
                username,
                password: passwordHash
            }
        });

    }

}