import { AuthRepositoryImpl } from "../../../Data/repositories/AuthRepository";

const { login } = new AuthRepositoryImpl();
export const LoginAuthUseCase = async (Numero_Documento: string, password: string) => {
    return await login(Numero_Documento, password);
}