export interface User {
    id?: string;
    Tipo_Documento: string;
    Numero_Documento: string;
    Nombres: string;
    Apellidos: string;
    password: string;
    session_token?: string;
}

