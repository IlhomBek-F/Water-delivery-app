import CartHeader from "@/components/CartHeader";
import HomeHeader from "@/components/HomeHeader";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View , Text} from "react-native";

const TabBarIcon = ({color, focused, name, icon}) => {
    return <>
    <View className={`w-[70px] rounded-md  h-[50px] justify-center items-center p-1 ${focused && 'bg-blue-100'}`}>
       <Ionicons name={icon} size={25} color={focused && '#4d94ff' || '#404040'} />
       <Text className={`text-gray-600 font-medium ${focused && 'text-blue-500'}`}>{name}</Text>
    </View>
    </>
}

function TabsLayout() {

    return (
      <>
      <Tabs screenOptions={{
             tabBarShowLabel: false,
             tabBarActiveTintColor: 'blue', 
             tabBarLabelStyle: {
             fontWeight: 'bold',
             fontSize: 12,},
             tabBarVisibilityAnimationConfig: {
                show: {animation: 'spring'}
             },
             tabBarStyle: {
                height: 60,
             },
             }}>
             <Tabs.Screen name="home" options={{
                header: () => <HomeHeader />,
                tabBarIcon: ({color, focused}) => <TabBarIcon color={color} focused={focused} icon='water-outline' name='Home'/>
                }}/>
                 <Tabs.Screen name="orders" options={{
                headerShown: false,
                tabBarIcon: ({color, focused}) => <TabBarIcon color={color} focused={focused} icon='time-outline' name='Orders'/>
                }}/>
               <Tabs.Screen name="cart" options={{
                header: () => <CartHeader />,
                tabBarIcon: ({color, focused}) => <TabBarIcon color={color} focused={focused} icon='bag-outline' name='Cart'/>
                }}/>
                 <Tabs.Screen name="profile" options={{
                headerShown: false,
                tabBarIcon: ({color, focused}) => <TabBarIcon color={color} focused={focused} icon='person-outline' name='Profile'/>
                }}/>
          </Tabs>
      </>
    )
}

export default TabsLayout