import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity  } from "react-native";
import axios from "axios";

function HomeScreen({ navigation }) {
  const [placesNearby, setPlacesNearby] = useState([]);

  const getRestaurantHandler = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        getRestaurants(position.coords.latitude, position.coords.longitude);
      },
      (error) => Alert.alert(error.message)
    );
  };

  const getRestaurants = async (latitude, longitude) => {
    try {
      let response = await axios.post("http://192.168.0.26:5000/api/places", {
        latitude: latitude,
        longitude: longitude,
      });
      setPlacesNearby(response.data.results);
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  const selectPlaceHandler = (place) => {
    console.log("selected");
    navigation.navigate("Details", {place: place});
  };

  const PlacesNearbyList = placesNearby.map((place) => (
    <TouchableOpacity
      key={place.place_id}
      style={styles.PlacesNearbyListItemContainer}
      onPress={() => selectPlaceHandler(place)}
    >
      <Text style={styles.placeName}>{place.name}</Text>
      <Text>{place.vicinity}</Text>
    </TouchableOpacity>
  ));
  return (
    <View style={styles.container}>
      <View style={styles.locationFinderContainer}>
        <Button title="Find Restaurants" onPress={getRestaurantHandler} />
        <View style={styles.placesNearbyListContainer}>{PlacesNearbyList}</View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "white",
  },
  locationFinderContainer: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  placesNearbyListContainer: {
    marginTop: 50,
  },
  PlacesNearbyListItemContainer: {
    paddingVertical: 20,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  placeName: {
    fontSize: 20,
  },
});
export default HomeScreen;
