import ImageCarousel from "@/components/ImageCarousel";
import WaterLists from "@/components/WaterList";
import { router } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView, ScrollView } from "react-native";

function Main() {

    useEffect(() => {
        router.dismiss(3)
    }, []);

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