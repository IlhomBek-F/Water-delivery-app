import { View, Text, TextInput} from "react-native";

function Header() {
    return (
           <View className='bg-blue-200 h-36 rounded-b-2xl justify-center items-center pt-5'>
                <Text className='text-[#548def] text-3xl font-serif'>OB</Text>
 
                <TextInput className="w-60 h-10 rounded-[50%] bg-white pl-40" placeholder="Search"/>
          </View>
    )
}

export default Header;