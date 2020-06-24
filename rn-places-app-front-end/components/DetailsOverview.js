import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Rating } from "react-native-ratings";

const DetailsOverview = (props) => {
  return (
    <View style={styles.overviewContainer}>
      <View style={styles.ratingContainer}>
        <Text style={styles.text}>{props.rating}</Text>
        <Rating
          style={styles.rating}
          startingValue={props.rating}
          imageSize={16}
          readonly={true}
        />
        <Text style={styles.text}>({props.totalRatings})</Text>
        <Text style={styles.seperator}>·</Text>
        <Text style={styles.text}>££</Text>
      </View>
      <View>
        <Text style={styles.text}>{props.phone}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overviewContainer: {
    width: Dimensions.get("screen").width * 0.9,
    paddingHorizontal: 20,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  text: {
    color: "#979797",
  },
  rating: {
    marginHorizontal: 5,
  },
  seperator: {
    color: "#979797",
    paddingHorizontal: 5,
  },
});

export default DetailsOverview;
