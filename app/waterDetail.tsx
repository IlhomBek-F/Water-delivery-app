import WaterListHeader from "@/components/WaterListHeader";
import { useRoute } from "@react-navigation/native";
import { View, Text, SafeAreaView } from "react-native";

function WaterDetail() {
    const {params} = useRoute();

    return (
        <SafeAreaView >
            <View>
               <WaterListHeader />
               <Text>Hello world {params.item}</Text>
           </View>
        </SafeAreaView>
    )
}

export default WaterDetail