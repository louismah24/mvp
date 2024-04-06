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

export default function Payment() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="bg-[#fcfcfc] dark:bg-[#10171d] w-full h-full">
      <View>
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
        {/* Date and Time Component */}
        <View className="bg-gray-100 dark:bg-[#47415d] w-full h-44 pt-5">
          <Text className="text-center text-xl text-black dark:text-white font-semibold">
            Auguest 2024
          </Text>
          <View>
            <ScrollView horizontal className="flex flex-row  gap-2 pl-10 mt-2">
              <View className="flex flex-col items-center justify-center px-5 py-3 rounded-xl">
                <Text className="dark:text-white">Tue</Text>
                <Text className="font-bold dark:text-white">15</Text>
              </View>

              <View className="flex flex-col items-center justify-center px-5 py-3 rounded-xl">
                <Text className="dark:text-white">Wed</Text>
                <Text className="font-bold dark:text-white">16</Text>
              </View>
              <View className="flex flex-col items-center justify-center bg-teal-300 dark:bg-[#7601ff]  px-5 py-3 rounded-xl">
                <Text className="dark:text-white">Thu</Text>
                <Text className="font-bold dark:text-white">17</Text>
              </View>
              <View className="flex flex-col items-center justify-center px-5 py-3 rounded-xl">
                <Text className="dark:text-white">Fri</Text>
                <Text className="font-bold dark:text-white">18</Text>
              </View>

              <View className="flex flex-col items-center justify-center px-5 py-3 rounded-xl">
                <Text className="dark:text-white">Sat</Text>
                <Text className="font-bold dark:text-white">19</Text>
              </View>
              <View className="flex flex-col items-center justify-center px-5 py-3 rounded-xl">
                <Text className="dark:text-white">Sun</Text>
                <Text className="font-bold dark:text-white">20</Text>
              </View>
              <View className="flex flex-col items-center justify-center px-5 py-3 rounded-xl">
                <Text className="dark:text-white">Mon</Text>
                <Text className="font-bold dark:text-white">21</Text>
              </View>
            </ScrollView>
          </View>
        </View>
        <View className="flex flex-col items-center justify-center">
          <Text className="pt-5 font-bold text-xl dark:text-white">
            Reservation Time
          </Text>
          <Text className="text-gray-500 mb-6 dark:text-white">
            Select the time for reservation
          </Text>
          <View className="flex flex-row items-center justify-center gap-6">
            <View className="flex flex-col items-center-justify-center py-3 px-2  border-2 border-gray-300 rounded-xl">
              <Text className="font-bold text-5xl dark:text-white">10</Text>
            </View>
            <Text className="font-bold text-5xl dark:text-white"> : </Text>
            <View className="flex flex-col items-center-justify-center py-3 px-2  border-2 border-gray-300 rounded-xl">
              <Text className="font-bold text-5xl dark:text-white">50</Text>
            </View>
          </View>
        </View>
        <View className="mt-6">
          <Image
            source={require("../../assets/credit-card.png")}
            className="w-full h-44   rounded-lg"
            style={{ resizeMode: "contain" }}
          />
        </View>
        {/* Final Capacity and amount total */}
        <View className="flex flex-row justify-evenly mt-5">
          <View className="flex flex-col">
            <Text className="dark:text-white">Final Capacity</Text>
            <Text className="font-bold text-2xl dark:text-white">100 %</Text>
          </View>
          {/*Continue button */}
          <View className="flex flex-col bg-[#09e6b1] dark:bg-[#7601ff] p-4 rounded-lg">
            <Text className="text-white text-center font-semibold">
              Continue
            </Text>
          </View>
          <View className="flex flex-col">
            <Text className="dark:text-white">Total</Text>
            <Text className="font-bold text-2xl dark:text-white">4.38</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
