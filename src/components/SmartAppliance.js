import { StyleSheet, Text, View, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { styled, useColorScheme } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";

import Navbar from "./Navbar";
import DataPoints from "./DataPoints";

export function SmartAppliance() {
  const navigation = useNavigation();

  return (
    <View className=" h-full w-full bg-white dark:bg-[#10171d]">
      {/*Header */}
      <View className="mt-5 p-10">
        <View className="flex flex-row">
          <View className="flex flex-col">
            <Text className="text-3xl dark:text-white">Home</Text>
            <Text className="text-sm dark:text-white">Welcome Wayne</Text>
          </View>
          <View className="ml-auto">
            <Text className="text-sm text-gray-500 dark:text-white">
              Today's Weather
            </Text>
            <Image
              className="w-10 h-10 ml-auto"
              source={require("../../assets/weather.png")}
            />
          </View>
        </View>
      </View>
      {/*Energy Consumption Today */}
      <DataPoints />

      {/* Appliances */}
      <View className="bg-gray-200 dark:bg-[#47415d]   w-full h-full mt-4 rounded-t-3xl">
        <View className="p-10">
          <Text className="text-xl mb-4 dark:text-white">Appliances</Text>
          <View className="flex flex-row px-4 gap-5">
            {/* Each Appliances */}
            {/* Appliance 1 */}

            <View className="bg-white  dark:bg-[#10171d] rounded-2xl h-28 w-24">
              {/*Appliance Icon */}
              <View className="bg-white p-6 rounded-2xl shadow-2xl  bg-indigo-600 flex flex-row items-center justify-center">
                <Ionicons name="bulb" size={24} color="white" />
              </View>
              <View className="flex flex-col items-center justify-center mt-2">
                <Text className="text-green-500 dark:text-white font-bold">
                  Bulb
                </Text>
              </View>
            </View>
            {/* Appliance 2 */}
            <View className="bg-white dark:bg-[#10171d] rounded-2xl h-28 w-24">
              {/*Appliance Icon */}
              <View className="bg-white p-6 rounded-2xl shadow-2xl  bg-pink-600 flex flex-row items-center justify-center">
                <Ionicons name="laptop-outline" size={24} color="white" />
              </View>
              <View className="flex flex-col items-center justify-center mt-2">
                <Text
                  className="watch-outline text-green-500  dark:text-white font-bold"
                  onPress={() => navigation.navigate("Anomaly")}
                >
                  Macbook
                </Text>
              </View>
            </View>

            {/* Appliance 3 */}
            <View className="bg-white dark:bg-[#10171d] rounded-2xl h-28 w-24">
              {/*Appliance Icon */}
              <View className="bg-white p-6 rounded-2xl shadow-2xl  bg-blue-400 flex flex-row items-center justify-center">
                <Ionicons name="watch-outline" size={24} color="white" />
              </View>
              <View className="flex flex-col items-center justify-center mt-2">
                <Text className="watch-outline font-bold text-red-500 dark:text-white">
                  Watch
                </Text>
              </View>
            </View>
          </View>
          {/*Recommendation AI */}
          {/* <View className="bg-white dark:bg-[#10171d]  p-5 rounded-3xl mt-5 border-b border-2 border-orange-200 dark:border-violet-600">
            <Text className="text-sm dark:text-white">
              Switch to LED bulbs to save up to 80% on lighting energy costs
              while maintaining the same brightness.
            </Text>
          </View> */}
          {/* */}
          <View className="bg-[#10171d] rounded-2xl mt-4">
            <View className="flex flex-row gap-4 flex-wrap">
              <View className="flex flex-col p-5">
                <Text className="text-white font-semibold text-lg">
                  {" "}
                  Save $10 now
                </Text>
                <Text className="text-white text-sm font-thin">
                  Switch to LED bulbs to save up to 80% on lighting energy
                </Text>
                <View className="bg-white w-20 flex flex-row items-center justify-center mt-4 p-2 rounded-xl">
                  <Text className="text-black ">Turn off</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <Navbar />
    </View>
  );
}
