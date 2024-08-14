import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { View, Text, Pressable } from "react-native";

function WaterListHeader() {
    return (
           <View className='bg-blue-200 h-20 rounded-b-3xl justify-center items-center pt-5 mb-10'>
                <Text className='text-black text-2xl font-serif font-semibold'>Water</Text>
                <Pressable onPress={() => router.dismiss(1)} className="absolute left-3 bottom-5"
                    ><Ionicons name="chevron-back-outline" size={20} color='blue'/></Pressable>
            </View>
    )
}

export default WaterListHeader;