import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet, SafeAreaView } from 'react-native';
import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import Navbar from '@/components/Navbar';
import { Stack } from 'expo-router';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  // Prevent the splash screen from auto-hiding
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  const [fontsLoaded] = useFonts({
    'outfit-regular': require('@/assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('@/assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('@/assets/fonts/Outfit-Bold.ttf'),
  });

  // Function to preload assets and handle splash screen
  async function preloadAssets() {
    const imageAssets = [
      require('@/assets/images/icon.png'),
    ];

    await Promise.all(imageAssets.map((asset) => Asset.loadAsync(asset)));
  }

  // Use effect to manage loading process
  useEffect(() => {
    async function prepare() {
      try {
        await preloadAssets(); // Preload assets
      } catch (e) {
        console.warn(e);
      } finally {
        if (fontsLoaded) {
          setIsReady(true); // Set state when everything is ready
          await SplashScreen.hideAsync(); // Hide splash screen
        }
      }
    }

    prepare();
  }, [fontsLoaded]); // Re-run the effect when fonts are loaded

  if (!isReady) {
    // Render a fallback UI until everything is loaded
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="menu" options={{ headerShown: false }} />
        <Stack.Screen name="contact" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
