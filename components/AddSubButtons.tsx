import { Ionicons } from "@expo/vector-icons";
import { Pressable, View, Text } from "react-native";

function AddSubButtons({count, subCount, addCount}) {
    return (
                          <View className="flex-row justify-between w-[90px] border border-gray-400 rounded-2xl px-2 py-[8px]">
                          <Pressable onPress={() => subCount()} className="w-[20px] justify-start flex-row">
                              <Ionicons name="remove-outline"  className="font-extrabold text-blue-400" size={16}/>
                          </Pressable>
                          <Text>{count}</Text>
                          <Pressable onPress={() => addCount()} className="w-[20px] justify-end flex-row">
                              <Ionicons name="add-outline" className="font-extrabold text-blue-400" size={16}/>
                          </Pressable>
                          </View>
    )
}

export default AddSubButtons