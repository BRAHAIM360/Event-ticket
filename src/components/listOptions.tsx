import * as React from 'react';
import { View, StyleSheet, Dimensions, Image, Text } from 'react-native';
import COLORS from '../consts/colors';
import { optionsList } from '../consts/houses';

const { width } = Dimensions.get("screen");

export const Listoptions = ({ }) => {
    return (
        <View style={style.optionListsContainer}>
            {optionsList.map((option, index) => (
                <View style={style.optionsCard} key={index}>
                    {/* House image */}
                    <Image source={option.img} style={style.optionsCardImage} />

                    {/* Option title */}
                    <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
                        {option.title}
                    </Text>
                </View>
            ))}
        </View>
    );
}

const style = StyleSheet.create({
    optionsCard: {
        height: 210,
        width: width / 2 - 30,
        elevation: 20,
        alignItems: "center",
        backgroundColor: COLORS.white,
        borderRadius: 20,
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    optionsCardImage: {
        height: 140,
        borderRadius: 10,
        width: "100%",
    },
    optionListsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        paddingHorizontal: 20,
    },
    categoryListText: {
        fontSize: 16,
        fontWeight: "bold",
        paddingBottom: 5,
        color: COLORS.grey,
    }
});