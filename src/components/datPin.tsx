import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import COLORS from '../utils/colors';

export interface datPinProps {
    month: string,
    day: string,
    style?: {}
}

const DatPin: React.FC<datPinProps> = ({ month, day, style }) => {
    return (
        <View style={[styles.TopCard, style]}>
            <Text>{month}</Text>
            <Text style={{ color: COLORS.primary }}>{day}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    TopCard: {
        position: "absolute",
        backgroundColor: COLORS.light,
        width: 50,
        top: 20,
        right: 20,
        alignItems: "center",
        justifyContent: "center",

        padding: 5,
        borderRadius: 10,
        flex: 1
    }
})
export default DatPin;