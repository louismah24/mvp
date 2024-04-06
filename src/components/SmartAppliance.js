import { StyleSheet, Text, View, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { styled, useColorScheme } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "./Navbar";

export function SmartAppliance() {
  return (
    <View className=" h-full w-full bg-white">
      {/*Header */}
      <View className="mt-5 p-10">
        <View className="flex flex-row">
          <View className="flex flex-col">
            <Text className="text-3xl">Home</Text>
            <Text className="text-sm">Welcome Wayne</Text>
          </View>
          <View className="ml-auto">
            <Text className="text-sm text-gray-500">Today's Weather</Text>
            <Image
              className="w-10 h-10 ml-auto"
              source={require("../../assets/weather.png")}
            />
          </View>
        </View>
      </View>
      {/*Energy Consumption Today */}
      <View className="flex flex-col items-center justify-center">
        <View className="mt-10">
          <Text className="text-black">Energy consumption today </Text>
          <View className="mt-4">
            <View className="border border-4 rounded-full border-blue-500 p-3">
              <View className="w-40 h-40 rounded-full bg-white  shadow-2xl">
                <View className="flex flex-col items-center justfy-center mt-12">
                  <Text className="font-semimbold text-3xl">40KwH</Text>
                  <Text className="text-sm">Cost $30</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* Appliances */}
      <View className="bg-gray-200 w-full h-full mt-4 rounded-t-3xl">
        <View className="p-10">
          <Text className="text-xl mb-4">Appliances</Text>
          <View className="flex flex-row px-4 gap-5">
            {/* Each Appliances */}
            {/* Appliance 1 */}

            <View className="bg-white rounded-2xl h-28 w-24">
              {/*Appliance Icon */}
              <View className="bg-white p-6 rounded-2xl shadow-2xl  bg-indigo-600 flex flex-row items-center justify-center">
                <Ionicons name="bulb" size={24} color="white" />
              </View>
              <View className="flex flex-col items-center justify-center mt-2">
                <Text className="text-green-500 font-bold">Bulb</Text>
              </View>
            </View>
            {/* Appliance 2 */}
            <View className="bg-white rounded-2xl h-28 w-24">
              {/*Appliance Icon */}
              <View className="bg-white p-6 rounded-2xl shadow-2xl  bg-pink-600 flex flex-row items-center justify-center">
                <Ionicons name="laptop-outline" size={24} color="white" />
              </View>
              <View className="flex flex-col items-center justify-center mt-2">
                <Text className="watch-outline text-green-500 font-bold">
                  Macbook
                </Text>
              </View>
            </View>

            {/* Appliance 3 */}
            <View className="bg-white rounded-2xl h-28 w-24">
              {/*Appliance Icon */}
              <View className="bg-white p-6 rounded-2xl shadow-2xl  bg-blue-400 flex flex-row items-center justify-center">
                <Ionicons name="watch-outline" size={24} color="white" />
              </View>
              <View className="flex flex-col items-center justify-center mt-2">
                <Text className="watch-outline font-bold text-red-500 ">
                  Watch
                </Text>
              </View>
            </View>
          </View>
          {/*Recommendation AI */}
          <View className="bg-white p-5 rounded-3xl mt-5 border-b border-2 border-orange-200">
            <Text className="text-sm">
              Switch to LED bulbs to save up to 80% on lighting energy costs
              while maintaining the same brightness.
            </Text>
          </View>
          {/* */}
        </View>
      </View>

      <Navbar />
    </View>
  );
}
