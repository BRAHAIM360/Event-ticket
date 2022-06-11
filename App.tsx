import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from "expo-font";
import { useEffect, useState } from 'react';
import AppNavigator from './src/navigation/appNavigator';
import AppLoading from 'expo-app-loading';
import { useFonts } from './src/hooks/useFonts';

export default function App() {
  const [isFontLoaded, setisFontLoaded] = useState(false);
  useEffect(() => {
    const loadfont = async () => {
      await useFonts()
    }
    loadfont().then(() => setisFontLoaded(true));


  }, []);

  return (
    isFontLoaded === true ? <AppNavigator /> : <AppLoading />
  );
}
