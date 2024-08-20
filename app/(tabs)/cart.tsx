import images from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { View, Text, SafeAreaView, Image, Pressable, TouchableOpacity, ScrollView } from "react-native";

function Cart() {
  const [count, setCount] = useState(3);

  const addCount = () => {
    setCount((prev) => prev + 1);
}

const subCount = () => {
     if(count > 1) {
         setCount((prev) => prev - 1);
     }
}

    return (
        <SafeAreaView>
          <View className="h-full items-center w-[370px] shadow-sm">
              <View className="flex-row h-[120px] bg-white rounded-xl items-center">
                   <Image source={images.obiVatan2} resizeMode="contain" className="w-24 h-20"/>
                   <View className="w-[230px]">
                      <Text className="font-semibold mb-3">Water "Obi Vatan" 19L</Text>
                      <View className="flex-row justify-between w-[220px] items-center">
                         <Text className="font-semibold">57 TJS</Text>
                         <AddSubComponent count={count} addCount={addCount} subCount={subCount} />
                      </View>
                   </View>
              </View>
              <View className="absolute bottom-2">
                  <View className="flex-row justify-between mb-5">
                    <Text className="font-semibold">Total:</Text>
                    <Text className="font-semibold">57 TJS</Text>
                  </View>
                  <TouchableOpacity onPress={() => router.push('/(tabs)/cart')} 
                  className="bg-blue-500 w-[330px] h-[60px] rounded-[50%] flex-row justify-center items-center" 
                  activeOpacity={0.8}>
                    <Text className="text-white font-semibold">Buy now</Text>
                </TouchableOpacity>
              </View>
            </View>
        </SafeAreaView>
    )
}

function AddSubComponent({count, subCount, addCount}) {
  return (
                        <View className="flex-row justify-between w-[90px] border border-gray-400 rounded-2xl px-2 py-[8px]">
                        <Pressable onPress={() => subCount()} className="w-[20px] justify-start flex-row">
                            <Ionicons name="remove-outline"  className="font-extrabold text-blue-400" size={16}/>
                        </Pressable>
                        <Text>{count}</Text>
                        <Pressable onPress={() => addCount()} className="w-[20px] justify-end flex-row">
                            <Ionicons name="add-outline" className="font-extrabold text-blue-400" size={16}/>
                        </Pressable>
                        </View>
  )
}

export default Cart;