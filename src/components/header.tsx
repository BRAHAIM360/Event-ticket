import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SimpleLineIcons, Ionicons } from '@expo/vector-icons';

import COLORS from '../utils/colors';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface headerProps {
    title: string,
    setings: boolean,
    navigation: NativeStackNavigationProp<any, any>,
}

const Header: React.FC<headerProps> = ({ title, setings, navigation }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>

                <View style={styles.iconContainer}>
                    <Ionicons name="chevron-back" size={30} color="black" />
                </View>
            </TouchableOpacity>

            <Text style={{ color: COLORS.dark, fontSize: 20, fontFamily: "roboto", fontWeight: 'bold', marginBottom: 5 }}>{title} </Text>
            <TouchableOpacity>
                {setings ?
                    <View style={styles.iconContainer}>
                        <SimpleLineIcons name="options" size={24} color="black" />
                    </View>
                    : <View style={{ height: 50, width: 50 }}></View>
                }

            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        paddingTop: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        marginHorizontal: 30,
    },
    iconContainer: {
        backgroundColor: COLORS.lightGray,
        height: 50,
        width: 50,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
})
export default Header;