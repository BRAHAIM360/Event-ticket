import React from "react";
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  TouchableOpacityBase,
  TouchableOpacity,
} from "react-native";
import COLORS from "../consts/colors";



const OnBoardScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }} >
      {/* Onboarding Image */}
      <StatusBar translucent backgroundColor={COLORS.tranparent} />
      <Image
        source={require('../assets/onboardImage.jpg')}
        style={style.image}
      />
      <View style={style.indicatorContainer} >
        <View style={style.indicator}></View>
        <View style={style.indicator}></View>
        <View style={[style.indicator, style.indicatorActive]}></View>
      </View>
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        <View>
          <Text style={style.title}>Trouvez votre</Text>
          <Text style={style.title}>Maison de réve</Text>
        </View>
        <View style={{ marginTop: 10 }} >
          <Text style={style.textStyle}>Programer une visite en quelques clics</Text>
        </View>

      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingBottom: 40,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <View style={style.btn}><Text style={{ color: COLORS.white }}>Commencer</Text></View>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  image: {
    height: 420,
    width: "100%",
    borderBottomLeftRadius: 100,
  },
  indicatorContainer: {
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  indicator: {
    height: 3,
    width: 30,
    backgroundColor: COLORS.grey,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  indicatorActive: {
    backgroundColor: COLORS.dark,
  },
  btn: {
    height: 60,
    marginHorizontal: 20,
    backgroundColor: "black",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { fontSize: 30, fontWeight: "bold" },
  textStyle: { fontSize: 16, color: COLORS.grey },
});
export default OnBoardScreen;
