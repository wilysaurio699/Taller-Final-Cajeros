import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { RoundedButton } from '../../../components/RoundedButton';
import useViewModel from './viewModel';
import { CustomTextInput } from '../../../components/CusatomTextInput';

export const RegisterSaleScreen = () => {
  const { cliente, valor, fecha, cod_factura, errorMessage, onChange, registersale } = useViewModel();
  const [numeroMes, setNumeroMes] = useState('');
  const [numeroDia, setNumeroDia] = useState('');
  const [mesData, setMesData] = useState<{ data: any[]; message: string; success: boolean } | null>(null);
  const [diaData, setDiaData] = useState<{ data: any[]; message: string; success: boolean } | null>(null);

  // Para manejar la llamada a la API al presionar el botón "Confirmar Mes"
  const handleConfirmarMes = async () => {
    try {
      const response = await fetch(`http://192.168.42.181:3000/api/users/select/${numeroMes}`);

      const data = await response.json();
      setMesData(data);
      console.log('Datos del mes:', data);
    } catch (error) {
      console.error('Error al consumir la API:', error);
    }
  };
  const handleConfirmardia = async () => {
    try {
      const response = await fetch(`http://192.168.42.181:3000/api/users/selectdia/${numeroDia}`);


      const data = await response.json();
      setDiaData(data);
      console.log('Datos del dia:', data);
    } catch (error) {
      console.error('Error al consumir la API:', error);
    }
  };


  return (
    <View style={styles.container}>
      <Image source={require('../../../../../assets/fondo.jpg')} style={styles.imageBackground} />
      <View style={styles.logoContainer}>
        <Image source={require('../../../../../assets/Regisrarventa.png')} style={styles.logoImage} />
      </View>
      <View style={styles.form}>
        <ScrollView>
          <Text style={styles.formText}>INGRESE LOS DATOS DE LA VENTAS</Text>

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

          {/* Pequeño formulario para el número de mes */}
          <View style={styles.formInput}>
            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmarMes}>
              <Text style={styles.confirmButtonText}>                   Consultar Reporte Mensual</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formInput}>
            <TextInput
              placeholder='Número de mes'
              style={styles.formTextInput}
              value={numeroMes}
              onChangeText={setNumeroMes}
              keyboardType='numeric'
            />

            {/*Pequeño Formulario Para El Numero De Dia */}
          </View>
          <View style={styles.formInput}>
            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmardia}>
              <Text style={styles.confirmButtonText}>                  Consultar Reporte Del Dia</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formInput}>
            <TextInput
              placeholder='Número del día'
              style={styles.formTextInput}
              value={numeroDia}
              onChangeText={setNumeroDia}
              keyboardType='numeric'
            />
          </View>

          {/* Aquí se imprimirán los datos del mes */}
          {mesData && (
            <View style={styles.mesDataContainer}>
              <Text style={styles.mesDataText}>Reporte Mensual:</Text>
              {mesData.data.map((venta, index) => (
                <View key={index} style={styles.ventaContainer}>
                  <Text style={styles.ventaText}>Cliente: {venta.cliente}</Text>
                  <Text style={styles.ventaText}>Código de Factura: {venta.cod_factura}</Text>
                  <Text style={styles.ventaText}>Fecha: {new Date(venta.fecha).toLocaleDateString()}</Text>
                  <Text style={styles.ventaText}>Valor: {venta.valor}</Text>
                  {venta.total_ventas && <Text style={styles.ventaText}>Total de Ventas: {venta.total_ventas}</Text>}
                </View>
              ))}
              <Text style={styles.messageText}>{mesData.message}</Text>
            </View>
          )}
          {/* Aquí se imprimirán los datos del mes */}
          {diaData && (
            <View style={styles.diaDataContainer}>
              <Text style={styles.diaDataText}>Reporte Mensual:</Text>
              {diaData.data.map((venta, index) => (
                <View key={index} style={styles.ventaContainer}>
                  <Text style={styles.ventaText}>Cliente: {venta.cliente}</Text>
                  <Text style={styles.ventaText}>Código de Factura: {venta.cod_factura}</Text>
                  <Text style={styles.ventaText}>Fecha: {new Date(venta.fecha).toLocaleDateString()}</Text>
                  <Text style={styles.ventaText}>Valor: {venta.valor}</Text>
                  {venta.total_ventas && <Text style={styles.ventaText}>Total de Ventas: {venta.total_ventas}</Text>}
                </View>
              ))}
              <Text style={styles.messageText}>{diaData.message}</Text>
            </View>
          )}

        </ScrollView>
      </View>
    </View>
  );
};

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
  formInput: {

    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  formTextInput: {

    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'green',
    marginLeft: 15,
  },
  confirmButton: {
    marginTop: 25,
    width: '100%',
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  confirmButtonText: {

    color: 'white',
    fontWeight: 'bold',
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
  diaDataContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
  },
  mesDataContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
  },
  diaDataText: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
  mesDataText: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
  ventaContainer: {
    marginBottom: 10,
  },
  ventaText: {
    marginBottom: 5,
  },
  messageText: {
    marginTop: 10,
  },
});

export default RegisterSaleScreen;
