import ImageCarousel from "@/components/ImageCarousel";
import { View, SafeAreaView, ScrollView } from "react-native";

function Main() {

    return (
        <SafeAreaView >
            <ScrollView className="h-full bg-[#fff]"> 
               <View className="flex justify-center items-center bg-[#eef4ff3e] p-2 rounded-2xl mx-3">
                <ImageCarousel />
              </View>
          </ScrollView>
       </SafeAreaView>
        
    )
}

export default Main;