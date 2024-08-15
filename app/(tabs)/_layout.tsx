import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

function TabsLayout() {

    return (
        <Tabs>
             <Tabs.Screen name="home" options={{
                title: 'Home',
                tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color={color} /> 
             }}/>
        </Tabs>
    )
}

export default TabsLayout