import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DetailsHeader = (props) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>{props.name}</Text>
      <View>
        <Text style={styles.vicinity}>{props.vicinity}</Text>
      </View>
    </View>
  );
};

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
});

export default DetailsHeader;
