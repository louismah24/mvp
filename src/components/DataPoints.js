import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { styled, useColorScheme } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DataPoints() {
  return (
    <View className="flex flex-col items-center justify-center">
      <ScrollView horizontal>
        <View className="mt-10">
          <Text className="text-black dark:text-white">
            Energy consumption today{" "}
          </Text>
          <View className="mt-4">
            <View className="border border-4 rounded-full border-blue-500 dark:border-violet-600 p-3">
              <View className="w-40 h-40 rounded-full bg-white dark:bg-[#47415d] shadow-2xl">
                <View className="flex flex-col items-center justfy-center mt-12">
                  <Text className="font-semimbold text-3xl dark:text-white">
                    40KwH
                  </Text>
                  <Text className="text-sm  dark:text-white">Cost $30</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* <View className="mt-10 w-full">
          <Text>Energy consumption today</Text>
        </View> */}
      </ScrollView>
    </View>
  );
}
