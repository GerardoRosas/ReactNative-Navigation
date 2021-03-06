import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicio"
        >
          <Stack.Screen
            name="Inicio"
            component={Inicio}
            options={{
              title: "Componente Principal",
              headerStyle:{
                backgroundColor: '#F4511E'
              },
              headerTintColor: '#FFF'
            }}
          />
         <Stack.Screen
            name="Nosotros"
            component={Nosotros}
            //Podemos pasar informacion del componete principal hacia los demas 
            options={({route}) => ({
              title: route.params.totalPagar
            }) }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
