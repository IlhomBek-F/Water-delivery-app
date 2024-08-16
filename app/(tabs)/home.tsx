import ImageCarousel from "@/components/ImageCarousel";
import WaterLists from "@/components/WaterList";
import { SafeAreaView, ScrollView } from "react-native";

function Main() {
    return (
        <SafeAreaView >
            <ScrollView>
               <ImageCarousel />
               <WaterLists />
            </ScrollView>
       </SafeAreaView>
    )
}

export default Main;