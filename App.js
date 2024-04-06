import { Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "nativewind";

import Navbar from "./src/components/Navbar";
import Maps from "./src/components/Maps";
import Capacity from "./src/components/Capacity";
import Payment from "./src/components/Payment";

export function HomeScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="bg-[#fcfcfc] dark:bg-[#10171d] w-full h-full pt-10">
      {/* Add a image using Image react native and add some text over it using tailwindcss*/}
      <View className="flex flex-row relative">
        <Image
          className="w-full h-72 mt-28   rounded-lg"
          source={require("./assets/car-one.png")}
        />
        <View className="flex flex-row absolute top-10 left-5 justify-center items-center">
          <View className="flex flex-col">
            <View className="flex flex-row">
              <Text className="text-black dark:text-white text-4xl font-semibold">
                Model 3
              </Text>
              <Text
                onPress={toggleColorScheme}
                className="text-black dark:text-white"
              >
                Dark Mode
              </Text>
            </View>
            <Text className="text-[#919191] dark:text:white text-lg font-semibold">
              Tesla, 2018
            </Text>
          </View>
        </View>
      </View>
      {/* Charging left and  distance travelled right */}
      <View className="flex flex-row justify-center items-center">
        <View className="flex flex-col bg-green-300 dark:bg-[#7601ff] h-auto p-6 rounded-2xl">
          <Text className="text-[#919191] dark:text-white text-md mb-2">
            Battery energy
          </Text>
          <Text className="text-black dark:text-white text-5xl font-extrabold">
            72 %
          </Text>

          <Text className="text-black  dark:text-white text-sm font-semibold">
            Power saving mode
          </Text>
        </View>

        <View className="flex flex-col ml-6  border-2 border-gray-300 h-auto p-6 rounded-2xl">
          <Text className="text-[#919191] dark:text-white text-md mb-2">
            {" "}
            Distance remaining
          </Text>
          <Text className="text-black dark:text-white text-5xl font-extrabold">
            68km
          </Text>
          <Text className="text-black dark:text-white text-sm font-semibold">
            ~ 1h 20m
          </Text>
        </View>
      </View>
      {/* Charging port banner with text */}
      <View className="flex flex-row justify-center items-center mt-6 p-6">
        <View className="flex flex-row bg-[#f2f2f2]  w-full h-auto p-6 rounded-2xl">
          <View className="flex flex-col">
            <Text className="text-[#919191] dark:text:white text-md mb-2">
              Charging port
            </Text>
            <Text className="text-black dark:text:white text-2xl font-extrabold">
              Type 1 - J1772{" "}
            </Text>
            <Text className="text-black dark:text:white text-sm font-semibold">
              AC N.America 19.2 kw
            </Text>
          </View>
          <Image
            className="w-40 h-20 ml-auto"
            source={require("./assets/charging-one.jpg")}
          />
        </View>
      </View>
      {/* Black Navbar with 3 icons */}
      <Navbar theme={colorScheme} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="Capacity" component={Capacity} />
        <Stack.Screen name="Payment" component={Payment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
