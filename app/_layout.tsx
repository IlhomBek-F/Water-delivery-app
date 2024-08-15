import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import 'react-native-reanimated';
import { Stack } from 'expo-router';
import HomeHeader from '@/components/HomeHeader';

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
        <Stack.Screen name='index' options={{headerShown: true, header: () => <HomeHeader /> }}/>
        <Stack.Screen name='(tabs)' options={{headerShown: false}} />
     </Stack>
  );
}


const headerStyle = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    height: 100
  }
})
