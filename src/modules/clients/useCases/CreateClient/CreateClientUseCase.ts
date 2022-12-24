import {prisma} from "../../../../database/prismaClient";
import {hash} from "bcrypt";


interface ICreateClient {
    username: string;
    password: string;
}


export class CreateClientUseCase {
    async execute({username, password}: ICreateClient) {
        const clientExists = await prisma.clients.findFirst({
            where: {
                username: {
                    mode: "insensitive",
                }
            }
        })



        // @ts-ignore
        if (clientExists.username === username) {
            throw new Error("Client already exists");
        }

        const passwordHash = await hash(password, 8);

        const client = await prisma.clients.create({
            data: {
                username,
                password: passwordHash
            }
        })

        return client;
    }
}
