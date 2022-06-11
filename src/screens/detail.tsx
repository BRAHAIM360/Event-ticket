import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ImageBackground, Image, ScrollView } from 'react-native';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import COLORS from '../utils/colors';
import { events } from '../utils/data';
import Header from '../components/header';
import DatPin from '../components/datPin';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface detailProps {
    navigation: NativeStackNavigationProp<any, any>,
}
const { width } = Dimensions.get("screen");

const Detail: React.FC<detailProps> = ({ navigation }) => {
    return (
        <>
            <Header navigation={navigation} title='Details' setings={true} />
            <ScrollView style={styles.container}>

                <View style={styles.box} >
                    <ImageBackground style={styles.imageBackground} imageStyle={{ borderRadius: 30 }} source={events[1].img}>
                        <DatPin month='JAN' day='24' style={{ height: 60 }} />
                    </ImageBackground>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 20, alignItems: "center" }}>
                    <View>
                        <Text style={{ color: COLORS.dark, fontSize: 20, fontFamily: "roboto", fontWeight: 'bold', marginBottom: 5 }}>Fistival Oran</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Ionicons name="location-outline" color={COLORS.grey} size={15} style={{ marginRight: 3 }} />
                            <Text style={{ color: COLORS.grey, fontSize: 15 }}>Oran Algeria </Text>
                        </View>
                    </View>
                    <View style={{ padding: 10, backgroundColor: "#FDF3F2", justifyContent: "center", alignItems: "center", borderRadius: 20 }}>
                        <Text style={{ color: COLORS.primary, fontWeight: "bold" }}>200 DA</Text>
                    </View>
                </View>
                <View style={{ marginTop: 10, flexDirection: "row", alignItems: "center", backgroundColor: COLORS.white, borderRadius: 20, padding: 10 }}>
                    <Image source={require("../assets/images/avatars.png")} style={{ width: 190, height: 40 }} />
                    <Text style={{ color: COLORS.primary, fontSize: 14, fontFamily: "roboto", fontWeight: 'bold', marginBottom: 5 }}>250+ joined</Text>
                </View>
                <Text style={{ color: COLORS.dark, fontSize: 20, fontFamily: "roboto", fontWeight: 'bold', margin: 10 }}>Description </Text>
                <Text style={{ marginBottom: 40 }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis iure provident officia eos qui mollitia <Text style={{ color: COLORS.primary, fontWeight: 'bold', marginBottom: 20 }}>Read More</Text></Text>

            </ScrollView>
            <View style={{ bottom: 0, flexDirection: "row", justifyContent: "space-between", padding: 20, alignItems: "center", backgroundColor: COLORS.white }}>
                <View>
                    <Text style={{ color: COLORS.dark, fontSize: 20, fontFamily: "roboto", fontWeight: 'bold', marginBottom: 5 }}>Fistival Oran</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Ionicons name="location-outline" color={COLORS.grey} size={15} style={{ marginRight: 3 }} />
                        <Text style={{ color: COLORS.grey, fontSize: 15 }}>Oran Algeria </Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <View style={{ padding: 15, backgroundColor: COLORS.primary, justifyContent: "center", alignItems: "center", borderRadius: 20 }}>
                        <Text style={{ color: COLORS.white, fontWeight: "bold" }}>Get Ticket</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </>

    );
}
const styles = StyleSheet.create({
    container: {
        padding: 30,
    },

    box: {
        width: width - 60,
        height: width - 20,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",

    },
    imageBackground: {
        width: width - 80,
        height: width - 40,

    }
})
export default Detail;