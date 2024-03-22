import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/presentacion/components/views/home/home';
import { RegisterScreen } from './src/presentacion/components/views/register/register';
import { RegisterSaleScreen } from './src/presentacion/components/views/Sales/RegisterSale';


export type RootStackParamList = {
  HomeScreen: undefined;
  RegisterScreen: undefined;
  RegisterSaleScreen: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>
  ();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: true,
            title: 'Registro',
          }}
        />
        <Stack.Screen name="RegisterSaleScreen"
          component={RegisterSaleScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;