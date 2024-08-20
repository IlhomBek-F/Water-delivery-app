import AddSubButtons from "@/components/AddSubButtons";
import ButtonElem from "@/components/ButtonElem";
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
                <WaterDetailHeader />
                <Animated.View style={{transform: [{scale: startValue}]}} className='justify-center items-center'>
                   <Image source={images.obiVatan2} resizeMode="contain" className="w-[200px] h-[101px]"/>
                </Animated.View>
            </View>
            <View className="bg-white h-[345px] px-4">
                <Text className="font-semibold text-xl py-6">Water "Obi Vatan" 19 L</Text>
                <View className="flex justify-between flex-row items-center mb-6">
                    <Text className="font-semibold">19 TJS</Text>
                    <AddSubButtons count={count} subCount={subCount} addCount={addCount}/>
                </View>
                <Text className="font-semibold text-wrap mb-10">
                    Obi Vatan bottled drinking water is a daily contribution to your health. 
                    When clean drinking water is always at hand, you can be sure that one the 
                    components of a healthy lifestyle is completely safe and bring only use
                </Text>
                <ButtonElem title='Add to cart' handleEvent={() => router.push('/(tabs)/cart')}/>
            </View>
        </SafeAreaView>
    )
}

export default WaterDetail