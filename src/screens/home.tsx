import React from 'react';
import { Text, View, StyleSheet, StatusBar, Image, TextInput, FlatList, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import COLORS from '../utils/colors';
import { Card } from '../components/card';
import { events, events2 } from '../utils/data';
import Card2 from '../components/card2';

interface HomeScreenProps {
    navigation: NativeStackScreenProps<any, any>
};

const Home = ({ navigation }: HomeScreenProps) => {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <View >
                    <Text style={{ color: COLORS.dark, fontSize: 20, fontFamily: "roboto", fontWeight: 'bold', marginBottom: 5 }}>Currant Location</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Ionicons name="location-outline" color={COLORS.grey} size={15} style={{ marginRight: 3 }} />
                        <Text style={{ color: COLORS.grey, fontSize: 15 }}>Algeria, Oran</Text>
                    </View>
                </View>
                <View >
                    <Image style={styles.profileImage} source={require('../assets/images/profile.jpg')} />
                </View>
            </View>

            <View style={styles.searchInputContainer} >
                <Ionicons name="search" color={COLORS.grey} size={25} style={{ marginHorizontal: 10 }} />
                <TextInput placeholder="Search Events" />
            </View>
            <ScrollView>
                <View style={styles.categorieHeader} >
                    <Text style={{ color: COLORS.dark, fontSize: 15, fontFamily: "roboto", fontWeight: 'bold' }}>Popular Events</Text>
                    <Text style={{ color: COLORS.grey, fontSize: 15 }}>View All</Text>
                </View>

                <FlatList
                    legacyImplementation={false}
                    horizontal
                    data={events}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <Card navigation={navigation} event={item}
                    />}
                />
                <FlatList
                    legacyImplementation={false}
                    horizontal
                    data={events}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <Card navigation={navigation} event={item}
                    />}
                />
                <FlatList
                    legacyImplementation={false}
                    horizontal
                    data={events}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <Card navigation={navigation} event={item}
                    />}
                />

                <View style={styles.categorieHeader} >
                    <Text style={{ color: COLORS.dark, fontSize: 15, fontFamily: "roboto", fontWeight: 'bold' }}>Events This Month</Text>
                    <Text style={{ color: COLORS.grey, fontSize: 15 }}>View All</Text>
                </View>
                {events2.map((item) => {
                    return <Card2 key={item.location} event={item} />
                })}

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.light,
        flex: 1,
        padding: 5,
    },
    header: {
        paddingVertical: 25,
        paddingHorizontal: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    profileImage: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    searchInputContainer: {
        flexDirection: "row",
        backgroundColor: COLORS.white,
        height: 40,
        marginHorizontal: 30,
        alignItems: "center",
        borderRadius: 15,
        marginBottom: 20

    },
    categorieHeader: {
        paddingVertical: 10,
        paddingHorizontal: 25,
        flexDirection: "row",
        justifyContent: "space-between"
    },

})

export default Home;