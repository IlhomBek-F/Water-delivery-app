import React from "react";
import { router, Stack } from "expo-router";
import { Button, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import WaterListHeader from "@/components/WaterListHeader";

function TabsLayout() {
    return (
      <Stack>
        <Stack.Screen name="home" options={{
          header: () => <WaterListHeader />
        }}/>
        <Stack.Screen name="about" options={{headerLeft: () => <Button title="Home" onPress={() => router.dismiss(1)}/>}}/>
      </Stack>
    )
}

export default TabsLayout