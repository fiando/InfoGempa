import React, {Component, UseState} from 'react';
import {View, Text, DrawerLayoutAndroid} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DaftarGempa from './Screens/DaftarGempa';
import GempaDirasakan from './Screens/GempaDirasakan';
import GempaBerpotensiTsunami from './Screens/GempaBerpotensiTsunami';
import GempaTerkini from './Screens/GempaTerkini';
import Home from './Screens/Home';
import {styles} from './styles.js';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Info Gempa'}}
          />
          <Stack.Screen
            name="GempaTerkini"
            component={GempaTerkini}
            options={{title: 'Gempa Terkini'}}
          />
          <Stack.Screen
            name="DaftarGempa"
            component={DaftarGempa}
            options={{title: 'Daftar Gempa'}}
          />
          <Stack.Screen
            name="GempaDirasakan"
            component={GempaDirasakan}
            options={{title: 'Gempa Dirasakan'}}
          />
          <Stack.Screen
            name="GempaBerpotensiTsunami"
            component={GempaBerpotensiTsunami}
            options={{title: 'Gempa Berpotensi Tsunami'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
