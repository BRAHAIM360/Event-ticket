import react from 'react'
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Page = () => {
  console.log("page");

  return (
    <SafeAreaView>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Page Screen test</Text>
    </SafeAreaView>
  );
}
