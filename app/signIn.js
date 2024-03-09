import { View, Text, StatusBar, TextInput, Pressable, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { CountryPicker } from "react-native-country-codes-picker";

export default function signIn() {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState("+1");
  const firstRef = useRef("");
  const LastRef = useRef("");
  const EmailRef = useRef("");
  const PasswordRef = useRef("");
  const NumberRef = useRef("");

  return (
    <View className="pt-20 flex-1 bg-black">
      <StatusBar barStyle="light" />
      <View className="flex flex-row justify-center relative ">
        <AntDesign
          className="absolute left-8"
          name="leftcircle"
          size={28}
          color="white"
        />
        <Text className="text-white font-semibold text-[20px]">signIn</Text>
      </View>

      {/* form */}
      <View className="flex flex-col items-center justify-center w-full gap-12 px-8 pt-16">
        <View className="flex flex-row gap-16">
          <View className="w-5/12">
            <Text className="text-white font-medium text-[16px]">
              First Name
            </Text>
            <View className="border border-[#6D7178] flex-row rounded-[8px] mt-4">
              <TextInput
                className="font-medium px-4 py-3 text-white"
                onChangeText={(value) => (firstRef.current = value)}
                placeholder="Jane"
                placeholderTextColor={"white"}
              />
            </View>
          </View>

          <View className="w-5/12">
            <Text className="text-white font-medium text-[16px]">
              Last Name
            </Text>
            <View className="border border-[#6D7178] flex-row rounded-[8px] mt-4">
              <TextInput
                className="font-medium px-4 py-3 text-white"
                onChangeText={(value) => (LastRef.current = value)}
                placeholder="Johnson"
                placeholderTextColor={"white"}
              />
            </View>
          </View>
        </View>
        <View className="w-full">
          <Text className="text-white font-medium text-[16px]">Email</Text>
          <View className="border border-[#6D7178] flex-row rounded-[8px] mt-4">
            <TextInput
              className="font-medium px-4 py-3 text-white"
              onChangeText={(value) => (EmailRef.current = value)}
              placeholder="123@gmail.com"
              placeholderTextColor={"white"}
            />
          </View>
        </View>

        <View className="w-full">
          <Text className="text-white font-medium text-[16px]">Password</Text>
          <View className="border border-[#6D7178] flex-row rounded-[8px] mt-4">
            <TextInput
              className="font-medium px-4 py-3 text-white"
              onChangeText={(value) => (PasswordRef.current = value)}
              placeholder="Password@123"
              secureTextEntry
              placeholderTextColor={"white"}
            />
          </View>
        </View>

        <View className="flex flex-row gap-16">
          <View className="w-4/12">
            <Text className="text-white font-medium text-[16px]">Country</Text>
            <View className="flex justify-center px-4 py-4 items-center border border-[#6D7178] flex-row rounded-[8px] mt-4">
              <CountryPicker
                show={show}
                // when picker button press you will get the country object with dial code
                pickerButtonOnPress={(item) => {
                  setCountryCode(item.dial_code);
                  setShow(false);
                }}
              />
              <Pressable
                onPress={() => setShow(true)}
                className="flex flex-row gap-6"
              >
                <Text className="text-[16px] text-white">{countryCode}</Text>
                <AntDesign name="down" size={20} color="white" />
              </Pressable>
            </View>
          </View>

          <View className="w-6/12">
            <Text className="text-white font-medium text-[16px]">
              Mobile Number
            </Text>
            <View className="border border-[#6D7178] flex-row rounded-[8px] mt-4">
              <TextInput
                className="font-medium px-4 py-3 text-white"
                onChangeText={(value) => (LastRef.current = value)}
                placeholder="7473011963"
                placeholderTextColor={"white"}
              />
            </View>
          </View>
        </View>
        
        <Text className='text-white text-center tracking-wider leading-relaxed'>
          By tapping sign Up, you consent to receiving a one-time 
          verification code via text messages to this phone number.
        </Text>
        
         <TouchableOpacity className='px-16 py-8 bg-gray-600'>
          <Text className="text-white">
            SignIn
          </Text>
        </TouchableOpacity> 
      </View>
    </View>
  );
}
