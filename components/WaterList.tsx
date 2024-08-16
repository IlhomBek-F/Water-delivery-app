import images from "@/constants/images";
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity } from "react-native";

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
                 renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity className="w-[167px] bg-white items-center rounded-lg h-[200px]" activeOpacity={0.6}>
                        <Image source={item} resizeMode="contain" className="w-[135px] h-[150px] mb-1" key={index}/>
                        <Text className="font-semibold">Water "Obi Vatan" 19l</Text>
                        <Text className="absolute bottom-1 right-3 font-semibold">19 TJS</Text>
                    </TouchableOpacity>
                 )
            }}
         />
        </SafeAreaView>
    )
}

export default WaterLists