import * as Font from "expo-font";

export const useFonts = async () =>
  await Font.loadAsync({
    limelight: require("../assets/fonts/Roboto-Bold.ttf"),
    indie: require("../assets/fonts/Roboto-Regular.ttf"),
  });
