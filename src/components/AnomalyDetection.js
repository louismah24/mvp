import {
  StyleSheet,
  Switch,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { styled, useColorScheme } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Navbar from "./Navbar";
import DataPoints from "./DataPoints";

export default function AnomalyDetection() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <ScrollView
      className=" h-full w-full bg-white  dark:bg-[#10171d]"
      contentContainerStyle={{ paddingBottom: 60 }}
    >
      <View>
        {/* Appliance */}
        <View className="bg-purple-600 dark:bg-violet-800 h-2/5 rounded-b-2xl">
          <View className="m-10">
            <Text className="text-3xl text-white">Macbook charging</Text>
            <Text className="text-sm text-white">
              Plugged using HS110 TP-Link
            </Text>
            <Image
              source={require("../../assets/mac-charging.png")}
              className="w-full h-full"
              resizeMode="contain"
            />
          </View>
        </View>
        {/* Turn of electrical device and energy consumption */}
        <View className="p-10">
          <View className="flex flex-col">
            <View className="bg-gray-white border-2 border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center">
              <Text className="text-lg  dark:text-white">
                Energy Consumption
              </Text>
              <Text className="text-sm text-gray-500  dark:text-white">
                Your phone is not detected are you in your home? Turning off in
                5 mins
              </Text>
              {/* Button red don't turn off */}
              <View className="flex flex-row items-center justify-center  gap-2 mt-2">
                <View className="bg-rose-600  dark:bg-rose-800 w-1/2  flex flex-col  items-center justify-center rounded-xl p-3">
                  <Text className="text-sm text-white">Don't turn off</Text>
                </View>
              </View>
            </View>
          </View>
          <View className="flex flex-row">
            <View className="flex flex-col">
              {/* <Text className="text-3xl">Macbook charging</Text>
              <Text className="text-sm">Plugged using HS110 TP-Link</Text> */}
              <View className="flex flex-row gap-2 mt-5">
                <View className="bg-gray-100 dark:bg-[#47415d] w-1/2  flex flex-col  items-center justify-center rounded-xl p-4">
                  <Text className="text-sm  dark:text-white  font-semibold">
                    4KWh (Avg. $0.2/h)
                  </Text>
                  <Text className="text-sm text-gray-500  dark:text-white">
                    Energy usage
                  </Text>
                </View>
                <View className="bg-gray-100 dark:bg-[#47415d] w-1/2  flex flex-col  items-center justify-center rounded-xl p-4">
                  <Switch
                    trackColor={{ false: "pink", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "pink" : "purple"}
                    ios_backgroundColor="white"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                  <Text className="text-sm dark:text-white mt-2">Turn off</Text>
                </View>
              </View>
              <View>
                <Text className="text-2xl mt-5 dark:text-white">
                  Anomaly Detection
                </Text>
                <Text className="text-sm text-gray-500 dark:text-white">
                  Detecting anomaly in energy consumption
                </Text>
                <View className="flex flex-row items-end justify-start gap-3 h-28 bg-gray-200  dark:bg-[#47415d]  mt-5 rounded-2xl">
                  <View className="w-12 h-10 bg-white rounded-t-xl" />
                  <View className="w-12 h-14 bg-white rounded-t-xl" />
                  <View className="w-12 h-4 bg-white rounded-t-xl" />
                  <View className="w-12 h-20 bg-rose-400 rounded-t-xl" />
                  <View className="w-12 h-4 bg-white rounded-t-xl" />
                  <View className="w-12 h-4 bg-white rounded-t-xl" />
                </View>
                {/* Alert all-time high on thurs */}
                <View className="flex flex-row pt-5 gap-2 pb-10">
                  <Ionicons name="alert" size={24} color="red" />
                  <Text className="text-sm text-red-500 font-semibold">
                    All-time high energy consumption on Thursday
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
