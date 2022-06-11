import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ticket from '../components/ticket';

export interface listTicketsProps {
    navigation: any
}

const ListTickets: React.FC<listTicketsProps> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Ticket title='fistival Oran' month='Jan' day='20' img={require("../assets/images/card1.jpg")} navigation={navigation} />
            <Ticket title='fistival Mosta' month='Jan' day='20' img={require("../assets/images/card2.jpg")} navigation={navigation} />

            <Ticket title='fistival Alger' month='Jan' day='20' img={require("../assets/images/card3.jpg")} navigation={navigation} />

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 30,
    }
})
export default ListTickets;