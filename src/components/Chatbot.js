import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { styled, useColorScheme } from "nativewind";

export default function Chatbot() {
  return (
    <View className="p-10 flex flex-col bg-white">
      <View>
        <View className="flex flex-col">
          <Text className="text-3xl">Chat</Text>
        </View>
      </View>
      {/* Chat from AI*/}
      <View className="flex flex-row mt-5 space-x-2 items-center justify-start">
        <Image
          className="w-10 h-10"
          source={require("../../assets/robot.png")}
        />
        <View className="flex flex-col bg-gray-200 rounded-2xl px-2">
          <Text className="text-2xl">AI</Text>
          <Text className="text-sm">Hello Wayne, How can I help you?</Text>
        </View>
      </View>
      {/* Chat from User */}
      <View className="flex flex-row mt-5 space-x-2 items-center justify-end">
        {/* <Image
          className="w-10 h-10"
          source={require("../../assets/robot.png")}
        /> */}
        <View className="flex flex-col bg-purple-200 rounded-2xl px-2">
          <Text className="text-2xl">Me</Text>
          <Text className="text-sm">Hello Wayne, How can I help you?</Text>
        </View>
      </View>

      {/* Chat from User */}
      <View className="flex flex-row mt-5 space-x-2 items-center justify-end">
        {/* <Image
          className="w-10 h-10"
          source={require("../../assets/robot.png")}
        /> */}
        <View className="flex flex-col bg-purple-200 rounded-2xl px-2">
          <Text className="text-2xl">Me</Text>
          <Text className="text-sm">Hello Wayne, How can I help you?</Text>
        </View>
      </View>

      {/* Input */}
      <View className="mt-96  flex flex-row items-center space-x-4 justify-start">
        <TextInput
          className="border-2 border-gray-200 rounded-2xl p-4 bg-purple-50 border border-0 w-5/6"
          placeholder="Your message"
        />
        <Ionicons
          name="send"
          size={24}
          color="purple"
          className="bg-purple-200 rounded-full p-2"
        />
      </View>
    </View>
  );
}
