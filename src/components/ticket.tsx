import * as React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import COLORS from '../utils/colors';

export interface ticketProps {
    img: any,
    month: string,
    day: string,
    title: string,
    navigation: any

}
const { width } = Dimensions.get("screen");
const Ticket: React.FC<ticketProps> = ({ navigation, img, month, day, title }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("detail")}>
            <View style={styles.container} >
                <Image style={styles.image} source={img} />
                <View style={{ flex: 3 }}>
                    <Text style={{ color: COLORS.dark, fontSize: 20, fontFamily: "roboto", fontWeight: 'bold', marginBottom: 5 }}>{title}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <MaterialCommunityIcons name="account" color={COLORS.grey} size={10} style={{ marginRight: 3 }} />
                        <Text style={{ color: COLORS.grey, fontSize: 10 }}>Mahioussi Brahim </Text>
                    </View>
                    <View style={{ marginTop: 10, flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ color: COLORS.primary, fontSize: 10, fontFamily: "roboto", fontWeight: 'bold', marginBottom: 5 }}>2 Seat</Text>
                    </View>
                </View>
                <View style={styles.TopCard}>
                    <Text>{month}</Text>
                    <Text style={{ color: COLORS.primary }}>{day}</Text>
                </View>
            </View >
        </TouchableOpacity>

    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: COLORS.white,
        padding: 10,
        marginVertical: 10,
        borderRadius: 20,
        justifyContent: "space-between",
        width: width - 70,
        height: 120,
    },
    image: {
        flex: 1,
        width: 80,
        height: 100,
        borderRadius: 20,
        marginRight: 20
    }
    ,
    TopCard: {
        position: "absolute",
        backgroundColor: COLORS.light,
        width: 50,
        top: 40,
        right: 20,
        alignItems: "center",
        padding: 2,
        borderRadius: 10,
        flex: 1
    }
})
export default Ticket;