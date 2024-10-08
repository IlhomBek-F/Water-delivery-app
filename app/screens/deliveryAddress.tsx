import ButtonElem from "@/components/ButtonElem";
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
  const [data, setData] = useState({
    address: '',
    date: new Date(),
    comment: ''
  });

  return (
    <SafeAreaView>
      <DeliveryAddressHeader />
      <View className="px-3">
        <View className="w-[350px] bg-white h-[570px] rounded-xl p-2">
          <Text className="mb-3">Delivery</Text>
          <View className="mb-[30px]">
            <Text className="text-gray-400 mb-2">Address</Text>
            <TextInput placeholder="delivery address"
              className="border-b-2 border-b-blue-300 px-3 pb-2 mb-4"
              multiline={true}
              value={data.address}
              onChangeText={(address) => setData((prev) => ({ ...prev, address }))}
              defaultValue="Khujand"
              textAlignVertical="top"
              numberOfLines={1}
            />
            <Text className="mb-2 text-black">Date</Text>
          </View>
          <View className="w-[160px] mb-[70px]">
            <DatePickerInput
              className="bg-blue-50 rounded-t-xl border-none"
              locale="en"
              withDateFormatInLabel={false}
              value={data.date}
              onChange={(date) => setData((prev) => ({ ...prev, date: new Date(date as any) }))}
              inputMode="start"
              mode="flat"
              animationType="slide"
              presentationStyle="pageSheet"
            />
          </View>
          <View className="flex mb-[30px]">
            <Text className="text-black mb-2">Your comment</Text>
            <TextInput
              className="border-b-2 border-b-blue-300 px-3 pb-2 mb-4"
              value={data.comment}
              textAlignVertical="top"
              onChangeText={(comment) => setData((prev) => ({ ...prev, comment }))}
              numberOfLines={1}
            />
          </View>
          <View className="flex-1 justify-end">
            <ButtonElem title='Confirm' handleEvent={() => { }} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default DeliveryAddress;