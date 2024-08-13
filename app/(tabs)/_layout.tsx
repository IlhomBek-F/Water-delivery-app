import React from "react";
import { router, Stack } from "expo-router";
import { Button } from "react-native";

function TabsLayout() {
    return (
      <Stack>
        <Stack.Screen name="home" options={{
          headerLeft: () => <Button title="<--" onPress={() => router.dismiss(1)}/>,
          headerRight: () => <Button title='About' onPress={() => router.push('/about')}/>
        }}/>
        <Stack.Screen name="about" options={{headerLeft: () => <Button title="Home" onPress={() => router.dismiss(1)}/>}}/>
      </Stack>
    )
}

export default TabsLayout