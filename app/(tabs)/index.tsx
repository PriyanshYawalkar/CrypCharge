import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, Platform } from "react-native";
//import WebView from "react-native-webview";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

export default function Map({ }) {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      const getLocation = async () => {
        try {
          let { status } = await Location.requestForegroundPermissionsAsync();
          console.log("page renreders");
          if (status !== "granted") {
            setError("Permission to access location was denied");
            return;
          }

          let location = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.BestForNavigation,
          });

          setLocation(location);
        } catch (error) {
          console.error("Error getting location:", error);
          setError("Error getting location: " + (error as Error).message);
        }
      };

      getLocation();
    }, 50);
  });

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: "105%",
        }}
      >
        <View style={styles.mapContainer}>
          {location ? (
            <MapView
              style={styles.mapview}
              initialRegion={{
                latitude: 21.194755,
                longitude: 81.320499,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                //image={require("../../assets/images/car.png")}
                coordinate={{
                  latitude: location ? location.coords.latitude : 20,
                  longitude: location ? location.coords.longitude : 20,
                }}
                title="EV Station"
              />
              <Marker
                coordinate={{
                  latitude: 21.160351,
                  longitude: 81.3360273,
                }}
                title="Tata Power"
                pinColor="green"
              />
              <Marker
                coordinate={{
                  latitude: 21.217997,
                  longitude: 81.318398,
                }}
                title="Statiq"
                pinColor="green"
              />
              <Marker
                coordinate={{
                  latitude: 21.218401,
                  longitude: 81.309571,
                }}
                title="Charger Point"
                pinColor="green"
              />
            </MapView>
          ) : (
            <Text>Loading...</Text>
          )}
          {error && <Text>Error: {error}</Text>}
        </View>
        {/* {location ? (
        <View>
          <Text>Latitude: {location.coords.latitude}</Text>
          <Text>Longitude: {location.coords.longitude}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
      {error && <Text>Error: {error}</Text>} */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  mapContainer: {
    width: "100%",
    height: "95%",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  mapview: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});
