import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, TextInput, ToastAndroid, Touchable, TouchableOpacity, ScrollView } from 'react-native';
import { RoundedButton } from '../../../components/RoundedButton';
import useViewModel from './viewModel';
import { CustomTextInput } from '../../../components/CusatomTextInput';

export const RegisterSaleScreen = () => {
    const { cliente, valor, fecha, cod_factura, errorMessage, onChange, registersale } = useViewModel();
    //Para saber si la variable ya tiene establecido un valor
    useEffect(() => {
        if (errorMessage !== '')
            ToastAndroid.show(errorMessage, ToastAndroid.LONG)
    }, [errorMessage]);
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../../assets/fondo.jpg')}
                style={styles.imageBackground}
            />
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../../../assets/Regisrarventa.png')}
                    style={styles.logoImage}
                />

            </View>
            <View style={styles.form}>
                <ScrollView>

                    <Text style={styles.formText}>        INGRESE LOS DATOS DE LA VENTAS</Text>

                    <CustomTextInput
                        image={require('../../../../../assets/my_user.png')}
                        placeholder='Cliente'
                        value={cliente}
                        keyboardType='default'
                        property='cliente'
                        onChangeText={onChange}


                    />
                    <CustomTextInput
                        image={require('../../../../../assets/dolar.png')}
                        placeholder='Valor'
                        value={valor}
                        keyboardType='numeric'
                        property='valor'
                        onChangeText={onChange}
                    />




                    <CustomTextInput
                        image={require('../../../../../assets/calendario.png')}
                        placeholder='Fecha'
                        value={fecha}
                        keyboardType='default'
                        property='fecha'
                        onChangeText={onChange}

                    />
                    <CustomTextInput
                        image={require('../../../../../assets/factura.png')}
                        placeholder='Cod_Factura'
                        value={cod_factura}
                        keyboardType='default'
                        property='cod_factura'
                        onChangeText={onChange}

                    />


                    <View style={{ marginTop: 30 }}>
                        <RoundedButton text='CONFIRMAR' onPress={() => registersale()} />
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        bottom: '30%',
    },
    form: {
        width: '100%',
        height: '75%',
        backgroundColor: '#EDFFE0',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30,
    },
    formText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    formIcon: {
        width: 25,
        height: 25,
        marginTop: 5,
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 25,
    },
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: 'green',
        marginLeft: 15,
    },
    formRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    formRegisterText: {
        fontStyle: 'italic',
        color: 'green',
        borderBottomWidth: 1,
        borderBottomColor: 'green',
        fontWeight: 'bold',
        marginLeft: 10,
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '2%',
        alignItems: 'center',
    },
    logoImage: {
        width: 150,
        height: 150,
    },
    logoText: {
        color: 'green',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
    },
});


