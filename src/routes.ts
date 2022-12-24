import {Router} from "express";
import {CreateClientController} from "./modules/clients/useCases/CreateClient/CreateClientController";
import {AuthenticateClientController} from "./modules/accounts/authenticateClient/authenticateClientController";
import {CreateDeliverymanController} from "./modules/deliveryman/usesCases/createDeliverymanController";
import {
    AuthenticateDeliverymanController
} from "./modules/accounts/authenticateDeliveryman/AuthenticateDeliverymanController";
import {CreateDeliveryController} from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import {ensureAuthenticateClient} from "./middlewares/ensureAuthenticateClient";
import {FindAllAvaliableController} from "./modules/deliveries/useCases/findAllAvaliable/FindAllAvaliableController";


const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const findAllAvaliableController = new FindAllAvaliableController();



routes.post("/client/authenticate/", authenticateClientController.handle);
routes.post("/deliveryman/authenticate/", authenticateDeliverymanController.handle);
routes.post("/client/", createClientController.handle);
routes.post("/deliveryman/", createDeliverymanController.handle);
routes.post("/delivery/", ensureAuthenticateClient, createDeliveryController.handle);
routes.get("/delivery/avaliable/", findAllAvaliableController.handle);



export {routes};