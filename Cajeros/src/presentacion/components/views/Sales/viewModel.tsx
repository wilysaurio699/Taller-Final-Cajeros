import React, { useState } from "react"
import { ApiDelivery } from "../../../../Data/sources/remote/api/ApiDelivery";
import { RegisterAuthUseCase } from "../../../../Domain/useCases/auth/RegisterAuthSale";
const RegisterViewModel = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        cliente: '',
        valor: '',
        fecha: '',
        cod_factura: '',


    });
    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }
    const registersale = async () => {
        if (isValidForm()) {
            const response = await RegisterAuthUseCase(values);
            console.log('Result' + JSON.stringify(response));
        }
    }
    const isValidForm = (): boolean => {

        if (values.cliente === '') {
            setErrorMessage('El nombre del cliente es requerido');
            return false;
        }
        if (values.valor === '') {
            setErrorMessage('El valor de la venta es requerido');
            return false;
        }
        if (values.fecha === '') {
            setErrorMessage('La fecha es requerida');
            return false;
        }
        if (values.cod_factura === '') {
            setErrorMessage('El codigo de la factura es requerido');
            return false;
        }



        return true;
    }
    return {
        ...values,
        onChange,
        registersale,
        errorMessage
    }
}
export default RegisterViewModel;