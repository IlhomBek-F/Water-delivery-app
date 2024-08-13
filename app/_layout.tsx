import { useFonts } from 'expo-font';
import { StyleSheet, View, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import 'react-native-reanimated';
import { Stack } from 'expo-router';
import Header from '@/components/Header';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
     <Stack>
        <Stack.Screen name='(tabs)' options={{headerShown: false}} />
        <Stack.Screen name='index' options={{headerShown: true, headerTitle: 'AVANA', header: () => <Header /> }}/>
     </Stack>
  );
}


const headerStyle = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    height: 100
  }
})
