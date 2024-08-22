import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, View, Text } from "react-native";

function DeliveryAddressHeader() {

    return (
        <View className='bg-blue-200 h-12 rounded-b-2xl justify-center items-center mb-2'>
            <Text className='text-black text-xl font-serif '>Delivery</Text>
            <Pressable onPress={() => router.dismiss(1)} className="absolute left-3 top-4"
            ><Ionicons name="chevron-back-outline" size={20} color='blue' /></Pressable>
        </View>
    )
}

export default DeliveryAddressHeader;