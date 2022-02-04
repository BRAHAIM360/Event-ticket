import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationTheme from './navigationTheme';
import { Page } from '../screen/page';
const { Navigator, Screen } = createNativeStackNavigator();


const AppNavigator = () => {
  return (
    <NavigationContainer theme={navigationTheme} >
      <Navigator initialRouteName='Pagee' screenOptions={{
        headerShown: true,

      }} >
        <Screen name="Pagee" component={Page} />
        {/* <Screen name="Home" component={HomeScreen} /> */}
      </Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;