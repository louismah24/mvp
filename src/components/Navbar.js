import { StyleSheet, Text, View, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { styled, useColorScheme } from "nativewind";

export default function Navbar({ theme }) {
  const navigation = useNavigation();

  return (
    // bg-[#1c2029]
    <View className="flex flex-row justify-between items-center mt-auto mb-6 p-5 mx-6 bg-gray-400 dark:bg-gray-300 rounded-3xl">
      <View className="flex flex-col">
        <Ionicons
          name="settings"
          size={32}
          color={theme === "light" ? "white" : "black"}
        />
      </View>
      <View className="flex flex-col">
        <Ionicons
          name="map"
          size={32}
          color={theme === "light" ? "white" : "black"}
          onPress={() => navigation.navigate("Maps")}
        />
      </View>
      <View className="flex flex-col">
        <Ionicons
          name="battery-charging"
          size={32}
          color={theme === "light" ? "white" : "black"}
          onPress={() => navigation.navigate("SmartAppliance")}
        />
      </View>
      <View className="flex flex-col">
        <Ionicons
          name="people"
          size={32}
          color={theme === "light" ? "white" : "black"}
          onPress={() => navigation.navigate("Profiles")}
        />
      </View>
    </View>
  );
}
