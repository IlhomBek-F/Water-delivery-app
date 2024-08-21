import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, View } from "react-native";

function DeliveryAddressHeader() {
  
    return (
        <View className='bg-blue-200 h-14 rounded-b-2xl justify-center items-center pt-5 mb-2'>
                   <Pressable onPress={() => router.dismiss(1)} className="absolute left-3 bottom-2"
                ><Ionicons name="chevron-back-outline" size={20} color='blue'/></Pressable>
        </View>
    )
}

export default DeliveryAddressHeader;