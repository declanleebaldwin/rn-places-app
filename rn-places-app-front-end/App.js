import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import axios from "axios";

export default function App() {
  const [location, setLocation] = useState(null);
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(position.coords);
      },
      (error) => Alert.alert(error.message)
    );
  };

  const test = async function () {
    try {
      let response = await axios.get("http://192.168.0.26:5000/api/hello");
      Alert.alert(response.data.express);
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.h1}>Restaurant Picker</Text>
          <Text style={styles.text}>Find the best restaurants near you.</Text>
        </View>
      </View>
      <View style={styles.locationFinderContainer}>
        <Button title="Find Restaurants" onPress={getLocation} />
        <Button title="TEST SERVER" onPress={test} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingTop: 30,
    backgroundColor: "#00d1b2",
    alignItems: "center",
  },
  headerTextContainer: {
    width: "80%",
    paddingVertical: 30,
  },
  h1: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  text: {
    color: "white",
  },
  locationFinderContainer: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
});
