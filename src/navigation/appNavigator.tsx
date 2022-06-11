import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigation from "./tabNavigation";
import Detail from "../screens/detail";
import MyTicket from "../screens/myTicket";


const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={TabNavigation} />
        <Stack.Screen name="detail" component={Detail} />
        <Stack.Screen name="myticket" component={MyTicket} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
