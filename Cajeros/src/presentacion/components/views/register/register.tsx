import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, TextInput, ToastAndroid, Touchable, TouchableOpacity, ScrollView } from 'react-native';
import { RoundedButton } from '../../../components/RoundedButton';
import useViewModel from './viewModel';
import { CustomTextInput } from '../../../components/CusatomTextInput';

export const RegisterScreen = () => {
    const { Tipo_Documento, Numero_Documento, Nombres, Apellidos, password, errorMessage, onChange, register } = useViewModel();
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
                    source={require('../../../../../assets/cajero.png')}
                    style={styles.logoImage}
                />
                <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
            </View>
            <View style={styles.form}>
                <ScrollView>

                    <Text style={styles.formText}>REGISTRARSE COMO UN NUEVO CAJERO</Text>

                    <CustomTextInput
                        image={require('../../../../../assets/Documento.png')}
                        placeholder='Tipo-Documento'
                        value={Tipo_Documento}
                        keyboardType='default'
                        property='Tipo_Documento'
                        onChangeText={onChange}


                    />
                    <CustomTextInput
                        image={require('../../../../../assets/Documento.png')}
                        placeholder='Numero-Documento'
                        value={Numero_Documento}
                        keyboardType='numeric'
                        property='Numero_Documento'
                        onChangeText={onChange}
                    />




                    <CustomTextInput
                        image={require('../../../../../assets/my_user.png')}
                        placeholder='Nombres'
                        value={Nombres}
                        keyboardType='default'
                        property='Nombres'
                        onChangeText={onChange}

                    />
                    <CustomTextInput
                        image={require('../../../../../assets/my_user.png')}
                        placeholder='Apellidos'
                        value={Apellidos}
                        keyboardType='default'
                        property='Apellidos'
                        onChangeText={onChange}

                    />


                    <CustomTextInput
                        image={require('../../../../../assets/candado.png')}
                        placeholder='Contraseña'
                        value={password}
                        keyboardType='default'
                        secureTextEntry={true}
                        property='password'
                        onChangeText={onChange}


                    />

                    <View style={{ marginTop: 30 }}>
                        <RoundedButton text='CONFIRMAR' onPress={() => register()} />
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
        borderBottomColor: '#AAAAAA',
        marginLeft: 15,
    },
    formRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    formRegisterText: {
        fontStyle: 'italic',
        color: 'orange',
        borderBottomWidth: 1,
        borderBottomColor: 'green',
        fontWeight: 'bold',
        marginLeft: 10,
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '5%',
        alignItems: 'center',
    },
    logoImage: {
        width: 100,
        height: 100,
    },
    logoText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
    },
});


