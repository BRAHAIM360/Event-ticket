import * as React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import COLORS from '../consts/colors';
import { categoryList } from '../consts/houses';


export const ListCategories = ({ }) => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    return (
        <View style={style.categoryListContainer}>
            {categoryList.map((category, index) => (
                <Pressable
                    key={index}
                    onPress={() => setSelectedCategoryIndex(index)}>
                    <Text
                        style={[
                            style.categoryListText,
                            index == selectedCategoryIndex && style.activeCategoryListText,
                        ]}>
                        {category}
                    </Text>
                </Pressable>
            ))}
        </View>
    );
}
const style = StyleSheet.create({
    categoryListText: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 5,
        color: COLORS.grey,
    },
    activeCategoryListText: {
        color: COLORS.dark,
        borderBottomWidth: 1,
        paddingBottom: 5,
    },
    categoryListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        paddingHorizontal: 40,
    }
});