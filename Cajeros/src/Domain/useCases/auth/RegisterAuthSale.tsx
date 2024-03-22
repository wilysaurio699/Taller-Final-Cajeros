import { AuthRepositoryImpl } from "../../../Data/repositories/AuthRepositorySale";
import { Usersale } from "../../entities/UserSale";
const { registersale } = new AuthRepositoryImpl();
export const RegisterAuthUseCase = async (Usersale: Usersale) => {
    return await registersale(Usersale);
}
