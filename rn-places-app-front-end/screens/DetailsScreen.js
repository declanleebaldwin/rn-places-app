import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { View, Text, StyleSheet, Dimensions } from "react-native";

function DetailsScreen({ route, navigation }) {
  const { place } = route.params;
  const [region, setRegion] = useState({
    latitude: place.geometry.location.lat,
    longitude: place.geometry.location.lng,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{place.name}</Text>
        <View>
          <Text style={styles.vicinity}>{place.vicinity}</Text>
        </View>
        <MapView
          style={styles.mapStyle}
          region={region}
          onRegionChangeComplete={(region) => setRegion(region)}
        >
          <Marker
            coordinate={{ latitude: place.geometry.location.lat, longitude: place.geometry.location.lng }}
          />
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  header: {
    fontSize: 20,
  },
  vicinity: {
    marginTop: 5,
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default DetailsScreen;
