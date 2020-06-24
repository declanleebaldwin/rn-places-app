import React, {useState} from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const DetailsMap = (props) => {
    const [region, setRegion] = useState({
        latitude: props.latitude,
        longitude: props.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.mapStyle}
        region={region}
      >
        <Marker
          coordinate={{
            latitude: props.latitude,
            longitude: props.longitude,
          }}
          title={props.name}
          description={props.vicinity}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get("screen").width * 0.9,
    height: Dimensions.get("screen").height * 0.5,
  },
  mapContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default DetailsMap;
