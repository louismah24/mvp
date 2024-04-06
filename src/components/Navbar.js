import { StyleSheet, Text, View, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { styled, useColorScheme } from "nativewind";

export default function Navbar({ theme }) {
  const navigation = useNavigation();

  return (
    <View className="flex flex-row justify-between items-center mt-auto mb-6 p-5 mx-6 bg-[#1c2029] dark:bg-white rounded-3xl">
      <View className="flex flex-col">
        <Ionicons name="settings-outline" size={32} color={"white"} />
      </View>
      <View className="flex flex-col">
        <Ionicons
          name="map-outline"
          size={32}
          color={"white"}
          onPress={() => navigation.navigate("Maps")}
        />
      </View>
      <View className="flex flex-col">
        <Ionicons
          name="battery-charging-outline"
          size={32}
          color={"white"}
          onPress={() => navigation.navigate("SmartAppliance")}
        />
      </View>
      <View className="flex flex-col">
        <Ionicons
          name="people-outline"
          size={32}
          color={"white"}
          onPress={() => navigation.navigate("Profiles")}
        />
      </View>
      <View className="flex flex-col">
        <Ionicons
          name="flower-outline"
          size={32}
          color={"white"}
          onPress={() => navigation.navigate("Chatbot")}
        />
      </View>
    </View>
  );
}
