import React from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import COLORS from "../consts/colors";
import houses, { houseInterf } from "../consts/houses";
import { Card } from "../components/card";
import { ListCategories } from "../components/listCategories";
import { Listoptions } from "../components/listOptions";

const HomeScreen = ({ navigation }: { navigation: any }) => {

  const { width } = Dimensions.get("screen");
  const revers = (array: houseInterf[]) => {
    var ret = new Array;
    for (var i = array.length - 1; i >= 0; i--) {
      ret.push(array[i]);
    }
    return ret;
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      {/* Customise status bar */}
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      {/* Header container */}
      <View style={style.header}>
        <View>
          <Text style={{ color: COLORS.grey }}>Location</Text>
          <Text style={{ color: COLORS.dark, fontSize: 20, fontWeight: 'bold' }}>
            ORAN
          </Text>
        </View>
        <Image
          style={style.profileImage}
          source={require('../assets/profile.jpg')}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} >
        {/* Input and sort button container */}
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <View style={style.searchInputContainer}>
            <Ionicons name="search" color={COLORS.grey} size={25} style={{ marginRight: 10 }} />
            <TextInput placeholder="Search address, city, location" />
          </View>

          <View style={style.sortBtn}>
            <MaterialIcons name="tune" color={COLORS.white} size={25} />
          </View>
        </View>

        {/* Render list options */}
        <Listoptions />

        {/* Render categories */}
        <ListCategories />

        {/* Render Card */}
        <FlatList
          snapToInterval={width - 20}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 20, paddingVertical: 20 }}
          horizontal
          data={houses}
          renderItem={({ item }) => <Card navigation={navigation} house={item} />}
        />
        <FlatList
          snapToInterval={width - 20}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 20, paddingVertical: 20 }}
          horizontal
          data={revers(houses)}
          renderItem={({ item }) => <Card navigation={navigation} house={item} />}
        />
      </ScrollView>
    </SafeAreaView >
  );

};


const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  sortBtn: {
    backgroundColor: COLORS.dark,
    height: 50,
    width: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },



  cardImage: {
    width: "100%",
    height: 120,
    borderRadius: 15,
  },
  facility: { flexDirection: "row", marginRight: 15 },
  facilityText: { marginLeft: 5, color: COLORS.grey },
});
export default HomeScreen;
