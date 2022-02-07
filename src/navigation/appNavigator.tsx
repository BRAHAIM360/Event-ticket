import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationTheme from './navigationTheme';
import OnBoardScreen from '../screen/OnBoardScreen';
import DetailsScreen from '../screen/DetailsScreen';
import HomeScreen from '../screen/HomeScreen';
const { Navigator, Screen } = createNativeStackNavigator();


const AppNavigator = () => {
  return (
    <NavigationContainer theme={navigationTheme} >
      <Navigator initialRouteName='Pagee' screenOptions={{
        headerShown: false,

      }} >
        <Screen name="OnBoardScreen" component={OnBoardScreen} />
        <Screen name="HomeScreen" component={HomeScreen} />
        <Screen name="DetailsScreen" component={DetailsScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;