import { TouchableOpacity, Text } from "react-native";

function ButtonElem({title, handleEvent}) {

    return (
        <TouchableOpacity onPress={handleEvent} 
        className="bg-blue-500 w-[330px] h-[60px] rounded-[50%] flex-row justify-center items-center" 
        activeOpacity={0.8}>
          <Text className="text-white font-semibold">{title}</Text>
      </TouchableOpacity>
    )
}

export default ButtonElem