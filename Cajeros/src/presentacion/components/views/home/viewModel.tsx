import React, { useState } from 'react';
import { LoginAuthUseCase } from '../../../../Domain/useCases/auth/Login.Auth';

const HomeViewModel = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        Numero_Documento: '',
        password: ''
    });

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    };

    const login = async () => {
        if (isValidForm()) {
            const response = await LoginAuthUseCase(values.Numero_Documento, values.password);
            console.log('Respuesta: ' + JSON.stringify(response));
            if (!response.success) {
                setErrorMessage(response.message);
                return false; // El inicio de sesión no fue exitoso
            }
            return true; // El inicio de sesión fue exitoso
        }
        return false; // El formulario no es válido
    };

    const isValidForm = () => {
        if (values.Numero_Documento === '') {
            setErrorMessage('El email es requerido');
            return false;
        }
        if (values.password === '') {
            setErrorMessage('La contraseña es requerida');
            return false;
        }
        return true;
    };

    return {
        ...values,
        onChange,
        login,
        errorMessage
    };
};

export default HomeViewModel;
