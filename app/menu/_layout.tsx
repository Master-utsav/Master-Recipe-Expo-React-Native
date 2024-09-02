import React from 'react';
import { Stack } from 'expo-router';

const MenuLayout = () => {
  return (
    <Stack>
      {/* Define any header options or common components here */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[recipeId]" options={{ headerShown: false }} />
    </Stack>
  );
};

export default MenuLayout;