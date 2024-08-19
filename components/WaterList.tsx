import images from "@/constants/images";
import { FlatList, SafeAreaView } from "react-native";
import WaterCard from "./WaterCard";
import { useNavigation } from "expo-router";

function WaterLists() {
    return (
        <SafeAreaView className="justify-center items-center">
            <FlatList data={[images.obiVatan1, images.obiVatan1, images.obiVatan1]} keyExtractor={({item, index}) => index} key={1}
                 numColumns={2}
                 columnWrapperStyle={{
                    gap: 10,
                    marginBottom: 10
                 }}
                 scrollEnabled={false}
                 renderItem={({item, index}) => <WaterCard item={item} index={index}/>}
         />
        </SafeAreaView>
    )
}

export default WaterLists