import React from "react";
import { StyleSheet, Button, View, Linking } from "react-native";

const DetailsButtons = (props) => {
  const openWebsite = () => {
    Linking.openURL(props.website).catch((err) =>
      Alert.alert(err.message)
    );
  };
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.button}>
        <Button title="Get Directions" />
      </View>
      <View style={styles.button}>
        <Button title="Website" onPress={openWebsite} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    width: "40%",
    height: 40,
  },
});

export default DetailsButtons;
