import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from "nativewind";

export default function Capacity() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const navigation = useNavigation();

  return (
    <View className="bg-[#fcfcfc] dark:bg-[#10171d] w-full h-full">
      {/*Header Componenet */}
      <View className="p-10">
        <View className="pt-10 flex flex-row gap-4 items-center">
          <View className="bg-gray-100 dark:bg-[#7601ff] px-4 py-2 rounded-xl">
            <Ionicons
              name="arrow-back"
              size={24}
              color={colorScheme === "light" ? "black" : "white"}
            />
          </View>
          <Image
            className="w-8 h-8"
            source={require("../../assets/tesla-logo.png")}
          />
          <View className="flex flex-col">
            <Text className="text-lg text-black dark:text-white font-bold">
              Charge Point Station
            </Text>
            <Text className="text-sm text-gray-500">
              190 El Camino, Fresno, CA 93720
            </Text>
          </View>
        </View>
      </View>
      {/*Select Spot */}
      <View className="flex flex-col  items-center  w-full h-2/5 bg-gray-100 dark:bg-[#47415d]">
        <View className="mt-5">
          <Text className="text-2xl font-semibold text-center mb-6 dark:text-white">
            Select spot
          </Text>
          <ScrollView horizontal className="flex flex-row gap-5 pl-10">
            <View className="bg-[#09e6b1] dark:bg-pink-600 py-6 h-56 rounded-3xl">
              <Text className="text-white  text-center mb-2 font-bold">
                TS-01
              </Text>
              <Image
                source={require("../../assets/tesla-birdseye.png")}
                className="w-32 h-32"
                style={{ resizeMode: "contain" }}
              />
            </View>

            {Array.from({ length: 10 }).map((_, index) => (
              <View
                key={index}
                className="bg-white py-6 h-56 rounded-3xl w-32 border-2 border-gray-300"
              >
                <Text className="text-gray-400 text-center mb-2 font-bold">
                  TS-02
                </Text>
                <Text className="text-gray-400 text-5xl text-center mb-2 mt-auto">
                  P
                </Text>
                <Text className="text-black dark:text-white text-xl font-semibold text-center">
                  $ 1.2
                </Text>
                <Text className="text-black dark:text-white text-xl font-thin text-center">
                  kWh
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      {/*Select Capacity needed */}
      <View className="flex flex-row p-10">
        {/* <View className="flex flex-col h-60 w-1/3">
          <View className="bg-gray-100 w-full h-full">
            <View className="flex flex-col h-full">
              <View className="bg-[#09e6b1] w-full h-1/3"></View>
              <View className="bg-[#09e6b1] w-full h-1/3"></View>
              <View className="bg-[#09e6b1] w-full h-1/3"></View>
            </View>
          </View>
        </View> */}
        <View className="flex flex-col gap-4">
          <View className="border-2 border-gray-300  w-full marker:flex flex-row p-4 rounded-2xl">
            <Text
              className="text-2xl text-gray-400 dark:text-white"
              style={{ flexShrink: 1 }}
            >
              Final Capacity
            </Text>
            <Text className="text-4xl font-semibold ml-auto dark:text-white">
              {" "}
              70{" "}
            </Text>
          </View>

          <View className="border-2 border-gray-300   w-full flex flex-row p-4 rounded-2xl">
            <Text
              className="text-2xl text-gray-400 dark:text-white"
              style={{ flexShrink: 1 }}
            >
              Current Capacity
            </Text>
            <Text className="text-4xl  text-gray-400  dark:text-white font-semibold ml-auto">
              {" "}
              32{" "}
            </Text>
          </View>

          {/*Other details */}
          <View>
            <View className="flex flex-row">
              <Text className="text-2xl font-semibold dark:text-white">
                Other details
              </Text>
              <Text className="dark:text-white" onPress={toggleColorScheme}>
                Dark Mode
              </Text>
            </View>
            <View className="flex flex-row gap-4 mt-2">
              <View className="flex flex-col">
                <Text className="text-gray-400 dark:text-white text-lg">
                  Range
                </Text>
                <Text className="text-black dark:text-white dark:text-white text-lg font-semibold">
                  {" "}
                  439 km
                </Text>
              </View>
              <View className="flex flex-col">
                <Text className="text-gray-400 text-lg dark:text-white">
                  Charging Time
                </Text>
                <Text className="text-black dark:text-white  text-lg font-semibold">
                  {" "}
                  2h 58m
                </Text>
              </View>
              <View>
                <Text className="text-gray-400 text-lg dark:text-white">
                  Price
                </Text>
                <Text className="text-black dark:text-white dark:text-white text-lg font-semibold">
                  1.2
                </Text>
              </View>
              <View className="bg-blue-200 px-5 flex flex-row items-center py-2 rounded-xl">
                <Ionicons
                  name="arrow-forward"
                  size={24}
                  color="white"
                  onPress={() => navigation.navigate("Payment")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
