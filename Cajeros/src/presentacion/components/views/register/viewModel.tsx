import React, { useState } from "react"
import { ApiDelivery } from "../../../../Data/sources/remote/api/ApiDelivery";
import { RegisterAuthUseCase } from "../../../../Domain/useCases/auth/RegisterAuth";
const RegisterViewModel = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        Tipo_Documento: '',
        Numero_Documento: '',
        Nombres: '',
        Apellidos: '',
        password: ''

    });
    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }
    const register = async () => {
        if (isValidForm()) {
            const response = await RegisterAuthUseCase(values);
            console.log('Result' + JSON.stringify(response));
        }
    }
    const isValidForm = (): boolean => {

        if (values.Tipo_Documento === '') {
            setErrorMessage('El tipo de documento es requerido');
            return false;
        }
        if (values.Numero_Documento === '') {
            setErrorMessage('El Numero Del Documento es requerido');
            return false;
        }
        if (values.Nombres === '') {
            setErrorMessage('El nombre es requerido');
            return false;
        }
        if (values.Apellidos === '') {
            setErrorMessage('El apellido es requerido');
            return false;
        }

        if (values.password === '') {
            setErrorMessage('La contraseña es requerida');
            return false;
        }


        return true;
    }
    return {
        ...values,
        onChange,
        register,
        errorMessage
    }
}
export default RegisterViewModel;