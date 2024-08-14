import ImageCarousel from "@/components/ImageCarousel";
import { router } from "expo-router";
import { View, Text, Button } from "react-native";

function Main() {

    return (
        <View className="flex justify-center items-center">
           <Button title="Go to home" onPress={() => router.push('/home')}/>
        </View>
    )
}

export default Main;