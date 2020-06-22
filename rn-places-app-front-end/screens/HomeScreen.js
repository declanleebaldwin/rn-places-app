import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function HomeScreen() {
  const [location, setLocation] = useState(null);
  
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(position.coords);
      },
      (error) => Alert.alert(error.message)
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.locationFinderContainer}>
        <Button title="Find Restaurants" onPress={getLocation} />
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
});
export default HomeScreen;
