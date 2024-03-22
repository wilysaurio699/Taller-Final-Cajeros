import { ResponseApiDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { Usersale } from "../entities/UserSale";

export interface AuthRepository {
    login(email: string, password: string): Promise<ResponseApiDelivery>;
    registersale(Usersale: Usersale): Promise<ResponseApiDelivery>;
}