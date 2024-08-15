import ImageCarousel from "@/components/ImageCarousel";
import { View, SafeAreaView } from "react-native";

function Main() {
    return (
        <SafeAreaView >
               <View className="flex justify-center items-center bg-[#eef4ff3e] p-2 rounded-2xl mx-3">
                <ImageCarousel />
              </View>
       </SafeAreaView>
        
    )
}

export default Main;