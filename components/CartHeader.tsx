import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { View, Text, Pressable } from "react-native";

function CartHeader() {

    return (
        <View className='bg-blue-200 h-13 rounded-b-2xl justify-center items-center pt-5 mb-2'>
                <Text className='text-black text-2xl font-serif mb-3'>Cart</Text>
                   <Pressable onPress={() => router.dismiss(1)} className="absolute left-3 bottom-2"
                ><Ionicons name="chevron-back-outline" size={20} color='blue'/></Pressable>
            </View>
    )
}

export default CartHeader