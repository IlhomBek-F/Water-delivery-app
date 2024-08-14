import React from "react";
import { View, Text } from "react-native";
import Carousel from "react-native-snap-carousel";

function ImageCarousel() {

    const renderItem = ({item, index}: {item: any, index: number}) => {
        return (
            <View >
                <Text >{ item.title }</Text>
            </View>
        );
    }

    return (
        <View>
             
        </View>
    )
}

export default ImageCarousel