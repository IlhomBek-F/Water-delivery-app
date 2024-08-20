import React, { useState } from "react";
import { View, SafeAreaView, Image } from "react-native";
import images from "@/constants/images";
import Carousel, {Pagination} from "react-native-snap-carousel";

function ImageCarousel() {
    const [activeSlide, setActiveSlide] = useState(0);

    const renderItem = ({item}: {item: string}) => {
        return (
            <View className="justify-center items-center bg-white rounded-xl">
                <Image source={item} resizeMode="center" className="w-[200px] h-[130px] rounded-xl "  />              
            </View>
        );
    }

    return (
        <SafeAreaView >
             <View className="justify-center items-center my-2">
               <Carousel
                       layout='default'
                       data={[images.obiVatan, images.merciBaku, images.obiShirin]}
                       sliderWidth={250}
                       itemWidth={250}
                       autoplayInterval={5000}
                       autoplay
                       loop={false}
                       onSnapToItem={(index) => setActiveSlide(index)}
                       renderItem={renderItem}
             />
             {<SliderPagination activeSlide={activeSlide}/>}
            </View>
      </SafeAreaView>
    )
}

const SliderPagination = ({activeSlide}: {activeSlide: number}) => {
    return (
        <Pagination
          dotsLength={3}
          activeDotIndex={activeSlide}
          dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: 'lightblue'
          }}
          inactiveDotStyle={{
              // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
    );
}

export default ImageCarousel
