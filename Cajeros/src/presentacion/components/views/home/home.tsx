import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TextInput, ToastAndroid, Touchable, TouchableOpacity, ScrollView } from 'react-native';
import { RoundedButton } from
    '../../../../../src/presentacion/components/RoundedButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../App';
import useViewModel from '../home/viewModel';
import { CustomTextInput } from '../../../components/CusatomTextInput';
import { RegisterSaleScreen } from '../Sales/RegisterSale';


import styles from './Styles';

export const HomeScreen = () => {
    const { Numero_Documento, password, errorMessage, onChange, login } = useViewModel();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    useEffect(() => {
        if (errorMessage !== '') {
            ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage]);

    const handleLogin = async () => {
        if (Numero_Documento === '' || password === '') {
            ToastAndroid.show('Por favor, completa todos los campos.', ToastAndroid.SHORT);
        } else {
            const success = await login();
            if (success) {
                navigation.navigate('RegisterSaleScreen');
            } else {
                ToastAndroid.show('El Numero De Documento O la contraseña no coinciden.', ToastAndroid.SHORT);
            }
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../../assets/fondo.jpg')}
                style={styles.imageBackground}
            />
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../../../assets/cajerologin.png')}
                    style={styles.logoImage}
                />
                <Text style={styles.logoText}></Text>
                <Text style={styles.logoText}></Text>
            </View>
            <View style={styles.form}>
            <ScrollView>
                <Text style={styles.formText}>INGRESAR</Text>
                <CustomTextInput
                    image={require('../../../../../assets/Documento.png')}
                    placeholder='Numero-Documento'
                    value={Numero_Documento}
                    keyboardType='numeric'
                    property='Numero_Documento'
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
                    <RoundedButton text='ENTRAR' onPress={handleLogin} />
                </View>
                <View style={styles.formRegister}>
                    <Text>¿No tienes cuenta?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                        <Text style={styles.formRegisterText}>Regístrate</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </View>
        </View>
        
    );
};

export default HomeScreen;