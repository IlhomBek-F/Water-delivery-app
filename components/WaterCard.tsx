import { router, useNavigation } from "expo-router";
import { TouchableOpacity, Image, Text } from "react-native";

function WaterCard({item, index}) {
    
    const navigation = useNavigation();

    return (
        <TouchableOpacity className="w-[167px] bg-white items-center rounded-lg h-[200px]" activeOpacity={0.6} onPress={() => {
            navigation.navigate('waterDetail', {item})
        }}>
            <Image source={item} resizeMode="contain" className="w-[135px] h-[150px] mb-1" key={index}/>
            <Text className="font-semibold">Water "Obi Vatan" 19l</Text>
            <Text className="absolute bottom-1 right-3 font-semibold">19 TJS</Text>
        </TouchableOpacity>
    )
}

export default WaterCard