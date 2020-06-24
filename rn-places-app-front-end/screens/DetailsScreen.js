import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import axios from "axios";
import DetailsHeader from "../components/DetailsHeader";
import DetailsMap from "../components/DetailsMap";
import DetailsButtons from "../components/DetailsButtons";
import DetailsOverview from "../components/DetailsOverview";

function DetailsScreen({ route, navigation }) {
  const { place } = route.params;
  const [placeDetails, setPlaceDetails] = useState(null);

  const getPlaceDetails = async (place_id) => {
    if (!place_id) return;
    try {
      let response = await axios.post("http://192.168.0.26:5000/api/details", {
        id: place_id,
      });
      setPlaceDetails(response.data.result);
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  getPlaceDetails(place.place_id);

  return (
    <View style={styles.container}>
      <DetailsHeader name={place.name} vicinity={place.vicinity} />
      {placeDetails ? (
        <DetailsOverview
          rating={placeDetails.rating}
          totalRatings={placeDetails.user_ratings_total}
          phone={placeDetails.formatted_phone_number}
        />
      ) : null}
      <DetailsMap
        latitude={place.geometry.location.lat}
        longitude={place.geometry.location.lng}
        name={place.name}
        vicinity={place.vicinity}
      />
      {placeDetails ? <DetailsButtons website={placeDetails.website} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default DetailsScreen;
