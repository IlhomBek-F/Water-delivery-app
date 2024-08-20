import AddSubButtons from "@/components/AddSubButtons";
import ButtonElem from "@/components/ButtonElem";
import images from "@/constants/images";
import { router } from "expo-router";
import React, { useState } from "react";
import { View, Text, SafeAreaView, Image } from "react-native";

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
                         <AddSubButtons count={count} addCount={addCount} subCount={subCount} />
                      </View>
                   </View>
              </View>
              <View className="absolute bottom-2">
                  <View className="flex-row justify-between mb-5">
                    <Text className="font-semibold">Total:</Text>
                    <Text className="font-semibold">57 TJS</Text>
                  </View>
                  <ButtonElem title='Buy now' handleEvent={() => router.push('/(tabs)/cart')}/>
              </View>
            </View>
        </SafeAreaView>
    )
}

export default Cart;