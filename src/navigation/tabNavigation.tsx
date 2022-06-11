import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../screens/home';
import COLORS from '../utils/colors';
import { View } from 'react-native';
import ListTickets from '../screens/listTickets';



const Tab = createBottomTabNavigator();


const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveBackgroundColor: COLORS.white,
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveBackgroundColor: COLORS.white,
                tabBarInactiveTintColor: COLORS.grey,
                tabBarShowLabel: false,
            }}
        >

            <Tab.Screen
                options={{ tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} /> }}
                name="Home" component={Home} />
            <Tab.Screen
                options={{ tabBarIcon: ({ color }) => <MaterialCommunityIcons name="ticket-confirmation-outline" size={24} color={color} /> }}
                name="Tickets" component={ListTickets} />
            <Tab.Screen
                options={{ tabBarIcon: ({ color }) => <MaterialCommunityIcons name="calendar-month-outline" size={24} color={color} /> }}
                name="Date" component={View} />
            <Tab.Screen
                options={{ tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account-circle-outline" size={24} color={color} /> }}
                name="Acount" component={View} />

        </Tab.Navigator>
    );
}

export default TabNavigation