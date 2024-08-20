import WaterDetailHeader from "@/components/WaterDetailHeader";
import images from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { View, Text, SafeAreaView,Image, Animated, Pressable, TouchableOpacity } from "react-native";

function WaterDetail() {
    const {params} = useRoute();
    const startValue = useRef(new Animated.Value(0.8)).current;
    const [count, setCount] = useState(1);

    useEffect(() => {
        Animated.timing(startValue, {
          toValue: 1.9,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }, [startValue]);

    const addCount = () => {
        setCount((prev) => prev + 1);
    }

    const subCount = () => {
         if(count > 1) {
             setCount((prev) => prev - 1);
         }
    }
      
    return (
        <SafeAreaView >
            <View className="bg-[#EBEFFF] h-[300px]">
                <WaterDetailHeader title='Water'/>
                <Animated.View style={{transform: [{scale: startValue}]}} className='justify-center items-center'>
                   <Image source={images.obiVatan2} resizeMode="contain" className="w-[200px] h-[101px]"/>
                </Animated.View>
            </View>
            <View className="bg-white h-[345px] px-4">
                <Text className="font-semibold text-xl py-6">Water "Obi Vatan" 19 L</Text>
                <View className="flex justify-between flex-row items-center mb-6">
                    <Text className="font-semibold">19 TJS</Text>
                    <View className="flex-row justify-between items-center w-[90px] border border-gray-400 rounded-2xl px-2 py-[8px]">
                        <Pressable onPress={() => subCount()} className="w-[20px] justify-start flex-row">
                            <Ionicons name="remove-outline"  className="font-extrabold text-blue-400" size={16}/>
                        </Pressable>
                        <Text>{count}</Text>
                        <Pressable onPress={() => addCount()} className="w-[20px] justify-end flex-row">
                            <Ionicons name="add-outline" className="font-extrabold text-blue-400" size={16}/>
                        </Pressable>
                    </View>
                </View>
                <Text className="font-semibold text-wrap mb-10">
                    Obi Vatan bottled drinking water is a daily contribution to your health. 
                    When clean drinking water is always at hand, you can be sure that one the 
                    components of a healthy lifestyle is completely safe and bring only use
                </Text>
                <TouchableOpacity onPress={() => router.push('/(tabs)/cart')} className="bg-blue-500 h-[60px] rounded-[50%] flex-row justify-center items-center" activeOpacity={0.8}>
                    <Text className="text-white font-semibold">Add to cart</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default WaterDetail