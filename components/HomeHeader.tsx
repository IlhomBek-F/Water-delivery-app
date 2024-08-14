import { Ionicons } from "@expo/vector-icons";
import { View, Text, TextInput} from "react-native";

function HomeHeader() {
    return (
           <View className='bg-blue-200 h-36 rounded-b-2xl justify-center items-center pt-5 mb-2'>
                <Text className='text-[#548def] text-2xl font-serif mb-3'>AquaExpress</Text>
                   
                   <View className="relative">
                    <TextInput className="w-60 h-10 rounded-[50%] bg-white pl-8" placeholder="Search"/>
                    <Ionicons name="search" size={17} color="lightgrey" style={{position: 'absolute', left: 7, top: 11}} />
                   </View>
            </View>
    )
}

export default HomeHeader;