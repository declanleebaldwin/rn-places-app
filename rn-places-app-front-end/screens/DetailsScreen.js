import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

function DetailsScreen({ route, navigation }) {
  const { place } = route.params;
  console.log(place);
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{place.name}</Text>
        <View>
          <Text style={styles.vicinity}>{place.vicinity}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginVertical: 20
  },
  header: {
    fontSize: 20
  },
  vicinity: {
    marginTop: 5
  }
})

export default DetailsScreen;
