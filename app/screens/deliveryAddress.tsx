import DeliveryAddressHeader from "@/components/DeliveryAddressHeader";
import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput } from "react-native";
import { DatePickerInput, registerTranslation, TimePickerModal } from "react-native-paper-dates";

registerTranslation('en', {
    selectSingle: 'Select Date',
    selectMultiple: 'Select Dates',
    selectRange: 'Select period',
    save: 'Save',
    notAccordingToDateFormat: (inputFormat) =>
        `Date format must be ${inputFormat}`,
      mustBeHigherThan: (date) => `Must be later then ${date}`,
      mustBeLowerThan: (date) => `Must be earlier then ${date}`,
      mustBeBetween: (startDate, endDate) =>
        `Must be between ${startDate} - ${endDate}`,
    dateIsDisabled: 'Day is not allowed',
    previous: 'Previuos',
    next: 'Next',
    typeInDate: 'Type in date',
    pickDateFromCalendar: 'Pick date from calendar',
    close: 'Close',
    hour: '',
    minute: ''
})

function DeliveryAddress() {
    const [address, setAddress] = useState<string>();
    const [visible, setVisible] = useState(false);

    const onDismiss = () => {
           setVisible(false)
    }

    const onConfirm = ({hours, minutes}) => {
        setVisible(false)
    }

    return (
        <SafeAreaView>
           <DeliveryAddressHeader />
           <View className="px-3">
            <View className="w-[350px] bg-white h-[400px] rounded-xl p-2">
              <Text className="mb-3">Delivery</Text>
              <View className="mb-[30px]">
                 <Text className="text-gray-400 mb-2">Address</Text>
                 <TextInput placeholder="delivery address" 
                            className="border-b-2 border-b-blue-300 px-3 pb-2"
                            multiline={true}
                            value={address}
                            onChangeText={(e) => setAddress(e)}
                            defaultValue="Khujand"
                            textAlignVertical="top"
                            numberOfLines={1}
                />
              </View>
              <View className="flex-row justify-between">
              <View className="w-[160px]">
              <Text className="mb-2">Date</Text>
              <DatePickerInput
                    className="bg-blue-50 rounded-t-xl border-none"
                    locale="en"
                    withDateFormatInLabel={false}
                    value={new Date()}
                    onChange={(d) => {}}
                    inputMode="start"
                    mode="flat"
                    animationType="slide"
                    presentationStyle="pageSheet"
                />
              </View>
              <View className="w-[160px] border-b-[0.7px]"> 
              <Text className="mb-2">Time</Text>
              <View className="overflow-hidden rounded-t-xl justify-center items-center">
              <Text onPress={() => setVisible(true)}
                className="text-center w-[160px] text-[25px] pt-4 bg-blue-50 h-[60px]">1:41 PM</Text>
                  <TimePickerModal
                   visible={visible}
                   onDismiss={onDismiss}
                   onConfirm={onConfirm}
                   hours={12}
                   minutes={14}
                />
              </View>
              </View>
              </View>
            </View>
           </View>
        </SafeAreaView>
    )
}

export default DeliveryAddress;