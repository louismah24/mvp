import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  Button,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import monochromeMapStyle from "../../monochrome-map-style";
import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from "nativewind";
import strangerThingsMapStyle from "../../stranger-things-map-style";

// sample lat long for destination 1.3959774, 103.8887643
// sample lat long for destination 1.396871, 103.9076603

export default function Maps() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const navigation = useNavigation();

  const [location, setLocation] = useState(null);

  const [errorMsg, setErrorMsg] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [markers, setMarkers] = useState([]);
  const destinationCoords = { latitude: 1.396871, longitude: 103.9076603 };

  const fetchRoute = async () => {
    try {
      // Make a request to MapBox Directions API
      const response = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/103.8999889%2C1.3959774%3B103.8455845%2C1.3690077?alternatives=true&geometries=geojson&language=en&overview=full&steps=true&access_token=pk.eyJ1IjoiYWltaW5kcyIsImEiOiJjbHVjbDVoc3gwdjNrMnNxbndia2syaDdxIn0.3JmCVnra1GuqKs-_d6oa7A`
      );
      const data = await response.json();

      console.log("data", data);

      // Extract the route coordinates from the response
      const coordinates = data.routes[0].geometry.coordinates.map((coord) => ({
        latitude: coord[1],
        longitude: coord[0],
      }));

      // Set the route coordinates state
      setRouteCoordinates(coordinates);
    } catch (error) {
      console.error("Error fetching route:", error);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      fetchRoute();
      //   let newMarkers = [];

      //   for (let i = 0; i < 10; i++) {
      //     const nearbyCoordinates = utils.generateNearbyCoordinates(
      //       destinationCoords,
      //       8
      //     ); // You can adjust the distance here
      //     const marker = {
      //       coordinate: nearbyCoordinates,
      //       title: "Nearby Charging Station",
      //       description: "Charging station available here",
      //     };
      //     newMarkers.push(marker); // Push the new marker to the new array

      //     setMarkers(() => newMarkers);
      //   }
    })();
  }, []);

  let text = "Waiting..";

  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = "Ok";
  }

  return (
    <View className="bg-[#fcfcfc] dark:bg-black w-full h-full">
      <View className="h-3/5">
        <View className="flex flex-col">
          {text === "Waiting.." ? (
            <Text>Waiting for location</Text>
          ) : (
            <MapView
              provider={PROVIDER_GOOGLE}
              customMapStyle={
                colorScheme === "light"
                  ? monochromeMapStyle
                  : strangerThingsMapStyle
              }
              initialRegion={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 1.2,
                longitudeDelta: 1.2,
              }}
              //   showsTraffic={true}
              className="w-full h-full"
            >
              <Marker
                coordinate={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                }}
                // image={require("../../assets/hatchback.png")}
                title="Your Location"
                description="This is your current location"
              >
                <Image
                  source={require("../../assets/electric-car.png")}
                  className="w-12 h-12"
                  resizeMode="contain"
                />
              </Marker>
              <Marker
                coordinate={{
                  latitude: 1.3690077,
                  longitude: 103.8455845,
                }}
                title="Nearby Charging Station"
                description="Charging station available here"
              >
                <Image
                  source={require("../../assets/charging-station-two.png")}
                  className="w-12 h-12"
                  resizeMode="contain"
                />
              </Marker>

              {/* {markers.map((marker, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: marker.coordinate.latitude,
                  longitude: marker.coordinate.longitude,
                }}
                title={marker.title}
                description={marker.description}
              >
                <Image
                  source={require("../../assets/charging-station-two.png")}
                  className="w-12 h-12"
                  resizeMode="contain"
                />
              </Marker>
            ))} */}
              {/* Polyline for the path */}
              <Polyline
                coordinates={routeCoordinates}
                strokeWidth={4}
                strokeColor="#39b6c5"
                geodesic={true}
              />
            </MapView>
          )}
        </View>
      </View>
      {/*Energy station details */}
      <View className="p-10">
        <View className="flex flex-row gap-4">
          <Image
            source={require("../../assets/charging-station.png")}
            className="w-20 h-20"
          />
          <View className="flex flex-col">
            <View className="flex flex-row">
              <Text className="text-xl dark:text-white font-semibold">
                Energy station details
              </Text>
              <Text
                className="text-black dark:text-white"
                onPress={toggleColorScheme}
              >
                Dark Mode
              </Text>
            </View>
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
            <Text className="text-lg text-gray-400 dark:text-white">
              Reviews
            </Text>
          </View>
          {/*Energy station address 1 */}
          <View className="flex flex-row gap-4 mt-0.5">
            <Ionicons name="location" size={20} color="black" />
            <Text className="text-sm text-gray-400 dark:text-white">
              Golden Lane, London EC1Y ORN, UK
            </Text>
          </View>
          <View className="w-full h-0.5 my-2 bg-gray-100"></View>
          <View className="flex flex-row gap-4">
            <Ionicons name="time" size={20} color="black" />
            <Text className="text-sm text-gray-400">Open 24 Hours</Text>
          </View>
        </View>
        {/*Reservation and Go Now buttons */}
        <View className="flex flex-row gap-4 mt-6">
          <Button
            title="Reserve Now"
            className="flex flex-col bg-green-300 dark:bg-indigo-700 p-4 rounded-lg w-1/2"
            onPress={() => navigation.navigate("Capacity")}
          />
          {/* <Text className="text-white text-center font-semibold">
              Reserve Now
            </Text> */}
          <View className="flex flex-col bg-blue-300 dark:bg-indigo-700 p-4 rounded-lg w-1/2">
            <Text className="text-white text-center font-semibold">Go Now</Text>
          </View>
        </View>
      </View>
      {/* <Navbar /> */}
    </View>
  );
}
