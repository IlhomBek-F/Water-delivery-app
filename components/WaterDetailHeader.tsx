import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { View, Text, Pressable } from "react-native";

function WaterDetailHeader() {
    return (
           <View className=' h-18 rounded-b-3xl justify-center items-center pt-5 mb-20'>
                <Text className='text-black text-2xl font-serif font-semibold'>Water</Text>
                <Pressable onPress={() => router.dismiss(1)} className="absolute left-3 bottom-2"
                ><Ionicons name="chevron-back-outline" size={20} color='blue'/></Pressable>
            </View>
    )
}

export default WaterDetailHeader;