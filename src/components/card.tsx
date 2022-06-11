import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, Touchable, TouchableOpacity } from 'react-native';
import COLORS from '../utils/colors';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { EventInterface } from '../utils/data';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export interface cardProps {
    event: EventInterface;
    navigation: any

}


const { width } = Dimensions.get("screen");
export const Card = ({ navigation, event }: cardProps) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('detail')}>
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImage} borderRadius={25} source={event.img}  >
                </ImageBackground >
                <View style={styles.TopCard}>
                    <Text>{event.month}</Text>
                    <Text style={{ color: COLORS.primary }}>{event.day}</Text>
                </View>
                <View style={styles.buttomCard}>
                    <View>
                        <Text style={{ color: COLORS.dark, fontSize: 15, fontFamily: "roboto", fontWeight: 'bold', marginBottom: 5 }}>{event.title}</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Ionicons name="location-outline" color={COLORS.grey} size={10} style={{ marginRight: 3 }} />
                            <Text style={{ color: COLORS.grey, fontSize: 10 }}>{event.location} </Text>
                        </View>
                    </View>
                    <View>
                        <MaterialCommunityIcons name="map-marker-path" size={30} color={COLORS.primary} />
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        width: width * 2 / 3,
        height: width * 2 / 3,
        backgroundColor: COLORS.white,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        marginBottom: 30
    },
    backgroundImage: {
        width: width * 2 / 3 - 25,
        height: width * 2 / 3 - 25,
        borderRadius: 25,
        overflow: "hidden"
    },
    buttomCard: {
        backgroundColor: COLORS.white,
        position: "absolute",
        bottom: -25,
        width: width * 2 / 3 - 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        borderRadius: 15,

    },
    TopCard: {
        position: "absolute",
        backgroundColor: COLORS.white,
        top: 20,
        right: 20,
        alignItems: "center",
        padding: 5,
        borderRadius: 10,
    }

})

