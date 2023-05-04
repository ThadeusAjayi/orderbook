import React from "react";
import { View, StyleSheet } from "react-native";
import LeftColumn from "./leftColumn";
import RightColumn from "./rightColumn";
import colors from "../assets/colors";

export default ({ order }) => {
  return (
    <View style={styles.container}>
      <LeftColumn />
      <RightColumn />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
  },
});
