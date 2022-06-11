import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import COLORS from '../utils/colors';
import { EventInterface } from '../utils/data';
import { Ionicons } from '@expo/vector-icons';

export interface card2Props {
    event: EventInterface
}

const Card2 = ({ event }: card2Props) => {
    return (
        <View style={styles.container} >
            <Image style={styles.image} source={event.img} />
            <View style={{ flex: 3 }}>
                <Text style={{ color: COLORS.dark, fontSize: 20, fontFamily: "roboto", fontWeight: 'bold', marginBottom: 5 }}>{event.title}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons name="location-outline" color={COLORS.grey} size={10} style={{ marginRight: 3 }} />
                    <Text style={{ color: COLORS.grey, fontSize: 10 }}>{event.location} </Text>
                </View>
                <View style={{ marginTop: 10, flexDirection: "row", alignItems: "center" }}>
                    <Image source={require("../assets/images/avatars.png")} style={{ width: 150, height: 40 }} />
                    <Text style={{ color: COLORS.primary, fontSize: 10, fontFamily: "roboto", fontWeight: 'bold', marginBottom: 5 }}>250+ joined</Text>
                </View>
            </View>
            <View style={styles.TopCard}>
                <Text>{event.month}</Text>
                <Text style={{ color: COLORS.primary }}>{event.day}</Text>
            </View>
        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: COLORS.white,
        flex: 1,
        margin: 10,
        padding: 10,
        borderRadius: 20,
        justifyContent: "space-between"
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
        top: 20,
        right: 20,
        alignItems: "center",
        padding: 5,
        borderRadius: 10,
        flex: 1
    }
})

export default Card2;