import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  ScrollView,
  Button,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import monochromeMapStyle from "../../monochrome-map-style";
import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from "nativewind";
import strangerThingsMapStyle from "../../stranger-things-map-style";
import LottieView from "lottie-react-native";
import * as utils from "../../utils";

export function ChargingStation({ colorScheme }) {
  const navigation = useNavigation();

  return (
    <View className="p-10 w-1/2">
      <View className="flex flex-row gap-4">
        <Image
          source={require("../../assets/charging-station.png")}
          className="w-20 h-20"
        />
        <View className="flex flex-col">
          <Text className="text-xl dark:text-white font-semibold">
            Energy station details
          </Text>
          <View className="flex flex-row gap-2  mt-0.5">
            <Ionicons name="star" size={20} color="orange" />
            <Text className="text-sm text-gray-500">4.8 (172)</Text>
          </View>
          <View className="flex flex-row gap-2 mt-0.5">
            <View className="bg-green-300 dark:bg-indigo-300 rounded-xl px-2">
              <Text>2 / 8</Text>
            </View>
            <Text className="text-sm text-green-600   dark:text-indigo-300 font-semibold">
              Ports Available
            </Text>
          </View>
        </View>
      </View>

      {/*Energy station Overview and Reviews */}
      <View className="mt-6">
        <View className="flex flex-row gap-2">
          <Text className="text-lg font-semibold dark:text-white ">
            Overview
          </Text>
          <Text className="text-lg text-gray-400 dark:text-white">Reviews</Text>
        </View>
        {/*Energy station address 1 */}
        <View className="flex flex-row gap-4 mt-0.5">
          <Ionicons
            name="location"
            size={20}
            color={colorScheme === "light" ? "black" : "white"}
          />
          <Text className="text-sm text-gray-400 dark:text-white">
            Golden Lane, London EC1Y ORN, UK
          </Text>
        </View>
        <View className="w-full h-0.5 my-2 bg-gray-100"></View>
        <View className="flex flex-row gap-4">
          <Ionicons
            name="time"
            size={20}
            color={colorScheme === "light" ? "black" : "white"}
          />
          <Text className="text-sm text-gray-400">Open 24 Hours</Text>
        </View>
      </View>
      {/*Reservation and Go Now buttons */}

      <View className="flex flex-row gap-4 mt-6">
        <View className="flex flex-col border-2 border-blue-300 dark:border-[#7601ff] p-4 rounded-lg w-1/2">
          <Text
            className="text-white text-center font-semibold"
            onPress={() => navigation.navigate("Capacity")}
          >
            Go Now
          </Text>
        </View>

        <View className="flex flex-col bg-blue-300 dark:bg-[#7601ff] p-4 rounded-lg w-1/2">
          <Text
            className="text-white text-center font-semibold"
            onPress={() => navigation.navigate("Capacity")}
          >
            Reserve
          </Text>
        </View>
      </View>
    </View>
  );
}
