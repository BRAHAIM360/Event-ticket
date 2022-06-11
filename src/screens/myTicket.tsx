import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export interface myTicketProps {

}

const MyTicket: React.FC<myTicketProps> = ({ }) => {
    return (
        <View style={styles.container}>
            <Text>MyTicket</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {

    }
})
export default MyTicket;